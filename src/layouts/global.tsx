import { css, Global } from "@emotion/react";

export const GlobalStyle = (
  <Global
    styles={css`
      @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css");
      html {
        font-size: 12px;
      }
      body {
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
          Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
          "Noto Sans KR", "Malgun Gothic", sans-serif;
      }
      @media (min-width: 1024px) {
        html {
          font-size: 16px;
        }
      }
    `}
  />
);
