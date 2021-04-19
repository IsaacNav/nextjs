import css from 'styled-jsx/css';

import { colors, fonts, spacing } from 'styles/theme';

const styles = css`
  div {
    width: 100%;
    height: 76px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.base};
    font-weight: 600;
    padding: ${spacing(1)};
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
  }
  img + span {
    margin-left: 10px;
  }
  span {
    color: ${colors.primary};
  }
`;

export default styles;
