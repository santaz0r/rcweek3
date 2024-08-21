import { createContext, ReactNode, useState } from 'react';

type Langs = 'en' | 'ru';

type LangContextType = {
  lang: Langs;
  switchLang: (a: Langs) => void;
};

type Undefinedable<T> = T | undefined;

export const LangContext = createContext<Undefinedable<LangContextType>>(undefined);

type LangProvProps = {
  children: ReactNode;
};

export const LangProvider = ({ children }: LangProvProps) => {
  const [lang, setLang] = useState<Langs>('en');
  const switchLang = (value: Langs) => setLang(value);

  return <LangContext.Provider value={{ lang, switchLang }}>{children}</LangContext.Provider>;
};
