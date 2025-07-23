import { useLoaderData } from "react-router-dom";
import AllReviewCard from "./AllReviewCard";

const AllReviews = () => {

    const allReviews = useLoaderData();
    console.log(allReviews);
    

    return (
        <div className="my-8 mx-auto w-11/12">
            <h2 className="text-3xl font-bold text-center">All Game Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allReviews.map(allReview => <AllReviewCard
                    key={allReview._id}
                    allReview={allReview}></AllReviewCard>)}
            </div>
        </div>
    );
};

export default AllReviews;