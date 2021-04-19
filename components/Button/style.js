import css from 'styled-jsx/css';
import { colors, spacing } from 'styles/theme';
import { addOpacityColor } from 'styles/utils';

const styles = css`
  button {
    border: none;
    color: ${colors.white};
    padding: ${spacing(0.5)} ${spacing(1)};
    background: ${colors.black};
    border-radius: 9999px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid ${colors.black};
  }
  button:hover {
    background: #ffffff;
    color: ${colors.secondary};
    border: 1px solid ${colors.secondary};
    box-shadow: 0 3px 8px ${addOpacityColor('#673AB7', 0.4)};
  }
`;

export default styles;
