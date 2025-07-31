import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Watchlist = () => {

    const { user } = useContext(AuthContext);

    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/watchlist?email=${user.email}`)
            .then(res => res.json())
            .then((data) => setWatchlist(data));
    }, [user.email]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
                My Watchlist: ({watchlist.length})
            </h2>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="table min-w-[900px] text-sm sm:text-base">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {watchlist.map((item, index) => (
                            <tr key={item._id}>
                                <td className="font-semibold">{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-10 h-10 sm:w-12 sm:h-12">
                                            <img src={item.gameImage} alt="Game" />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-medium">{item.title}</td>
                                <td>{item.genre}</td>
                                <td>{item.rating}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Watchlist;