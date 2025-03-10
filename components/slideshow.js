import React, { useState, useEffect, useRef } from "react";
import { customers, partners } from "../components/partnersFetcher";
import emailjs from "@emailjs/browser";

const SlideShow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const userId = "user_...";
  const serviceId = "service_...";
  const templateId = "template_...";
  const accessToken = "e2e1...";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lgzjzk9",
        "template_a3oynaa",
        form.current,
        "uFtHNCnXOdeLosjeG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh",
        }}
      >
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/asd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <span
            id="blackOverlay"
            className="w-full h-full absolute bg-white"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Conjointly moving forward with Technology
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Serving since 28 Years in providing complete IT Solutions
                  depending on the customer needs and requirements. We deliver
                  much more than just technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg animate-floating">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Project Consultation
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Our consultants can guide you through the selection and
                    procurement of technology, as well as provide training and
                    support for system implementation, operations and/or
                    maintenance.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg animate-floating">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Software Development
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    With 50+ applications successfully delivered which including
                    native, hybrid, and cross-platform. Aarkay IT Solutions
                    offers you a creative and responsive Software which suits
                    our clients’ requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg animate-floating">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h6 className="text-xl font-semibold">
                    IT Infrastructure Management
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Your IT infrastructure is expected to keep pace with digital
                    diversity and new approaches while keeping an eye on legacy
                    investments, cost pressure and rising customer expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Bringing technology at your fingertips
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Serving since 28 Years in providing complete IT Solutions
                depending on the customer needs and requirements. We deliver
                much more than just technology.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                In more ways than one, Aarkay is a one-stop-shop for a company’s
                complete business needs.
              </p>
              <a
                href="#contact"
                className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 no-underline hover:underline mb-5"
              >
                Contact us
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg hover:bg-blue-600">
                <img
                  alt="..."
                  src="gifs/services.gif"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blue-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-dark">
                    The Go-To Source For Exemplary Service
                  </h4>
                  <p className="text-md font-light mt-2 text-dark">
                    Our services and solutions are diversified. Merging them of
                    all brings forward a unique and valuable offering in
                    business enhancement.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* der products */}

      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg mb-3"
                src="/images/herobg2.jpg"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-blue-200 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold">Our Products</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Committed To Products Excellency
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-200 bg-blue-600 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <span className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 ">
                          Process-driven technology solutions
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-200 bg-blue-600 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <span className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500 ">
                          Android-based applications
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-200 bg-blue-600 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <span className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500 ">
                          Barcode-based Material Tracking System
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-200 bg-blue-600 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <span className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500 ">
                          Warehouse Management System
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-200 bg-blue-600 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <span className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500 ">
                          Dispatch Management System
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-200 bg-blue-600 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <span className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500 ">
                          Retail Outlets & Distribution Solution
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services der */}

      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Here are our services</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                We deliver clients with innovative, process-driven technology
                solution which can help them to enhance business productivity,
                thereby enabling clients the opportunity. This will result into
                true cost savings in their unique operating environment.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="assets/productimages/logos/barcode-scanner.png"
                  className="shadow-lg rounded-full max-w-full mx-auto p-3"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center ">
                  <h5 className="text-xl font-bold">
                    Barcode Solution & Service Provider
                  </h5>
                  <p className="mt-1 text-sm text-gray-500">
                    We had tied up with product brands like as panache, zebra,
                    Honeywell, sato to provide customer services for barcode
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="assets/productimages/logos/motion-sensor.png"
                  className="shadow-lg rounded-full max-w-full mx-auto p-3"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center ">
                  <h5 className="text-xl font-bold">
                    Vision Systems & Industrial ID Readers
                  </h5>
                  <p className="mt-1 text-sm text-gray-500">
                    We do system integration and automation along with these
                    readers and vision system.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="assets/productimages/logos/android.png"
                  className="shadow-lg rounded-full max-w-full mx-auto p-3"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center ">
                  <h5 className="text-xl font-bold">
                    Customised Software & App Development
                  </h5>
                  <p className="mt-1 text-sm text-gray-500 ">
                    Android Studio Web based Development tools. Microsoft Visual
                    Studio Smart Office System
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="assets/productimages/logos/it.png"
                  className="shadow-lg rounded-full max-w-full mx-auto p-3"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center ">
                  <h5 className="text-xl font-bold">
                    IT Infrastructure and Management
                  </h5>
                  <p className="mt-1 text-sm text-gray-500 ">
                    We design IT Infrastructure, deploy solutions and manage
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* customers  */}

      <div className="mx-auto py-10 px-4 w-full max-w-7xl bg-white text-gray-800">
        <div className="flex flex-col items-center space-y-12">
          {/* :TITLE CONTAINER */}
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            {/* ::Title */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">


              Our Trusted customers
            </h2>
            {/* ::Text */}
            <p className="text-sm sm:text-base text-gray-700">
              Creative organizations that excel in producing first-class content
            </p>
          </div>

          {/* :customers LOGOS */}
          <div className="grid grid-cols-6 gap-6 mb-5 lg:p-5 md:p-3">
            {customers.map((image, key) => {
              return (
                <div
                  className="col-span-3 sm:col-span-2 lg:col-span-1 md:p-5 p-3 lg:p-4 flex justify-center items-center bg-white shadow-lg"
                  key={key}
                >
                  <img
                    src={image.img.src}
                    alt=""
                    className="h-full opacity-80"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* customers end  */}

      {/* partners  */}

      <div className="mx-auto py-10 px-4 w-full max-w-7xl bg-white text-gray-800">
        <div className="flex flex-col items-center space-y-12">
          {/* :TITLE CONTAINER */}
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            {/* ::Title */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">
              Our Trusted Partners
            </h2>
            {/* ::Text */}
            <p className="text-sm sm:text-base text-gray-700">
              Creative organizations that excel in producing first-class content
            </p>
          </div>

          {/* :PARTNERS LOGOS */}
          <div className="grid grid-cols-6 gap-6 mb-5 lg:p-5 md:p-3">
            {partners.map((image, key) => {
              return (
                <div
                  className="col-span-3 sm:col-span-2 lg:col-span-1 md:p-5 p-3 lg:p-4 flex justify-center items-center bg-white shadow-lg"
                  key={key}
                >
                  <img
                    src={image.img.src}
                    alt=""
                    className="h-full opacity-80"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Partner End */}

      {/* contact us  */}

      <section id="contact" className="pb-20 relative block bg-gray-900 mt-5">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pt-5">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">Contact us</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                We would love to hear from you, weather you are curious about
                some product, service or operation, we're ready to answer any
                and all questions
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <a
                href="https://goo.gl/maps/kp2gCZk1DfziKYwB8"
                target="_blank"
                className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </a>
              <div>
                <span className="mt-2 text-xs text-gray-500">
                  (Click to redirect to Google Maps)
                </span>
              </div>

              <h6 className="text-xl mt-5 font-semibold text-white">
                Location
              </h6>
              <p className="mt-2 mb-4 text-gray-500">
                First Floor, I Samarthnagar(W), Ajni Square, Wardha Road, Nagpur
                440015
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <a
                href="tel:+917122252443"
                className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </a>
              <div>
                <span className="mt-2 text-xs text-gray-500">
                  (Click to redirect to your dialer)
                </span>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Our experts are just a call ahead. +91 (712) 2252443 / 2251696
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=support@atcgroup.co.in"
                target="_blank"
                className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <div>
                <span className="mt-2 text-xs text-gray-500">
                  (Click to redirect to Gmail)
                </span>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Mail us</h5>
              <p className="mt-2 mb-4 text-gray-500">info@atcgroup.co.in</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" relative block py-24 lg:pt-0 bg-gray-900">
        <div className="container mx-auto px-4 mt-5">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <form
                ref={form}
                onSubmit={handleSubmit}
                action="https://formsubmit.co/wmstask@gmail.com"
                method="POST"
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                    Want to work with us?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Full Name"
                      style={{ transition: "all .15s ease" }}
                      required
                      name="name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                      required
                      name="email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                      required
                      name="message"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <input
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SlideShow;
