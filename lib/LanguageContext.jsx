'use client';
import { createContext, useContext, useState } from 'react';

const Ctx = createContext({ lang: 'en', toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <Ctx.Provider value={{ lang, toggle: () => setLang(l => l === 'en' ? 'id' : 'en') }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  return useContext(Ctx);
}
