import React from "react";
import styled from "styled-components";

const TestDiv = styled.div`
  background-color: red;
  color: white;
  padding: 20px;
`;

function App() {
    return (
        <TestDiv>
            This is a test.
        </TestDiv>
    );
}

export default App;