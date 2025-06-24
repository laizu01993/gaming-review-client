import Banner from "../home/Banner";
import HighestRated from "../home/HighestRated";

const Home = () => {
    return (
        <div className="mx-auto w-11/12">
            <Banner></Banner>
            <HighestRated></HighestRated>
        </div>
    );
};

export default Home;