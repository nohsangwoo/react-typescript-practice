import "styled-components";

// 이렇게 theme 선언을 해주면 자동완선 기능에서 theme에 무엇이 들어있는지
// 리스트를 보여줌
declare module "styled-components" {
  export interface DefaultTheme {
    blueColor: string;
  }
}
