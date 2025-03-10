import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  TruckIcon,
  CubeIcon,
  DesktopComputerIcon,
  HomeIcon,

} from "@heroicons/react/outline";
import { ChevronDownIcon, OfficeBuildingIcon, CogIcon, CloudIcon, StatusOfflineIcon } from "@heroicons/react/solid";
import { faStore } from "@fortawesome/free-solid-svg-icons";

const solutions = [
  {
    name: "Barcode Solutions & Service Provider",
    // description:
    //   "Get a better understanding of where your traffic is coming from.",
    href: "/services/barcode-solutions-services",
    icon: ChartBarIcon,
  },
  {
    name: "IT Infrastructure Management",
    // description: "Speak directly to your customers in a more meaningful way.",
    href: "/services/it-infrastructure",
    icon: CursorClickIcon,
  },
  // {
  //   name: "Customized Software Development",
  //   description: "Your customers' data will be safe and secure.",
  //   href: "/services/customized-software",
  //   icon: ViewGridIcon,
  // },
  {
    name: "Vision Systems & Industrial ID Readers",
    // description: "Connect with third-party tools that you're already using.",
    href: "/services/vision-systems",
    icon: ShieldCheckIcon,
  },
  {
    name: "Software Development",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/services/software-development",
    icon: DesktopComputerIcon,
  },
];

const newsolutions = [
  {
    name: "FMCG",
    // description:
    //   "Get a better understanding of where your traffic is coming from.",
    href: "/fmcg",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Textiles",
    // description: "Speak directly to your customers in a more meaningful way.",
    href: "/textiles",
    icon: CursorClickIcon,
  },
  {
    name: "Explosives",
    // description: "Your customers' data will be safe and secure.",
    href: "/explosives",
    icon: ViewGridIcon,
  },
  {
    name: "Retails & Distribution",
    // description: "Connect with third-party tools that you're already using.",
    href: "/retailsndistribution",
    icon: ShieldCheckIcon
  },
  {
    name: "Defence",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/defence",
    icon: CogIcon,
  },
  {
    name: "Agriculture",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/agriculture",
    icon: CloudIcon,
  },
  {
    name: "Automobiles",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/automobiles",
    icon: CogIcon,
  },
  {
    name: "Aluminium",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/aluminium",
    icon: CogIcon,
  },
  {
    name: "Pharmaceuticals",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/pharmaceuticals",
    icon: HomeIcon,
  },
  {
    name: "Logistics",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/logistics",
    icon: TruckIcon,
  },
  {
    name: "Mining",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/mining",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Gas",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/gas",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Towers/Steel",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/towers",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Others",
    // description:
    //   "Build strategic funnels that will drive your customers to convert",
    href: "/others",
    icon: CubeIcon,
  },
];

const callsToAction = [
  { name: "Careers", href: "/careers", icon: PlayIcon },
  { name: "Contact us", href: "#contact", icon: PhoneIcon },
];
const resources = [
  {
    name: "About",
    description: "About Aarkay Techno Consultants, Pvt Ltd.",
    href: "/about",
    icon: ShieldCheckIcon,
  },
  {
    name: "Expertise Solutions",
    description:
      "Expertise solutions along with the feasible & tested classic hardware devices and software.",
    href: "/expertise",
    icon: SupportIcon,
  },
  {
    name: "Case Study",
    description: "Read about our case studies.",
    href: "/casestudies",
    icon: BookmarkAltIcon,
  },
  // {
  //   name: "Events",
  //   description:
  //     "See what meet-ups and other events we might be planning near you.",
  //   href: "#",
  //   icon: CalendarIcon,
  // },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className="relative bg-white z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/images/aarkayLogo.png"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:underline"
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        {/* Add max-h-80 and overflow-y-auto to make it scrollable */}
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 max-h-80 overflow-y-auto">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 no-underline hover:underline"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-blue-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:underline"
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500 hover:underline"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        {/* Add max-h-80 and overflow-y-auto to make it scrollable */}
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 max-h-80 overflow-y-auto">
                          {newsolutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 no-underline hover:underline"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-blue-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>

                  </Transition>
                </>
              )}
            </Popover>
            <a
              href="/innovation"
              className="text-base font-medium text-gray-500 hover:text-gray-900 no-underline hover:underline"
            >
              Innovations
            </a>
            <a
              href="/integration"
              className="text-base font-medium text-gray-500 hover:text-gray-900 no-underline hover:underline"
            >
              Integrations
            </a>
            <a
              href="/blog"
              className="text-base font-medium text-gray-500 hover:text-gray-900 no-underline hover:underline"
            >
              Case Study
            </a>
            <a
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900 no-underline hover:underline"
            >
              About Us
            </a>

            {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 no-underline hover:underline"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-blue-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#contact"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 no-underline hover:underline mr-8"
            >
              Contact Us
            </a>
            <a
              href="/careers"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 no-underline hover:underline"
            >
              Careers
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/images/aarkayLogo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50  no-underline hover:underline"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700  no-underline hover:underline"
                >
                  Pricing
                </a>

                {/* <a
                  href="blog"
                  className="text-base font-medium text-gray-900 hover:text-gray-700  no-underline hover:underline"
                >
                  Blog
                </a> */}
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700  no-underline hover:underline"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  {" "}
                  <a
                    href="/careers"
                    className="text-blue-600 hover:text-blue-500  no-underline hover:underline"
                  >
                    Careers
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
