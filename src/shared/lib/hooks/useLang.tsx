import { useContext } from 'react';
import { LangContext } from '../context/langContext';

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error('no context');
  return context;
};
