import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Stitle>Styled Components</Stitle>
      <Sbutton>FIGHT!!!!</Sbutton>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  alignt-items: center;
`;

const Stitle = styled.p`
  margin: 0;
  color: red;
`;

const Sbutton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: rgb(39, 190, 90);
    color: #fff;
    cursor: pointer;
  }
`;
