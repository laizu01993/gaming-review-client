import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {

    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);

    // for toggling password
    const [showPassword, setShowPassword] = useState(false);

    // event handler
    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // password validation
        if (password.length < 6) {
            return Swal.fire("Error", "Password must be at least 6 characters long");
        }
        if (!/[A-Z]/.test(password)) {
            return Swal.fire("Error", "Password must include at least one uppercase letter");
        }
        if (!/[a-z]/.test(password)) {
            return Swal.fire("Error", "Password must include at least one lowercase letter");
        }

        createUser(email, password)
            .then((result) => {
                // update profile
                return updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                });
            })
            .then(() => {
                // save user info to MongoDB
                const createdAt = result?.user?.metadata?.creationTime;

                const newUser = { name, email, createdAt };
                return fetch("https://gaming-review-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                });
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registration successful",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    form.reset();
                    navigate("/");
                }
            })
            .catch((error) => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed to register: " + error.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };


    return (
        <div className="w-11/12 mx-auto max-w-md bg-blue-50 shadow-md p-8 rounded mt-10">
            <h2 className="text-4xl font-bold text-center">SignUp Now!</h2>
            <form onSubmit={handleRegister} className="space-y-4 mt-8">
                <div>
                    <label className="block font-normal mb-1">Name</label>
                    <input type="text"
                        placeholder="Name" name="name" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-normal mb-1">Photo URL</label>
                    <input type="text"
                        placeholder="Photo URL" name="photo" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-normal mb-1">Email</label>
                    <input type="email"
                        placeholder="Email" name="email" className="input input-bordered w-full" required />
                </div>
                <div className="relative">
                    <label className="block font-normal mb-1">Password</label>
                    <input type={showPassword ? "text" : "password"}
                        placeholder="Password" name="password" className="input input-bordered w-full" required />
                    <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-4 mt-2">
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </button>
                </div>


                <div className="text-center">
                    <button type="submit" className="btn w-full  font-bold text-blue-500 border-blue-500 text-center">SignUp</button>
                </div>

                <p className="font-medium text-center">Already Have An Account? Please <Link className="text-red-500" to="/login">Login</Link></p>


                <div className="divider font-bold">OR</div>
                <div className="text-center">
                    <SocialLogin></SocialLogin>
                </div>
            </form>
        </div>
    );
};

export default Register;