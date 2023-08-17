import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import pageNotFound from "../assets/pageNotFound.jpg";
const PageNotFound = () => {
  useTitle("PageNotFound");
  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src={pageNotFound} alt="page not found" />
      <Link to="/">
        <button>Get Back to Home</button>
      </Link>
    </section>
  );
};

export default PageNotFound;
