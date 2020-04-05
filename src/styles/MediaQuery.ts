import { SerializedStyles } from '@emotion/core'

export const mobile = (css: SerializedStyles) => `@media (max-width: 600px) { ${css.styles} }`;