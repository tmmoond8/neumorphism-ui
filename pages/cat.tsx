import styled from 'styled-components';

interface IProps {}

const StyledCat = styled.div``;

const Cat = (props: IProps) => {
  const {} = props;
  return (
    <StyledCat>
      Cat
    </StyledCat>
  );
};

export default Cat;
