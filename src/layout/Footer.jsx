import React, { useState } from "react";
import axios from "axios";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    axios
      .post("http://localhost:3000/newsletter", { email: email })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <footer className=" max-w-screen-2xl mx-auto mt-4">
        <div className="relative top-20 max-w-sm outline-4 outline-double outline-offset-8 outline-gray-100 bg-white py-10 md:max-w-2xl lg:max-w-5xl mx-auto">
          <div className="flex items-center justify-center px-4 md:px-8">
            <div className=" gap-2">
              <div className="mb-3 md:mb-4 text-center">
                <span className="font-bold justify-center text-center tracking-widest text-2xl ">
                  Subscribe Our NEWSLETTER
                </span>
              </div>
              <form onSubmit={handleSubmit} className="flex w-full md:max-w-md">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full flex-1 rounded border px-3 py-2 text-white "
                />
                <button
                  type="submit"
                  className="inline-block bg-amber-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none "
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 pt-40">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-16">
              {/* logo */}
              <div className="col-span-full md:col-auto lg:col-span-2 justify-center">
                <div className="mb-4 p-8 bg-amber-500 lg:-mt-2">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-xl font-bold text-white md:text-4xl"
                    aria-label="logo"
                  >
                    HOTELIER
                  </a>
                  <p className="mt-6 text-white sm:pr-8">
                    Download Hotelier – Premium Version, build a professional
                    website for your hotel business and grab the attention of
                    new visitors upon your site’s launch.
                  </p>
                </div>
              </div>
              {/* nav - start */}
              <div>
                <div className="mb-4 flex items-center">
                  <h1 className="font-bold uppercase tracking-widest text-amber-500">
                    Contact
                  </h1>
                  <span className="mx-2 inline-block w-10 h-[2px] bg-amber-500 rounded-full"></span>
                </div>

                <nav className="flex flex-col gap-4">
                  <div className="flex gap-1">
                    <span className="text-white">
                      <svg
                        className="h-5 w-5"
                        data-slot="icon"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        ></path>
                      </svg>
                    </span>
                    <span href="#" className="text-white text-base">
                      123 Street, New York, USA
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-white">
                      <svg
                        className="h-5 w-5"
                        data-slot="icon"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        ></path>
                      </svg>
                    </span>
                    <span href="#" className="text-white text-base">
                      +012 345 67890
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-white">
                      <svg
                        className="h-5 w-5"
                        data-slot="icon"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path>
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
                      </svg>
                    </span>
                    <span href="#" className="text-white text-base">
                      info@example.com
                    </span>
                  </div>
                  {/* social - start */}
                  <div className="flex gap-4">
                    <a
                      href="#"
                      target="_blank"
                      className="text-white transition duration-100 "
                    >
                      <svg
                        className="h-5 w-5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="text-white transition duration-100 "
                    >
                      <svg
                        className="h-5 w-5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="text-white transition duration-100 "
                    >
                      <svg
                        className="h-5 w-5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="text-white transition duration-100 "
                    >
                      <svg
                        className="h-5 w-5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </nav>
              </div>

              {/* nav - start */}
              <div>
                <div className="mb-4 flex items-center">
                  <h1 className="font-bold uppercase tracking-widest text-amber-500">
                    Company
                  </h1>
                  <span className="mx-2 inline-block w-10 h-[2px] bg-amber-500 rounded-full"></span>
                </div>

                <nav className="flex flex-col gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                    <a
                      href="#"
                      className="text-white text-base hover:tracking-wider"
                    >
                      About Us
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                    <a
                      href="#"
                      className="text-white text-base hover:tracking-wider"
                    >
                      Contact Us
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                    <a
                      href="#"
                      className="text-white text-base hover:tracking-wider"
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                    <a
                      href="#"
                      className="text-white text-base hover:tracking-wider"
                    >
                      Terms & Condition
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                    <a href="#" className="text-base hover:tracking-wider">
                      Support
                    </a>
                  </div>
                </nav>
              </div>

              {/* nav - start */}
              <div>
                <div className="mb-4 flex items-center">
                  <h1 className="font-bold uppercase tracking-widest text-amber-500">
                    Services
                  </h1>
                  <span className="mx-2 inline-block w-10 h-[2px] bg-amber-500 rounded-full"></span>
                </div>

                <nav className="flex flex-col gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                    <a href="#" className=" text-base hover:tracking-wider">
                      Food & Restruant
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                    <a href="#" className="text-base hover:tracking-wider">
                      Spa & Fitness
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                    <a href="#" className="text-base hover:tracking-wider">
                      Sports & Gaming
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                    <a href="#" className="text-base hover:tracking-wider">
                      Event & Party
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                    <a href="#" className="text-base hover:tracking-wider">
                      GYM & Yoga
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            <div className="md:flex justify-between border-t py-6">
              <div className="text-center text-sm text-gray-400">
                © 2021 - Present Flowrift. All rights reserved.
              </div>
              <nav className="flex flex-wrap justify-center md:justify-start">
                <a href="#" className="text-white ">
                  About
                </a>
                <span className="text-gray-400 px-2">|</span>
                <a href="#" className="text-white ">
                  Cookies
                </a>
                <span className="text-gray-400 px-2">|</span>
                <a href="#" className="text-white ">
                  Help
                </a>
                <span className="text-gray-400 px-2">|</span>
                <a href="#" className="text-white ">
                  FAQs
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
