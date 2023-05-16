import React from "react";
import styled from "styled-components";
import { ProductList } from "../../../pages/api/product";

function NewDisplay() {
  return (
    <Container>
      <Title>New</Title>
      <Wrap>
        {ProductList.map((item) => {
          return (
            <NewItem key={item.ItemPersonalId}>
              <NewItemImg src={item.ItemSrc} alt={item.ItemAlt} />
              <Description>
                <span>{item.ItemName} (925 Silver)</span>
                <strong>₩{item.ItemPrice}</strong>
              </Description>
            </NewItem>
          );
        })}
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem 0;
`;

const Title = styled.h2`
  font-family: serif;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NewItem = styled.div`
  width: 48%;
  gap: 0 2%;
`;

const NewItemImg = styled.img``;

const Description = styled.div`
  margin-top: 10px;
  color: #333;
  span {
    font-size: 0.7rem;
  }
  strong {
    font-size: 1rem;
  }
`;
export default NewDisplay;
