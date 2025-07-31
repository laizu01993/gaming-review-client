import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Watchlist = () => {

    const { user } = useContext(AuthContext);

    const [watchlist, setWatchlist] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/watchlist?email=${user.email}`)
        .then(res => res.json())
        .then((data) => setWatchlist(data));
    }, [user.email]);

    return (
        <div>this is watchlist</div>
    );
};

export default Watchlist;