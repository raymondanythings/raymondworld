import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    boxColor: string;
    sectionColor: string;
    textColor: string;
    shadow: string;
    layeredColor: string;
    circles: {
      red: string;
      yellow: string;
      green: string;
      [key: string]: string;
    };
  }
}
