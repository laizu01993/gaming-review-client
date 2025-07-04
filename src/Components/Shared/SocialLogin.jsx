import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const navigate = useNavigate();

    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Google login successful!',
                    timer: 1500,
                    showConfirmButton: false,
                    position: 'top-end'
                });
                navigate('/')
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Google login failed: ' + error.message,
                    timer: 2000,
                    showConfirmButton: false,
                    position: 'top-end'
                });
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-md font-bold text-blue-500 border-blue-500 rounded-full text-center">Continue with Google</button>
        </div>
    );
};

export default SocialLogin;