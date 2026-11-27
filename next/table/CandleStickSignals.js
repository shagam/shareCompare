// utils/signals.js


export function createSignals(trace, debug = false) {
  const n = trace.x.length;

  const candles = trace.x.map((_, i) => ({
    date: trace.x[i],
    open: parseFloat(trace.open[i]),
    high: parseFloat(trace.high[i]),
    low: parseFloat(trace.low[i]),
    close: parseFloat(trace.close[i]),
  })).reverse(); // oldest -> newest

  const signals = [];
  const body = (c) => Math.abs(c.close - c.open);
  const range = (c) => c.high - c.low;
  const isBull = (c) => c.close > c.open;
  const isBear = (c) => c.close < c.open;

  const closes = candles.map(c => c.close);
  const sma = (arr, period, idx) => {
    if (idx < period - 1) return null;
    let s = 0;
    for (let k = idx - period + 1; k <= idx; k++) s += arr[k];
    return s / period;
  };

  // LOOSE trend: just compare to SMA20, not perfect staircase
  const isDowntrend = (i) => {
    const s20 = sma(closes, 20, i);
    return s20 ? closes[i] < s20 : false;
  };
  const isUptrend = (i) => {
    const s20 = sma(closes, 20, i);
    return s20 ? closes[i] > s20 : false;
  };

  for (let i = 1; i < n; i++) {
    const prev = candles[i - 1];
    const curr = candles[i];
    const next = candles[i + 1]; // may be undefined on last candle
    const originalIndex = n - 1 - i;

    const lowerWick = Math.min(curr.open, curr.close) - curr.low;
    const upperWick = curr.high - Math.max(curr.open, curr.close);

    // Confirmation is now a BONUS, not a requirement
    const confirmedUp = next ? next.close > curr.close : true;
    const confirmedDown = next ? next.close < curr.close : true;

    // --- BULLISH ENGULFING ---
    if (isBear(prev) && isBull(curr) &&
        curr.open <= prev.close && curr.close >= prev.open) {
      signals.push({
        index: originalIndex, date: curr.date,
        type: 'BULLISH_ENGULFING', direction: 'BUY', price: curr.close,
        strength: confirmedUp ? 3 : 2,
      });
      if (debug) console.log('BUY engulfing', curr.date);
      continue;
    }

    // --- BEARISH ENGULFING ---
    if (isBull(prev) && isBear(curr) &&
        curr.open >= prev.close && curr.close <= prev.open) {
      signals.push({
        index: originalIndex, date: curr.date,
        type: 'BEARISH_ENGULFING', direction: 'SELL', price: curr.close,
        strength: confirmedDown ? 3 : 2,
      });
      if (debug) console.log('SELL engulfing', curr.date);
      continue;
    }

    // --- HAMMER: only needs price below SMA20, not perfect downtrend ---
    if (range(curr) > 0 && lowerWick > body(curr) * 1.5 && upperWick < body(curr) &&
        isDowntrend(i)) {
      signals.push({
        index: originalIndex, date: curr.date,
        type: 'HAMMER', direction: 'BUY', price: curr.close,
        strength: confirmedUp ? 2 : 1,
      });
      continue;
    }

    // --- SHOOTING STAR ---
    if (range(curr) > 0 && upperWick > body(curr) * 1.5 && lowerWick < body(curr) &&
        isUptrend(i)) {
      signals.push({
        index: originalIndex, date: curr.date,
        type: 'SHOOTING_STAR', direction: 'SELL', price: curr.close,
        strength: confirmedDown ? 2 : 1,
      });
      continue;
    }
  }

  // --- FALLBACK: if still 0, return strongest engulfing-like moves ---
  // So you never see an empty chart again
  if (signals.length === 0) {
    if (debug) console.log('No pure patterns, using fallback');
    for (let i = 1; i < n; i++) {
      const prev = candles[i-1];
      const curr = candles[i];
      // Big reversal candle: opposite color + bigger body than prev
      if (isBear(prev) && isBull(curr) && body(curr) > body(prev)) {
        signals.push({ index: n-1-i, date: curr.date, type: 'BULLISH_ENGULFING', direction: 'BUY', price: curr.close, strength: 1 });
      }
      if (isBull(prev) && isBear(curr) && body(curr) > body(prev)) {
        signals.push({ index: n-1-i, date: curr.date, type: 'BEARISH_ENGULFING', direction: 'SELL', price: curr.close, strength: 1 });
      }
    }
  }

  return signals.sort((a,b) => new Date(b.date) - new Date(a.date));
}