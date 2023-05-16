import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GlobalLayout from "../components/common/GlobalLayout";
import Header from "../components/common/Header";
import styled from "styled-components";
import Rings from "../components/rings";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lemuguet | 빛나게 르뮤게</title>
        <meta name="description" content="빛나게 르뮤게" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrap>
        {/*Hader  */}
        <Header />

        {/*Content */}
        <Rings />

        {/*Footer */}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  max-width: 390px;
  height: auto;
  background: #fff;
  margin: 0 auto;
  position: relative;
  border: 1px solid #dddddd;
`;

export default Home;
