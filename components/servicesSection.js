import React from "react";
import {
  FcFolder,
  FcTodoList,
  FcRefresh,
  FcBarChart,
  FcStatistics,
  FcAndroidOs,
} from "react-icons/fc";

const ServicesSection = () => {
  return (
    <div className="border-bottom pb-5">
      <div id="services">
        <div className="container-fluid text-center ">
          <h2 className="font-weight-light product-heading my-5 mx-auto">
            SERVICES
          </h2>
          <h4 className="font-weight-light product-heading mb-5">
            What we offer
          </h4>

          <div className="row ">
            <div className="col-sm-4 d-flex">
              <div className="serviceCard">
                <div className="serviceIcon">
                  <FcRefresh />
                </div>
                <h4 className="uppercase serviceHeading">
                  PROJECT CONSULTATION
                </h4>
                <p className="lead text-muted mt-2 serviceDesc">
                  We do Project Consultation and Project Management for
                  Information Technology. When you hire our Systems to consult
                  and provide expertise in information technology, whether
                  for...
                </p>
                <a href="/products" className="text-decoration-none serviceCTA">
                  <button className="contact100-form-btn my-5 mx-auto">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="col-sm-4 d-flex">
              <div className="serviceCard">
                <div className="serviceIcon">
                  <FcTodoList />
                </div>
                <h4 className="uppercase serviceHeading">
                  IT INFRASTRUCTURE MANAGEMENT
                </h4>
                <p className="lead text-muted mt-2 serviceDesc">
                  We Design IT Infrastructure, Deploy Solution and Manage
                  Infrastructure. In the hyper-converged environment you need to
                  quickly respond to changing market dynamics...
                </p>
                <a href="/products" className="text-decoration-none serviceCTA">
                  <button className="contact100-form-btn my-5 mx-auto">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="col-sm-4 d-flex">
              <div className="serviceCard">
                <div className="serviceIcon">
                  <FcFolder />
                </div>
                <h4 className="uppercase serviceHeading">
                  SOFTWARE DEVELOPMENT
                </h4>
                <p className="lead text-muted mt-2 serviceDesc">
                  We develop Customised Software Solution on various platform be
                  it commercial application, web based solution, mobile
                  application or scientific solution, We do it. We also...
                </p>
                <a href="/products" className="text-decoration-none serviceCTA">
                  <button className="contact100-form-btn my-5 mx-auto">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 d-flex">
              <div className="serviceCard">
                <div className="serviceIcon">
                  <FcBarChart />
                </div>
                <h4 className="uppercase serviceHeading">
                  Barcode Solution & Service Provider{" "}
                </h4>
                <p className="lead text-muted mt-2 serviceDesc">
                  We had tied up with product brands like as posiflex, pepperl
                  fuchs, panache, zebra, Honeywell, sato to provide time-to-time
                  customer services for...
                </p>
                <a href="/products" className="text-decoration-none serviceCTA">
                  <button className="contact100-form-btn my-5 mx-auto">
                    Read More
                  </button>
                </a>
              </div>
            </div>

            <div className="col-sm-4 d-flex">
              <div className="serviceCard">
                <div className="serviceIcon">
                  <FcAndroidOs />
                </div>
                <h4 className="uppercase serviceHeading">
                  Customised Software & APP Development Development
                </h4>
                <p className="lead text-muted mt-2 serviceDesc">
                  Java Development Tools, Eclipse, Android Studio Web based
                  Development tools. Customised Software & APP Development
                  Development. Microsoft Visual Studio Smart Office System...
                </p>
                <a href="/products" className="text-decoration-none serviceCTA">
                  <button className="contact100-form-btn my-5 mx-auto">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="col-sm-4 d-flex">
              <div className="serviceCard">
                <div className="serviceIcon">
                  <FcStatistics />
                </div>
                <h4 className="uppercase serviceHeading">
                  Vision Systems & Industrial ID Readers
                </h4>
                <p className="lead text-muted mt-2 serviceDesc">
                  We provide vision system to industries for vision inspection/
                  scanning/ reading/ validation/ verification, etc. as we
                  provide industrial-based products for Cognex...
                </p>
                <a href="/products" className="text-decoration-none serviceCTA">
                  <button className="contact100-form-btn my-5 mx-auto">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
