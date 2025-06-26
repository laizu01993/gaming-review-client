import { useLoaderData } from "react-router-dom";

const HighestRated = () =>{

    const reviews = useLoaderData();

    return (
        <div>this is HighestRated: {reviews.length}</div>
    );
};

export default HighestRated;