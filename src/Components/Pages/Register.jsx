import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    // event handler
    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

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
            .then(result => {
                console.log(result.user);
                Swal.fire("Success", "Account created successfully!", "success");
                e.target.reset();

                navigate("/");

            })
            .catch(error => {
                console.log('error', error.message);
                Swal.fire("Error", error.message, "error");

            });

    };
    return (
        <div className="w-11/12 mx-auto max-w-md bg-blue-50 shadow-md p-8 rounded mt-10">
            <h2 className="text-4xl font-bold text-center">SignUp Now!</h2>
            <form onSubmit={handleRegister} className="space-y-4 mt-8">
                <div>
                    <label className="block font-normal mb-1">Name</label>
                    <input type="text"
                        placeholder="Name" name="name" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block font-normal mb-1">Photo URL</label>
                    <input type="text"
                        placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block font-normal mb-1">Email</label>
                    <input type="email"
                        placeholder="Email" name="email" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block font-normal mb-1">Password</label>
                    <input type="password"
                        placeholder="Password" name="password" className="input input-bordered w-full" />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn w-full  font-bold text-blue-500 border-blue-500 text-center">SignUp</button>
                </div>

                <p className="font-medium text-center">Already Have An Account? Please <Link className="text-red-500" to="/login">Login</Link></p>


                <div className="divider font-bold">OR</div>
                <div className="text-center">
                    <button className="btn btn-md font-bold text-blue-500 border-blue-500 text-center">Google</button>
                </div>
            </form>
        </div>
    );
};

export default Register;