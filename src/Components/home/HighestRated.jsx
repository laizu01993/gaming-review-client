import { useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const HighestRated = () =>{

    const reviews = useLoaderData();

    return (
        <div className="my-8">
            <h2 className="text-3xl font-bold text-center">Highest Rated Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.map(review => <ReviewCard
                key={review._id}
                review={review}></ReviewCard>)}
            </div>
        </div>
    );
};

export default HighestRated;