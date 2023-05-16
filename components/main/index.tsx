import React from "react";
import styled from "styled-components";
import VisualVideo from "./components/VisualVideo";
import NewDisplay from "./components/NewDisplay";

function Main() {
  return (
    <Container>
      <VisualVideo />
      <NewDisplay />
    </Container>
  );
}

const Container = styled.div``;

export default Main;
