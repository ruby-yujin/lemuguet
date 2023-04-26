import React from "react";
import styled from "styled-components";

function GlobalLayout(props: any) {
  return <GlobalLayoutContainer>container</GlobalLayoutContainer>;
}

const GlobalLayoutContainer = styled.div`
  max-width: 390px;
  height: 100%;
  border: 1px solid #dddddd;
  background: #fff;
  margin: 0 auto;
`;

export default GlobalLayout;
