import React from "react";
import styled from "styled-components";
import VisualVideo from "./components/VisualVideo";
import NewDisplay from "./components/NewDisplay";
import DisplayProduct from "./components/DisplayProduct";

function Main() {
  return (
    <Container>
      <VisualVideo />
      <NewDisplay />
      <DisplayProduct />
    </Container>
  );
}

const Container = styled.div``;

export default Main;
