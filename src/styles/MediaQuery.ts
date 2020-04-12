import { SerializedStyles } from '@emotion/core';

export const mobile = (css: SerializedStyles): string => `@media (max-width: 375px) { ${css.styles} }`;
