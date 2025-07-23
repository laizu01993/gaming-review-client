
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate();

    const handleSignOut = () =>{
        signOutUser()
        .then(() =>{
            navigate('/')
        })
        .catch(error => console.log(error.message));

        
    }
    


    const navLinks = (
        <>
            <li><NavLink className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : "font-semibold"
            } to="/">Home</NavLink></li>

            <li><NavLink className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : "font-semibold"
            } to="/allReviews">All Reviews</NavLink></li>

            <li><NavLink className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : "font-semibold"
            } to="/addReview">Add Review</NavLink></li>

            <li><NavLink className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : "font-semibold"
            } to="/myReviews">My Reviews</NavLink></li>

            <li><NavLink className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : "font-semibold"
            } to="/watchlist">Watchlist</NavLink></li>
        </>
    );

    return (
        <div className="navbar  top-0 sticky z-50 backdrop-blur-md bg-white/30 shadow-md ">
            {/* Left Side (Logo + Mobile Dropdown) */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                    {/* Mobile Dropdown Menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>
                {/* Logo / Site Name */}
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">Chill Gamer</Link>
            </div>

            {/* Center Menu (Large screen) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            {/* Right Side - Login/Register Buttons*/}
            <div className="navbar-end space-x-3">
                {
                    user ? <>
                        <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                            <img
                                src={user.photoURL || "/default-avatar.png"}
                                
                                className="w-10 h-10 rounded-full border-2 border-primary"
                            />
                        </div>
                        <button onClick={handleSignOut} className="btn btn-sm bg-blue-400 text-white hover:bg-blue-500">Log out</button></> : <>
                        <Link to="/login" className="btn btn-sm bg-blue-400 text-white hover:bg-blue-500">Login</Link>
                        <Link to="/register" className="btn btn-sm btn-outline border-blue-400 hover:bg-blue-100">Register</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;
