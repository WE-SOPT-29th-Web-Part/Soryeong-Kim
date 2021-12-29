import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray1: string;
      gray2: string;
      gray3: string;
      black: string;
      white: string;
      borderGray: string;
      orange: string;
      blue: string;
      skyblue: string;
    };
    fontSizes: {
      small: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      titleSize: string;
    };
  }
}
