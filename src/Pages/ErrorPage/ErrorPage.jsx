import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/img404.jpg";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div className="relative" id="error-page">
      <div>
        <img src={img} className="w-full max-h-screen" alt="" />
      </div>

      <Link className="absolute top-1/2 left-1/2 ml-10  " to="/">
        <button className=" bg-red-600 m-5 p-5 rounded-xl text-3xl text-white  font-bold">
          Back To Home
        </button>
      </Link>
    </div>
  );
}
