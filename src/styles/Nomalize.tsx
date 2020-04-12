/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const noamlize = css`
  ${emotionNormalize};
  * {
    box-sizing: border-box;
  }
`

export default function (): JSX.Element {
  return <Global styles={noamlize} />
}
