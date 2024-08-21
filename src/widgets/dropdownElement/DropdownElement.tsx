import { FC, PropsWithChildren, useState } from 'react';
import Dropdown from '../../shared/lib/modals/dropdown/Dropdown';
import { Translate } from '../../shared/ui/molecules/Translate';
import { DICTIONARY } from '../../shared/dictionary/dictionary';

type Coords = {
  x: number;
  y: number;
};

type Props = {
  dropdownOptions: string[];
};

const DropdownElement: FC<PropsWithChildren<Props>> = ({ children, dropdownOptions }) => {
  const [isOpenedDrop, setIsOpenedDrop] = useState<boolean>(false);
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { left, top, height } = e.currentTarget.getBoundingClientRect();

    setCoords({
      x: left,
      y: top + height,
    });
    setIsOpenedDrop((prev) => !prev);
  };

  return (
    <>
      <div>{children}</div>
      <button onClick={handleClick}>
        <Translate>{DICTIONARY.toOpen}</Translate>
      </button>
      <Dropdown isOpened={isOpenedDrop} coords={coords}>
        {dropdownOptions.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </Dropdown>
    </>
  );
};

export default DropdownElement;
