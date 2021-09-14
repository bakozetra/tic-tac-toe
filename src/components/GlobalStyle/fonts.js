import { css } from 'styled-components'

import GomariceUsuaziHosomozi from './fonts/gomarice_usuazi_hosomozi.woff'
import GomariceUsuaziHosomozi2 from './fonts/gomarice_usuazi_hosomozi.woff2'

export const fonts = css`
  @font-face {
    font-family: 'Usuazi Hosomozi';
    src: local('Usuazi Hosomozi'), local('UsuaziHosomozi'),
      url(${GomariceUsuaziHosomozi}) format('woff2'),
      url(${GomariceUsuaziHosomozi2}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`