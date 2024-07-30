import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center mt-48">
        <Link to="/signup">
          <h1 className="btn mr-5">SignUp</h1>
        </Link>

        <Link to="/login">
          <h1 className="btn">Login</h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
