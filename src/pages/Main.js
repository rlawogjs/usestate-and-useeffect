import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Wrapper>
        <MainTitle>useState와 useEffect 차이점 알기</MainTitle>
        <Link to="/useState">
          <StateBtn>useState</StateBtn>
        </Link>
        <Link to="/useEffect">
          <StateBtn>useEffect</StateBtn>
        </Link>
      </Wrapper>
    </div>
  );
}

export default Main;

const Wrapper = styled.article`
  text-align: center;
  height: 50vh;
  width: 100vw;
  max-width: 30rem;
  margin: 0 auto;
  padding: 1.5rem;
  background: #ffc0cb21;
`;

const MainTitle = styled.h1``;
const StateBtn = styled.button``;
