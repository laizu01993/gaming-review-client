// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import { MdDelete } from "react-icons/md";

// const MyReviews = () => {

//     const { user } = useContext(AuthContext);
//     const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:5000/myReviews?email=${user.email}`)
//             .then(res => res.json())
//             .then(data => setReviews(data))
//     }, [user.email])
//     return (
//         <div className="w-11/12 mx-auto mt-6">
//             <div className="justify-center flex text-4xl font-semibold">My Reviews: {reviews.length}</div>
//             <div className="overflow-x-auto mt-4 w-full px-2 sm:px-4 md:px-6">
//                 <table className="table w-full">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>
//                                 Image
//                             </th>
//                             <th>Title</th>
//                             <th>Description</th>
//                             <th>Rating</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             reviews.map(review =>
//                                 <tr key={review._id}>

//                                     <td>

//                                         <div className="avatar">
//                                             <div className="mask mask-squircle h-12 w-12">
//                                                 <img
//                                                     src={review.gameImage}
//                                                     alt="" />
//                                             </div>
//                                         </div>




//                                     </td>
//                                     <td>{review.title}</td>
//                                     <td>
//                                         {review.description}
//                                     </td>
//                                     <td>{review.rating}</td>

//                                     <th className="flex">
//                                         <button className="btn btn-ghost btn-md text-green-500">[Update]</button>
//                                         <button className="btn btn-ghost btn-md text-red-600">[<MdDelete></MdDelete>]</button>

//                                     </th>
//                                 </tr>)
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>

//     );
// };

// export default MyReviews;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { MdDelete } from "react-icons/md";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user.email]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
                My Reviews: ({reviews.length})
            </h2>

            <div className="overflow-x-auto">
                <table className="table w-full text-sm sm:text-base">
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
                                        <button className="btn btn-xs sm:btn-sm btn-outline text-green-600">
                                            Update
                                        </button>
                                        <button className="btn btn-xs sm:btn-sm btn-outline text-red-600">
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
