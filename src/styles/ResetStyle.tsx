/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import reset from 'emotion-reset';

const noamlize = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
  button {
    -webkit-appearance: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
    background-color: none;
    padding: 0;
    border: none;
    outline: none;
  }
`;

export default function ResetStyle(): JSX.Element {
  return <Global styles={noamlize} />;
}
