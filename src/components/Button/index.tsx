/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
}

export default function Button(props: Props): JSX.Element {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  height: 2rem;
  font-size: 1rem;
  padding: 0 .5rem;
  border-radius: .5rem;
  box-shadow: .2rem .2rem .4rem #c6cfc8, -.1rem -.1rem .2rem #f1f1f1;

  &:active {
    box-shadow: inset .2rem .2rem .4rem #c6cfc8, -.1rem -.1rem .2rem #efefef;
    /* box-shadow: .2rem .2rem .4rem #222, -.1rem -.1rem .2rem #222; */
  }
`;
