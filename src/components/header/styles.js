import { styled } from '@stitches/react';
import { Container } from '../../styles/global';

export const HeaderStyle = styled('header', {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: 96,
  borderBottom: '1px solid rgba(255,255,255,.2)',
  display: 'flex',
  alignItems: 'center',
  zIndex: 10,
  [`${Container}`]: {
    height: '100%',
    borderLeft: '1px solid rgba(255,255,255,.2)',
    borderRight: '1px solid rgba(255,255,255,.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.logo': {
    position: 'relative',
    paddingLeft: '2.3rem',
    '&:before': {
      content: '',
      backgroundColor: '$red800',
      boxShadow: '0px 2px 4px rgba(255,4,13,.16)',
      position: 'absolute',
      bottom: '-2.8rem',
      left: '2.3rem',
      width: '10.4rem',
      height: '.1rem',
    },
  },
  '.code': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 2.3rem',
    borderLeft: '1px solid rgba(255,255,255,.2)',
  },
});
