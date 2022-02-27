import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    shadow: string;
    circles: {
      red: string;
      yellow: string;
      green: string;
      [key: string]: string;
    };
  }
}
