import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const navigate = useNavigate();

    const { signInUser } = useContext(AuthContext);

    // for toggle password
    const [showPassword, setShowPassword] = useState(false);

    // event handler
    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                // console.log(result.user);
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                // console.log('ERROR', error.message);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed to login" + error.message,
                    showConfirmButton: false,
                    timer: 1500
                });

            });
        };
        

    return (
        <div className="w-11/12 mx-auto max-w-md bg-blue-50 shadow-md p-8 rounded mt-10">
            <h2 className="text-4xl font-bold text-center">Login Now!</h2>
            <form onSubmit={handleLogin} className="space-y-4 mt-8">
                <div>
                    <label className="block font-normal mb-1">Email</label>
                    <input type="email"
                        placeholder="Email" name="email" className="input input-bordered w-full" />
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
                    <button type="submit" className="btn w-full  font-bold text-blue-500 border-blue-500 text-center">Login</button>
                </div>

                <p className="font-medium text-center">Don't Have An Account? Please <Link className="text-red-500" to="/register">Sign Up</Link></p>


                <div className="divider font-bold">OR</div>
                <div className="text-center">
                    <button className="btn btn-md font-bold text-blue-500 border-blue-500 text-center">Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;