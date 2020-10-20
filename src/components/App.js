import React from "react";
import styled from "styled-components";

import data from "../data";
import GlobalStyles from "./GlobalStyles";
import Typehead from "./Typehead";
import Suggestion from "./Suggestion";

const Wrapper = styled.div`
  margin-left: 33vw;
  margin-top: 5vw;
`;

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typehead
          suggestions={data.books}
          categories={data.categories}
          handleSelect={(suggestion) => {
            window.alert(suggestion);
          }}
        />
      </Wrapper>
    </>
  );
};

export default App;
