
const ReviewCard = ({ review }) => {

    const { gameImage, title, description, rating } = review;
    return (
        <div className="card bg-base-100 shadow-md mt-8">
            <figure>
                <img src={gameImage} alt={title} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm font-semibold text-gray-600">{description.slice(0, 100)}...</p>
                <p className="mt-2 font-semibold text-primary">Rating: {rating}/10</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-outline border-blue-500">Explore Details</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;