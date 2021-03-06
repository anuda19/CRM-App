import { useNavigate } from "react-router-dom";
// import not from '../assets/404.svg'
import React from "react";

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
      <section className="bg-light vh-100 d-flex justify-content-center align-items-center text-center">
       <div>
          <h1>Not Found</h1>
<img src={"https://juststickers.in/wp-content/uploads/2016/12/404-error-not-found.png"} alt=""/>
          <br />
          <p>Page is not available.</p>
          <div className="flex-row">
              <button className="btn btn-primary" onClick={goBack}>Go Back</button>
          </div>
          </div>
      </section>
  )
}

export default NotFound;