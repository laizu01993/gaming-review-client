import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ReviewDetails = () => {

    const { user } = useContext(AuthContext);

    const review = useLoaderData();
    console.log(review);

    const handleAddToWatchlist = () => {
        const watchData = {

            // userName: user.displayName,
            user_email: user.email,
            gameImage: review.gameImage,
            title: review.title,
            description: review.description,
            rating: review.rating,
            genre: review.genre,
        };

        fetch('http://localhost:5000/watchlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(watchData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire("Added!", "Review added to your Watchlist!", "success");
                }
            })
    }

    return (
        <div className="w-11/12 mx-auto p-6 bg-blue-50 shadow rounded">
            <img src={review.gameImage} alt={review.title} className="w-full max-w-lg mx-auto rounded" />
            <h2 className="text-3xl font-bold mt-4">{review.title}</h2>
            <p className="mt-2 text-gray-700">{review.description}</p>
            <div className="mt-4">
                <p><strong>Rating:</strong> {review.rating}/10</p>
                <p><strong>Genre:</strong> {review.genre}</p>
                <p><strong>Reviewer:</strong> {review.reviewerName || "Anonymous"}</p>
                <p><strong>Email:</strong> {review.reviewerEmail || "Not Provided"}</p>
            </div>
            <button className="btn mt-4 btn-sm border-blue-500 text-blue-800" onClick={handleAddToWatchlist}>Add to WatchList</button>
        </div>
    );
};

export default ReviewDetails;