import React from "react";
import { FaSignal } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* About Section */}
      <div id="about" className="container-fluid bg-dark px-5 py-12">
        <div className="row">
          {/* Left Content */}
          <div className="col-sm-8">
            <h2 className="text-light pb-3">About Aarkay</h2>
            <h4 className="text-light">
              26 Years in providing complete IT Solutions depending on the
              customer need and requirements.
            </h4>
            <ul className="aboutList">
              <li className="lead text-muted mt-2">
                Serving since 26 Years in providing complete IT Solutions
                depending on the customer need and requirements.
              </li>
              <li className="lead text-muted mt-2">
                We provide Consultancy and execute Turnkey projects on IT
                Infrastructure needed to cope up with growing demands of
                information availability, reliability, storage, remote
                connectivity from anywhere.
              </li>
              <li className="lead text-muted mt-2">
                We deliver clients with innovative, process-driven technology
                solutions that enhance business productivity, leading to true 
                cost savings in their unique operating environment.
              </li>
              <li className="lead text-muted mt-2">
                Our team of industry experts and certified engineers offer
                focused services tailored to meet specific business needs, 
                from individual projects to complete outsourcing. We specialize 
                in a wide range of IT technologies and can provide resources to 
                support SME IT Infrastructure.
              </li>
            </ul>
          </div>

          {/* Right Icon */}
          <div className="col-sm-4 logoContainer flex justify-center items-center">
            <span className="FaIcon text-6xl text-blue-400">
              <FaSignal />
            </span>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="container-fluid bg-dark py-12">
        <div className="row">
          {/* Logo Placeholder */}
          <div className="col-sm-4 aboutLogoContainer pb-5 mb-5 flex justify-center">
            <span className="aboutLogo block h-20 w-20 bg-gray-600 rounded-full"></span>
            {/* Uncomment and add the correct image path */}
            {/* <img className="rounded-lg w-full" src="/images/aarkayLogo.png" alt="Aarkay Logo" /> */}
          </div>

          {/* Values Content */}
          <div className="col-sm-8">
            <h2 className="text-light text-center">Our Values</h2>

            {/* Mission */}
            <p className="text-muted text-center">
              <strong className="text-light">MISSION:</strong> We understand our 
              customer's requirement, design, develop, and provide the best & 
              feasible long-term solution using the best available technology 
              in the field of Barcode, RFID, Bio-Metric, software development, 
              enterprise mobility, industrial mobility, Android apps, POS, and 
              Digital Signage.
            </p>

            {/* Vision */}
            <p className="text-muted text-center">
              <strong className="text-light">VISION:</strong> Our vision is to reach, 
              secure, and retain a top-ranked place among clients by providing 
              quality service and maintaining long-term relationships. We aim 
              to create a Win-Win strategy for the company, clients, and users, 
              leading to the best results. We strive to be a preferred and 
              safest workplace where employees can enrich their knowledge, 
              express their views, and live a balanced life.
            </p>
          </div>
        </div>
      </div>

      {/* Hiring Section */}
      <div className="px-0 mx-0">
        <div className="careerCard card-body text-center py-10 bg-light">
          <div className="row justify-center">
            <div className="col-auto py-5">
              <h2 className="text-dark mb-5">We're Hiring!</h2>
              <h4 className="h4 text-dark">
                <b>Interested in working with us?</b>
              </h4>
              <small className="small text-dark">
                Drop your CV at
                <span className="mx-2 font-bold text-blue-500">
                  admin@atcgroup.co.in
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
