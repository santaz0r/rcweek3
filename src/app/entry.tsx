import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { ThemeProvider } from '../shared/lib/context/themeContext';
import { LangProvider } from '../shared/lib/context/langContext';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <LangProvider>
      <App />
    </LangProvider>
  </ThemeProvider>
);
