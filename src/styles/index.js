import { createStitches } from '@stitches/react';

export const { styled, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        red900: '#FF0000',
        red800: '#FF040D',
        white: '#ffffff',
        gray900: '#333d3e',
        gray800: '#4e4b59',
        gray700: '#5f5c6b',
        gray600: '#7a7786',
        gray500: '#8c8a97',
        gray400: '#acabb7',
        gray300: '#c6c5ce',
        gray200: '#e1e0e7',
      },
    },
  });
