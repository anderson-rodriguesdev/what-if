import { styled } from '../../styles';

export const StyledPopupVideo = styled('div', {
  width: '100%',
  maxWidth: '31.2rem',
  span: {
    display: 'block',
    fontWeight: 600,
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
    letterSpacing: '0.095em',
    color: '$gray200',
    marginBottom: '1.4rem',
  },
  button: {
    width: '100%',
    height: '17.9rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    borderRadius: '1rem',
    '&:hover': {
      '& > div': {
        transform: 'scale(1.1)',
      },
    },
    '& > div': {
      width: '4.7rem',
      height: '4.7rem',
      background: 'rgba(19,19,19,0.8)',
      backdropFilter: 'blur(2.5px)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform .3s ease',
    },
  },
});
