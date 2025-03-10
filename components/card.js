import Image from "next/image";
import React from "react";

const Card = ({ title, challenge, solution, studyImg }) => {
  return (
    <div className="card h-100 m-4 caseStudyCard border-0 shadow p-3 mb-5 bg-white rounded">
      <Image 
        className="card-img-top rounded"
        src={studyImg} 
        alt={`Case Study - ${title}`}
        width={500} 
        height={300} 
        layout="responsive"
      />

      <div className="card-body">
        <div className="card-header my-2 bg-transparent border-0">
          <h3 className="card-title text-center text-dark">{title}</h3>
        </div>
        <div className="list-group">
          <div className="list-group-item text-wrap flex-fill">
            <strong>Challenge:</strong> 
            <p>{challenge}</p>
          </div>
          <div className="list-group-item text-wrap flex-fill">
            <strong>Solution:</strong> 
            <p>{solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

