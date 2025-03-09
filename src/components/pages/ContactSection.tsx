import Contact from "@/components/custom/Contact";
import { SectionHeader } from "../custom/SectionHeader";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-wrapper pt-16 md:pt-28 w-[90%] md:w-[80%] mx-auto "
    >
      <SectionHeader title="Contact" dir="r" />
      {/* <div className="grid md:grid-cols-2 place-items-center"> */}
      <div className="grid md:grid-cols-2">
        <div className="h-fit self-center">
          <ul className="mb-6 md:mb-0">
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-earth-500 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Mailing Address
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Hillview R/A
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  Chittagong, Bangladesh
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-earth-500 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Contact
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Mobile: +88 0152 153 3288
                </p>
                {/* <p className="text-gray-600 dark:text-slate-400">
                  Mobile: +88 0176 123 9802
                </p> */}
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-earth-500 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  {/* <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path> */}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Email address
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                Xenveebarua21@gmail.com                </p>
                {/* <p className="text-gray-600 dark:text-slate-400">
                  dipon@workera.ai
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  dipon.t@adjunct.eastdelta.edu.bd
                </p> */}
              </div>
            </li>
          </ul>
        </div>
        <div className=" h-fit self-center" id="form">
          <h2 className="mb-4 text-2xl font-bold dark:text-white">
            Ready to Get Started?
          </h2>
          <Contact />
        </div>
      </div>
    </section>
  );
}
