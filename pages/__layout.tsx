import styled, { css } from 'styled-components';
import MQ from '../styles/responsive';

interface IProps {
  children: React.ReactChild;
}

const StyledLayout = styled.div`
  background-color: red;
  height: 100vh;

  ${MQ(css`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 375px;
    height: 812px;
    transform: translate(-50%, -50%);
  `)}
`;

const Layout = (props: IProps) => {
  const { children } = props;
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  )
}

export default Layout;