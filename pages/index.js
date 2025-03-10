import Layout from "../components/layout";

import Head from "next/head";

import Slideshow from "../components/slideshow";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Aarkay Techno Consultants</title>
        <meta
          name="description"
          content="Aarkay Techno Consultants, Pvt Ltd."
        />
      </Head>

      <Slideshow />
    </Layout>
  );
}
