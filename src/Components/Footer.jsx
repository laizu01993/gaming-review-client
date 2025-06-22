import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-10 mx-auto w-11/12">
            <div className="footer p-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
                {/* Branding */}
                <div>
                    <p className="text-xl font-bold text-primary">Chill Gamer</p>
                    <p className="text-sm mt-2">Explore. Review. Chill.</p>
                    <div className="flex space-x-3 mt-4">
                        <a href="#" className="text-blue-600 text-xl hover:scale-110 transition"><FaFacebookF /></a>
                        <a href="#" className="text-sky-400 text-xl hover:scale-110 transition"><FaTwitter /></a>
                        <a href="#" className="text-red-600 text-xl hover:scale-110 transition"><FaYoutube /></a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <span className="footer-title">Pages</span>
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/reviews" className="link link-hover">All Reviews</Link>
                    <Link to="/addReview" className="link link-hover">Add Review</Link>
                    <Link to="/myReviews" className="link link-hover">My Reviews</Link>
                    <Link to="/watchlist" className="link link-hover">Watchlist</Link>
                </div>

                {/* Contact Info */}
                <div>
                    <span className="footer-title">Contact</span>
                    <p>Email: support@chillgamer.com</p>
                    <p>Phone: +880-1234-567890</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center py-4 border-t text-sm bg-base-300">
                <p>© 2025 Chill Gamer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
