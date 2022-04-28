import type { GetServerSideProps, NextPage } from "next";
import Header from "../components/header";
import Nav from "../components/Nav";
import Head from "next/head";
import { Results } from "../components/Results";
import requests from "../utis/requests";

type Props = {
	url: any
}
const Home: NextPage<Props> = ({ url }) => {
    console.log(url);
    return (
        <div>
            <Head>
                <title>Hulu 2.1</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Nav />
            <Results results= {url}/>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const genre = context.query.genre;
    const request = await fetch(
        `https://api.themoviedb.org/3${
            // @ts-ignore
            requests[genre]?.url || requests.fetchTrending.url
        }`
    ).then((res) => res.json());

    return {
        props: {
            url: request.results,
        },
    };
};
//
export default Home;
