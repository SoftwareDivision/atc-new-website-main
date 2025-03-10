import React from "react";
import Products from "../public/gifs/products.gif";
import Services from "../public/gifs/services.gif";
import Splash from "../public/gifs/splash.gif";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="border-bottom" id="about">
      <div className="border-bottom">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4 my-5">
                Bringing Technology at
                <span className="colored-word"> YOUR</span> Fingertips
              </h1>
              <p className="lead text-muted mb-0">
                Serving since 28 Years in providing complete IT Solutions
                depending on the customer needs and requirements. We deliver
                much more than just technology. Our objective is to fully
                understand customers business processes and to deliver
                significant added value to them by developing solutions that
                certainly reduce their costs and enhance their ability to adapt
                to changes in the markets.
              </p>
              <p className="lead text-muted mt-2">
                Our services and solutions are diversified. Merging them of all
                brings forward a unique and valuable offering in business
                enhancement. This covers aspects such as building the right
                processes, automating them and launching them into the
                international marketplace while using best practices and
                international standards as guidelines of quality. In more ways
                than one, Aarkay is a one-stop-shop for a company’s complete
                business needs.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <Image src={Splash} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light product-heading mb-5">
                Our Products
              </h2>
              <p className="lead text-muted mt-2">
                Our services and solutions are diversified. Merging them of all
                brings forward a unique and valuable offering in business
                enhancement. This covers aspects such as building the right
                processes, automating them and launching them into the
                international marketplace while using best practices and
                international standards as guidelines of quality.
              </p>
              <a href="/products" className="text-decoration-none">
                <button className="contact100-form-btn my-5">Learn More</button>
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <Image src={Products} alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light product-heading mb-5">
                Our Services
              </h2>
              <p className="lead text-muted mt-2">
                Our services and solutions are diversified. Merging them of all
                brings forward a unique and valuable offering in business
                enhancement. This covers aspects such as building the right
                processes, automating them and launching them into the
                international marketplace while using best practices and
                international standards as guidelines of quality.
              </p>
              <a href="/services" className="text-decoration-none">
                <button className="contact100-form-btn my-5">Learn More</button>
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <Image src={Services} alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
