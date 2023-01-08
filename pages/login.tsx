import Head from "next/head";
import Image from "next/image";
import technopartnerLogo from "../public/img/logo technopartner.png";
import { useAuthService } from "../core/domains/auth/useAuthService";

export default function LoginPage() {
  const username = "support@technopartner.id";
  const password = "1234567";

  const { authResponse, login } = useAuthService();

  return (
    <>
      <Head>
        <title>Login | Cofeeapp</title>
      </Head>
      <main className="login-page min-h-screen flex flex-col justify-center items-stretch">
        {/* Logo */}
        <Image
          alt="technopartner logo"
          priority
          src={technopartnerLogo}
          width={320}
          className="mx-auto"
        />
        {/* end of Logo */}

        {/* Form */}
        <div className="login-form">
          <div className="mobile-container">
            <form
              id="login-form"
              onSubmit={event => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const credentials = Object.fromEntries(formData.entries()) as {
                  username: string;
                  password: string;
                };
                console.log("formData.entries()", credentials);
                login(credentials);
              }}
            >
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="username"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholder="Email"
                defaultValue={username}
                required
              />
              <label
                htmlFor="password"
                className="mt-[8px] block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                defaultValue={password}
                required
              />
              <button
                form="login-form"
                type="submit"
                className="mt-[16px] w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        {/* end of Form */}
      </main>
    </>
  );
}
