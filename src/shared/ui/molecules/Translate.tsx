import { FC } from 'react';
import { useLang } from '../../lib/hooks/useLang';

type Lang = 'ru' | 'en';
type Word = Record<Lang, string>;

type Props = {
  children: Word | [Word, string];
};

export const Translate: FC<Props> = ({ children }) => {
  const { lang } = useLang();
  const isArray = Array.isArray(children);

  if (isArray) {
    const [first, second] = children;
    return (
      <>
        {first[lang]} {second}
      </>
    );
  }

  return <>{children[lang]}</>;
};
