import { NextPage } from "next";
import Thumbnail from "./Thumbnail";

type Props = {
    results: any;
};

export const Results: NextPage<Props> = ({ results }) => {
    return (
		//@ts-ignore
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.map((result: any) => (
                <Thumbnail result={result} key={result.id} />
            ))}
        </div>
    );
};
