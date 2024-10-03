import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/useState" element={<UseStatePage />} />
            <Route path="/useEffect" element={<UseEffectPage />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  //overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;
