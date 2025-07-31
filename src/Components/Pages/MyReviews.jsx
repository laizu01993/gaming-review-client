import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user.email]);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/review/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success"
                            });
                            const remaining = reviews.filter(review => review._id !== _id);
                            setReviews(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
                My Reviews: ({reviews.length})
            </h2>

            <div className="overflow-x-auto w-full">
                <table className="table min-w-[900px] text-sm sm:text-base">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review) => (
                            <tr key={review._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-10 h-10 sm:w-12 sm:h-12">
                                            <img src={review.gameImage} alt="Game" />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-medium">{review.title}</td>
                                <td className="max-w-[150px] truncate">{review.description}</td>
                                <td>{review.rating}</td>
                                <td>
                                    <div className="flex flex-wrap gap-2">
                                        <Link to={`/updateReview/${review._id}`}>
                                            <button className="btn btn-xs sm:btn-sm btn-outline text-green-600">
                                                Update
                                            </button></Link>
                                        <button onClick={() => handleDelete(review._id)} className="btn btn-xs sm:btn-sm btn-outline text-red-600">
                                            <MdDelete />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;
