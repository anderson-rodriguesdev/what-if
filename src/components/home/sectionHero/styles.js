import { styled } from '../../../styles';

import bgHero from '../../../assets/bg-hero.jpg';
import { Container } from '../../../styles/global';

export const SectionHeroStyle = styled('section', {
  position: 'relative',
  zIndex: 1,
  width: '100%',
  height: '73.1rem',
  background: `url(${bgHero.src}) no-repeat top center`,
  backgroundAttachment: 'fixed',
  paddingTop: '9.6rem',
  display: 'flex',
  [`${Container}`]: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30rem',
    backgroundImage: 'linear-gradient(transparent,#000000)',
    zIndex: -1,
  },
  '@tablet': {
    height: 'auto',
    [`${Container}`]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});

export const AreaSocial = styled('div', {
  width: '7.2rem',
  height: '100%',
  borderLeft: '1px solid rgba(255,255,255,0.2)',
  borderRight: '1px solid rgba(255,255,255,0.2)',
  ul: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    padding: '3rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    li: {
      '&:not(:last-child)': {
        marginBottom: '3.2rem',
      },
      a: {
        display: 'block',
        cursor: 'pointer',
      },
    },
  },
  '@tablet': {
    alignSelf: 'flex-start',
    marginBottom: '4rem',
    width: '12.8rem',
    ul: {
      flexDirection: 'row',
      justifyContent: 'center',
      li: {
        '&:not(:last-child)': {
          marginBottom: 0,
          marginRight: '3.2rem',
        },
      },
    },
  },
});

export const ContextText = styled('div', {
  height: '100%',
  paddingLeft: '9.6rem',
  paddingRight: '7.1rem',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  flex: 1,
  paddingBottom: '3.1rem',
  borderRight: '1px solid rgba(255,255,255,0.2)',
  '.left': {
    flex: 1,
    maxWidth: '57.4rem',
    paddingBottom: '10rem',
    h3: {
      fontWeight: 700,
      fontSize: '1.4rem',
      lineHeight: '2.1rem',
      letterSpacing: '0.095em',
      color: '#ffa800',
      marginBottom: '.8rem',
    },
    h1: {
      fontWeight: 600,
      fontSize: '6.1rem',
      lineHeight: '7.1rem',
      marginBottom: '2.4rem',
      maxWidth: '40rem',
    },
    p: {
      fontWeight: 400,
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
      color: '$gray200',
      maxWidth: '49rem',
      marginBottom: '3.2rem',
    },
    a: {
      display: 'inline-block',
      padding: '1.5rem 5.2rem',
      backgroundColor: '$red900',
      borderRadius: '.5rem',
      fontWeight: 600,
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
      color: '$white',
      textDecoration: 'none',
      transition: 'filter .3s ease',
      '&:hover': {
        filter: 'brightness(0.8)',
      },
    },
  },
  '@tablet': {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: 'none',
    '.left': {
      a: {
        maxWidth: 'max-content',
        margin: '0 auto',
      },
    },
  },
});
