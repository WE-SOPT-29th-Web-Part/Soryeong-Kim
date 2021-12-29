import { DefaultTheme } from 'styled-components';

const calcRem = (size: number): string => `${size / 16}rem`;
const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  titleSize: calcRem(50),
};

const colors = {
  gray1: '#FAFAFA',
  gray2: '#F3F3F3',
  gray3: '#D4D4D4',
  black: '#3E3E3E',
  white: '#FFFFFF',
  borderGray: '#929292',
  orange: '#F7630C',
  blue: '#0097e6',
  skyblue: '#b9e2f5',
};

const theme: DefaultTheme = {
  fontSizes,
  colors,
};

export default theme;
