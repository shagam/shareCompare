"use client";

import {UrlGetParse} from "../../utils/UrlGetParse";   // adjust path if needed
import memoryStore from "../../components/MemoryStore"; // adjust path if needed


export default function UrlGetParsePage() {

  return (
    <UrlGetParse
      symbol={memoryStore.get('chartSymbol')}
      corsServer={memoryStore.get('servSelect')}
      ssl={memoryStore.get('ssl')}
      PORT={memoryStore.get('PORT')}
    />
  );
}
