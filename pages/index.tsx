import type { NextPage } from "next";
import Header from "../components/header";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hulu 2.1</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            {/* Nav */}
            {/* Results */}
        </div>
    );
};

export default Home;
