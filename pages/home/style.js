import css from 'styled-jsx/css';
import { spacing } from 'styles/theme';

export default css`
  .header {
    width: 100%;
    height: 60px;
    padding: ${spacing(1)};
    border: 1px solid red;
  }
  img {
    display: block;
    width: 120px;
    height: 40px;
    border: 1px solid red;
  }
  svg {
    height: 100%;
  }
`;
