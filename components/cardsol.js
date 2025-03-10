import Image from "next/image";
import React from "react";

const Cardsol = ({ title, challenge, solution, studyImg }) => {
  return (
    <div className="card h-100 m-4 SolutionCard border-0 shadow p-3 mb-5 bg-white rounded">
      <Image className="card-img-top" src={studyImg} />

      <div className="card-body">
        <div className="card-header my-2 bg-transparent border-0">
          <div className="card-title text-center  ">{title}</div>
        </div>
        <div className="list-group">
          <div className="list-group-item text-wrap flex-fill  ">
            <b>Challenge:</b> <p className=" ">{challenge}</p>
          </div>
          <div className="list-group-item text-wrap flex-fill  ">
            <b>Solution:</b> <p className=" ">{solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsol;
