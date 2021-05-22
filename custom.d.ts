import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      terciary: string;

      background: string;
      text: string;
      placeholderColor: string;
      activeColor: string;
      gradientColors: string[];
      link: string;
    },
    font: {
      bold: string;
      regular: string;
      light: string;
    }
  }
}

declare module '*.png' {
    const content: any;
    export default content;
}