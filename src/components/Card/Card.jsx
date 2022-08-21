import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      <div className="scale-110 transition-all duration-300 gap-4 max-w-md rounded overflow-hidden shadow-lg row-span-2 col-span-2 my-5 ">
        <Link to={`/movie/${data.imdbID}/detail`}>
          <div className="overflow-hidden row-span-2 max-h-screen col-span-2 my-5">
            <img src={data.Poster} alt={data.Title} className="w-full" />
          </div>

          <div className="my-5 py-4 px-6 flex flex-col">
            <h4 className="text-base font-bold mb-3 inline">
              <p className="font-bold text-xl mx-5 text-center mb-2">
                Title:&nbsp;{data.Title}
              </p>
            </h4>
            <p className="font-normal mx-5">Published Year:&nbsp;{data.Year}</p>
            <p className="font-normal mx-5">Type:&nbsp;{data.Type}</p>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Card;
