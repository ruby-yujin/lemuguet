import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GlobalLayout from "../components/common/GlobalLayout";
import Header from "../components/common/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lemuguet | 빛나게 르뮤게</title>
        <meta name="description" content="빛나게 르뮤게" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalLayout>
        {/*Hader  */}
        <Header />
        {/*Content */}

        {/*Footer */}
      </GlobalLayout>
    </div>
  );
};

export default Home;
