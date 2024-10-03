import { Route, Routes } from "react-router-dom";

import styled from "styled-components";
import { useState, useEffect } from "react";

function UseEffectPage() {
  const [changed, setChanged] = useState(null);
  const [countA, setCountA] = useState(0);

  useEffect(() => {
    setChanged(countA);
  }, [countA]);

  return (
    <div>
      <Wrapper>
        <section className={"list"}>
          <h1>아이템 리스트</h1>
          <ol>
            <span>UseEffect</span>
            <div>
              <div>{changed}</div>
              <div className={"button-list"}>
                <button
                  onClick={() => {
                    setCountA(countA - 1);
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    setCountA(countA + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </ol>
        </section>
      </Wrapper>
    </div>
  );
}

export default UseEffectPage;

const Wrapper = styled.article`
  height: 100vh;
  width: 100vw;
  max-width: 30rem;
  margin: 0 auto;
  padding: 1.5rem;
  background: #ffc0cb21;
`;
