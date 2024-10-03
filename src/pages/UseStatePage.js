import { Route, Routes } from "react-router-dom";

import styled from "styled-components";
import { useState } from "react";

function UseStatePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Wrapper>
        {/* 아이템 리스트 */}
        <section className={"list"}>
          <h1>아이템 리스트</h1>
          <ol>
            {/* 아이템 A */}

            <span>UseState</span>
            <div>
              <div>{count}</div>
              <div className={"button-list"}>
                <button
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    setCount(count + 1);
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

export default UseStatePage;

const Wrapper = styled.article`
  height: 100vh;
  width: 100vw;
  max-width: 30rem;
  margin: 0 auto;
  padding: 1.5rem;
  background: #ffc0cb21;
`;
