/** @jsx jsx */
import { useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { mobile } from '../../styles/MediaQuery';

interface Props {
  children: any;
}

export default function(props: Props) {

  useEffect(() => {
    const App = document.querySelector('.App') as HTMLDivElement;
    if (App !== null) {
      App.style.height = '100vh';
    }
  }, [])

  const { children } = props;
  return (
    <Layout>
      {children}
    </Layout>
  )
}

const Layout = styled.div`
  position: relative;
  height: 667px;
  width: 375px;
  top: 50%;
  margin: 0 auto;
  border-radius: 50px;
  box-shadow:  13px 13px 26px #c6cfc8, -13px -13px 26px #ffffff, inset 0 0 5px 2px #d6dfd8;
  transform: translateY(-50%);
  ${mobile(css`
    height: 100%;
    width: 100%;
    box-shadow: none;
    border-radius: none;
  `)}
`;