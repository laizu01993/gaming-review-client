import Swal from "sweetalert2";

const AddReview = () => {

    const handleAddReview = e => {
        e.preventDefault();

        const form = e.target;

        const gameImage = form.gameImage.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genre = form.genre.value;

        const newReview = { gameImage, title, description, rating, year, genre }
        console.log(newReview);

        // send data to the server
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            

    }
    return (
        <div className="mx-auto w-11/12 p-6 bg-[#f0f4f8] dark:bg-[#1e293b]">
            <h2 className="text-2xl font-bold text-center mb-6 ">Add New Game Review</h2>
            <form onSubmit={handleAddReview} className="space-y-4">
                {/* photo url */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Game Image URL</span>
                    </label>
                    <input
                        name="gameImage"
                        type="text"
                        placeholder="Enter game image URL"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                {/* title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Game Title</span>
                    </label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Enter game title"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                {/* form description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Review Description</span>
                    </label>
                    <textarea
                        name="description"
                        placeholder="Write your review"
                        className="textarea textarea-bordered w-full"
                        required
                    ></textarea>
                </div>
                {/* form rating */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Rating (1-10)</span>
                    </label>
                    <input
                        name="rating"
                        type="number"
                        placeholder="Enter rating"
                        className="input input-bordered w-full"
                        min="1"
                        max="10"
                        required
                    />
                </div>
                {/* form publishing year */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Publishing Year</span>
                    </label>
                    <input
                        name="year"
                        type="number"
                        placeholder="Enter publishing year"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* form genre row */}
                <select name="genre" className="select w-full" required>
                    <option value="">Select Genre</option>
                    <option value="Action">Action </option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Horror">Horror</option>
                    <option value="Shooter">Shooter</option>
                </select>
                {/* user's email and name */}
                {/* <input value={user?.email} readOnly className="input w-full bg-gray-100" /> */}
                {/* <input value={user?.displayName} readOnly className="input w-full bg-gray-100" /> */}

                {/* button */}
                <input type="submit" value="Add Review" className="btn btn-block bg-gray-300" />
            </form>
        </div>
    );
};

export default AddReview;
