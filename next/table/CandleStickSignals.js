// utils/signals.js

export function createSignals(trace) {
  const n = trace.x.length;

  // 1. Normalize + reverse to oldest -> newest for math
  // Your data is newest-first + first 8 closes are strings
  const candles = trace.x.map((_, i) => ({
    date: trace.x[i],
    open: parseFloat(trace.open[i]),
    high: parseFloat(trace.high[i]),
    low: parseFloat(trace.low[i]),
    close: parseFloat(trace.close[i]),
  })).reverse(); // now oldest first

  const signals = [];

  const body = (c) => Math.abs(c.close - c.open);
  const range = (c) => c.high - c.low;
  const isBull = (c) => c.close > c.open;
  const isBear = (c) => c.close < c.open;

  // SMA helper
  const sma = (arr, period, idx) => {
    if (idx < period - 1) return null;
    let sum = 0;
    for (let k = idx - period + 1; k <= idx; k++) sum += arr[k];
    return sum / period;
  };
  const closes = candles.map(c => c.close);

  for (let i = 1; i < n; i++) {
    const prev = candles[i - 1];
    const curr = candles[i];

    // Original index (newest-first, to match your chart)
    const originalIndex = n - 1 - i;

    // --- 1. BULLISH ENGULFING ---
    if (isBear(prev) && isBull(curr) &&
        curr.open <= prev.close && curr.close >= prev.open) {
      signals.push({ index: originalIndex, date: curr.date, type1: 'BULLISH_ENGULFING', direction: 'BUY', price: curr.close, strength: 3 });
      continue;
    }

    // --- 2. BEARISH ENGULFING ---
    if (isBull(prev) && isBear(curr) &&
        curr.open >= prev.close && curr.close <= prev.open) {
      signals.push({ index: originalIndex, date: curr.date, type1: 'BEARISH_ENGULFING', direction: 'SELL', price: curr.close, strength: 3 });
      continue;
    }

    // --- 3. HAMMER ---
    const lowerWick = Math.min(curr.open, curr.close) - curr.low;
    const upperWick = curr.high - Math.max(curr.open, curr.close);
    if (range(curr) > 0 && lowerWick > body(curr) * 2 && upperWick < body(curr) * 0.5) {
      signals.push({ index: originalIndex, date: curr.date, type1: 'HAMMER', direction: 'BUY', price: curr.close, strength: 2 });
      continue;
    }

    // --- 4. SHOOTING STAR ---
    if (range(curr) > 0 && upperWick > body(curr) * 2 && lowerWick < body(curr) * 0.5) {
      signals.push({ index: originalIndex, date: curr.date, type1: 'SHOOTING_STAR', direction: 'SELL', price: curr.close, strength: 2 });
      continue;
    }

    // --- 5. DOJI ---
    if (range(curr) > 0 && body(curr) < range(curr) * 0.1) {
      signals.push({ index: originalIndex, date: curr.date, type1: 'DOJI', direction: 'NEUTRAL', price: curr.close, strength: 1 });
      continue;
    }

    // --- 6. SMA 5 / 20 CROSS ---
    const sma5 = sma(closes, 5, i);
    const sma5Prev = sma(closes, 5, i - 1);
    const sma20 = sma(closes, 20, i);
    const sma20Prev = sma(closes, 20, i - 1);
    if (sma5 && sma5Prev && sma20 && sma20Prev) {
      if (sma5Prev <= sma20Prev && sma5 > sma20) {
        signals.push({ index: originalIndex, date: curr.date, type1: 'BULLISH_SMA_CROSS', direction: 'BUY', price: curr.close, strength: 2 });
      } else if (sma5Prev >= sma20Prev && sma5 < sma20) {
        signals.push({ index: originalIndex, date: curr.date, type1: 'BEARISH_SMA_CROSS', direction: 'SELL', price: curr.close, strength: 2 });
      }
    }
  }

  // Return newest-first to match your chart order
  return signals.reverse();
}