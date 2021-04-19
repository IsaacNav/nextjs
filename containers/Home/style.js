import css from 'styled-jsx/css';
import { fonts, spacing } from 'styles/theme';

const styles = css`
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.base};
    font-weight: 600;
    padding: ${spacing(3)};
  }
`;

export default styles;
