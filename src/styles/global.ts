import { css } from '@emotion/react';

import reset from './reset';

const globalStyles = css`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'IBM Plex Sans KR', -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default globalStyles;
