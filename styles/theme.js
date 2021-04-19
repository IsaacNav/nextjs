import { addOpacityColor } from './utils';

export const breakpoints = {
  desktop: '600px',
};

export const fonts = {
  base:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, sans-serif',
};

export const colors = {
  primary: '#2196F3',
  secondary: '#673AB7',
  black: '#212121',
  white: '#FFFFFF',
  primaryOpacity: (opacity) => addOpacityColor('#2196F3', opacity),
  secondaryOpacity: (opacity) => addOpacityColor('#1976D2', opacity),
};

export const spacing = (number) => `${8 * number}px`;
