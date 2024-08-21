import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { FC, PropsWithChildren, useState } from 'react';
import { DICTIONARY } from '../../shared/dictionary/dictionary';
import { Translate } from '../../shared/ui/molecules/Translate';
import Popover from '../../shared/lib/modals/popover/Popover';

type Props = {
  tooltipText: string;
};

const ElementWithTooltip: FC<PropsWithChildren<Props>> = ({ children, tooltipText }) => {
  const [isOpenedHover, setIsOpenedHover] = useState<boolean>(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpenedHover,
    onOpenChange: setIsOpenedHover,
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift(),
    ],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

  return (
    <>
      <div> {children}</div>
      <button ref={refs.setReference} {...getReferenceProps()}>
        <Translate>{DICTIONARY.toOpen}</Translate>
      </button>
      <Popover
        isOpened={isOpenedHover}
        getFloatingProps={getFloatingProps}
        setFloating={refs.setFloating}
        styles={floatingStyles}
      >
        {tooltipText}
      </Popover>
    </>
  );
};

export default ElementWithTooltip;
