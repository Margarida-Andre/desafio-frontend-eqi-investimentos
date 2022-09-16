import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Regular.eot");
    src: url("/fonts/Roboto-Regular.eot?#iefix") format('embedded-opentype'),
         url("/fonts/Roboto-Regular.woff2") format('woff2'),
         url("/fonts/Roboto-Regular.woff") format('woff'),
         url("/fonts/Roboto-Regular.ttf") format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Roboto";
    src: url('/fonts/Roboto-Italic.eot');
    src: url('/fonts/Roboto-Italic.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-Italic.woff2') format('woff2'),
         url('/fonts/Roboto-Italic.woff') format('woff'),
         url('/fonts/Roboto-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
}


@font-face {
    font-family: "Roboto";
    src: url('/fonts/Roboto-Bold.eot');
    src: url('/fonts/Roboto-Bold.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-Bold.woff2') format('woff2'),
         url('/fonts/Roboto-Bold.woff') format('woff'),
         url('/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}

    ${({ theme }) => css`
      * {
        box-sizing: boder-box;
        margin: 0;
        outline: 0;
        padding: 0;
      }

      html,
      body {
        width: 100vw;
        height: 100vh;
      }

      body {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-family: "Roboto";
        font-weight: 400;
        font-style: normal;
        background: ${theme.color.white};
        color: ${theme.color.dark};
        font-size: ${theme.size.s3};
      }

      h1,
      h2,
      h3,
      h4,
      h4,
      h6 {
        font-family: "Roboto";
        font-weight: 700;
        font-style: normal;
      }

      ::-webkit-scrollbar {
        width: ${theme.size.s2};
      }

      ::-webkit-scrollbar-track {
        background: ${theme.color.orange};
        border-radius: ${theme.size.s1};
      }
    `}
`;
