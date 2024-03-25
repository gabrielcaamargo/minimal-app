import { theme } from '@/theme';

type TextVariantType = keyof typeof theme.typography

type TextColorType = 'primary' | 'secondary' | 'danger'

export { TextVariantType, TextColorType };
