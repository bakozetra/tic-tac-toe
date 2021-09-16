import { css } from 'styled-components'
import GomariceUsuazi from "./fonts/gomarice_usuazi_hosomozi.woff"

export const fonts = css`
  @font-face {
    font-family: 'Futura Std';
    src: local('Futura Std'), local('FuturaStd'),
      url(${FuturaStdWoff2}) format('woff2'),
      url(${GomariceUsuazi}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

`