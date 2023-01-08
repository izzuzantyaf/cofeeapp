import Head from "next/head";
import { useHomePageService } from "../core/domains/page/home/useHomePageService";
import technopartnerLogo from "../public/img/logo technopartner.png";
import Image from "next/image";
import { authService } from "../core/domains/auth/auth.service";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import homeIconActive from "../public/img/home1.png";
import menuIconInactive from "../public/img/menu2.png";
import Link from "next/link";
import { Route } from "../core/constants";

export default function HomePage() {
  const [homePageData] = useHomePageService();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const IDRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return (
    <>
      <Head>
        <title>Cofeeapp</title>
      </Head>
      <main className="homepage min-h-screen flex flex-col items-stretch">
        {/* Navbar */}
        <div className="navbar py-[16px] bg-white">
          <div className="my-container flex items-center justify-between">
            <Image
              alt="technopartner logo"
              priority
              width={100}
              src={technopartnerLogo}
            />
            <button
              type="button"
              className="text-red-500 bg-white border border-red-300 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-800 dark:text-white dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-600 dark:focus:ring-red-700"
              onClick={authService.logout}
            >
              Logout
            </button>
          </div>
        </div>
        {/* end of Navbar */}

        {/* Greeting */}
        <div className="greeting">
          <div className="my-container py-[16px]">
            <div className="bg-white p-[16px] rounded-[16px] shadow-md">
              <p className="greeting">{homePageData?.result.greeting},</p>
              <p className="name font-bold">{homePageData?.result.name}</p>
              <div className="info">
                <div className="flex items-center justify-between gap-[32px]">
                  {/* QR code */}
                  <button
                    className="qrcode rounded-full p-[16px] shadow-md inline-block"
                    data-modal-target="small-modal"
                    data-modal-toggle="small-modal"
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Image
                      alt="qrcode"
                      src={homePageData?.result.qrcode as string}
                      width={50}
                      height={50}
                      priority
                    />
                  </button>
                  {/* end of QR code */}
                  {/* Info */}
                  <div className="money-info w-full max-w-[320px]">
                    <div className="flex w-full items-center justify-between">
                      <div className="key-saldo">Saldo</div>
                      <div className="value-saldo font-bold">
                        {IDRupiah.format(homePageData?.result.saldo as number)}
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="key-points">Points</div>
                      <div className="value-points font-bold text-green-500">
                        {homePageData?.result.point}
                      </div>
                    </div>
                  </div>
                  {/* end of Info */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of Greeting */}

        {/* Carousel */}
        <div className="my-container pt-[16px]">
          <div
            id="animation-carousel"
            className="relative"
            data-carousel="static"
          >
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-36 overflow-hidden rounded-[16px] md:h-96">
              <Carousel slideInterval={2000}>
                {/* <!-- Item  --> */}
                {homePageData?.result.banner.map((banner, key) => (
                  <Image
                    key={key}
                    src={banner}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt={banner}
                    width={750}
                    height={375}
                  />
                ))}
              </Carousel>
            </div>
            {/* <!-- Slider controls --> */}
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
        {/* end of Carousel */}

        <div className="spacer grow"></div>

        {/* Bottom bar */}
        <div className="bottom-bar py-[8px] bg-white sticky bottom-0">
          <div className="my-container flex items-center justify-around">
            <div className="home-icon cursor-pointer text-center">
              <Link href={Route.HOME}>
                <Image
                  className="mx-auto"
                  alt="home-icon"
                  src={homeIconActive}
                  width={25}
                />
                <p className="text-center text-sm">Home</p>
              </Link>
            </div>
            <div className="home-icon cursor-pointer text-center">
              <Link href={Route.MENU}>
                <Image
                  className="mx-auto"
                  alt="home-icon"
                  src={menuIconInactive}
                  width={25}
                />
                <p className="text-center text-sm">Menu</p>
              </Link>
            </div>
          </div>
        </div>
        {/* end of Bottom bar */}

        {/* QR Code Modal */}
        {/* <!-- Small Modal --> */}
        <div
          className="qrcode-modal bg-white absolute top-0 left-0 right-0 bottom-0"
          style={{
            display: isModalOpen ? "block" : "none",
          }}
        >
          {/* Modal Header */}
          <div className="modal-header">
            <div className="my-container py-[16px] flex justify-end">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setIsModalOpen(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
          {/* end of Modal Header */}

          {/* Modal Body */}
          <p className="text-center">Show the QR Code below to the cashier.</p>
          <Image
            alt="qrcode"
            src={homePageData?.result.qrcode as string}
            width={200}
            height={200}
            className="mx-auto mt-[32px]"
          />
          {/* end of Modal Body */}
        </div>
        {/* end of QR Code Modal */}
      </main>
    </>
  );
}
