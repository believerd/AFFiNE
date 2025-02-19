import { globalStyle, style } from '@vanilla-extract/css';



export const scrollableContainerRoot = style({
  width: '100%',
  vars: {
    '--scrollbar-width': '10px',
  },
  height: '100%',

});

export const scrollTopBorder = style({
  position: 'absolute',
  top: 0,
  left: '16px',
  right: '16px',
  height: '1px',
  transition: 'opacity .3s .2s',
  opacity: 0,
  background: 'var(--affine-border-color)',
  selectors: {
    '&[data-has-scroll-top="true"]': {
      opacity: 1,
    },
  },
});

export const scrollableViewport = style({
  height: '100%',
  width: '100%',
});


globalStyle(`${scrollableViewport} > div`, {
  maxWidth: '100%',
  display: 'block !important',
});

export const scrollableContainer = style({
  height: '100%',
  marginBottom: '4px',
});

export const scrollbar = style({
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
  touchAction: 'none',
  padding: '0 2px',
  marginRight: '4px',
  width: 'var(--scrollbar-width)',
  height: '100%',
  opacity: 1,
  transition: 'opacity .15s',
  selectors: {
    '&[data-state="hidden"]': {
      opacity: 0,
    },
  },
});
export const TableScrollbar = style({
  paddingTop: '60px',
  paddingBottom: '60px',
});

export const scrollbarThumb = style({
  position: 'relative',
  background: 'var(--affine-black-30)',
  borderRadius: '4px',
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      minWidth: '44px',
      minHeight: '44px',
    },
  },
});
