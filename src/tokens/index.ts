import { colors } from './colors';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';
import { typography } from './typography';
import { animations } from './animations';

export const tokens = {
  colors,
  spacing,
  radius,
  shadows,
  typography,
  animations,
} as const;

export { colors, spacing, radius, shadows, typography, animations };
export default tokens;
