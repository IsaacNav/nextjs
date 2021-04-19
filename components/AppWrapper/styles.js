import css from 'styled-jsx/css'
import { fonts, colors, spacing, breakpoints } from 'styles/theme'

const opacity = 0.5

const styles = css`
  div {
    width: 100%;
    height: 100%;
    padding: 0;
    background: transparent;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: transparent;
  }

  .box {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    height: 100vh;
    width: 100vw;
    padding: ${spacing(2)};
  }

  @media (min-width: ${breakpoints.desktop}) {
    .container main .box {
      height: 90vh;
      width: 500px;
      padding: ${spacing(2)};
    }
  }
`

export const globalStyles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    background-image: radial-gradient(
        ${colors.primaryOpacity(opacity)} 1px,
        transparent 1px
      ),
      radial-gradient(${colors.primaryOpacity(opacity)} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
  }

  * {
    box-sizing: border-box;
  }
`

export default styles
