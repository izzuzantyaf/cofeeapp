import Head from "next/head";
import homeIconInactive from "../public/img/home2.png";
import menuIconActive from "../public/img/menu1.png";
import Link from "next/link";
import { Route } from "../core/constants";
import Image from "next/image";
import { Tabs } from "flowbite-react";
import { useMenuPageService } from "../core/domains/page/menu/useMenuPageService";
import { useState } from "react";

export default function MenuPage() {
  const [menuPageData] = useMenuPageService();
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <>
      <Head>
        <title>Menu | Cofeeapp</title>
      </Head>
      <main className="menupage min-h-screen">
        {/* Navbar */}
        <div className="navbar bg-white sticky top-0 pt-[16px]">
          <div className="my-container">
            <h1 className="font-medium text-center">MENU</h1>
            {/* Tabs */}
            <div className="mt-[16px] flex flex-nowrap gap-[16px] overflow-x-auto">
              {menuPageData?.result.categories.map((category, index) => {
                const category_underscored = category.category_name.replaceAll(
                  " ",
                  "_"
                );
                return (
                  <>
                    <a
                      href={`#${category_underscored}`}
                      onClick={() => {
                        setActiveCategory(category_underscored);
                      }}
                    >
                      <p
                        key={index}
                        className={`whitespace-nowrap pb-[8px] ${
                          activeCategory == category_underscored
                            ? "border-b-2 border-solid border-black font-medium"
                            : "text-gray-400"
                        }`}
                      >
                        {category.category_name}
                      </p>
                    </a>
                  </>
                );
              })}
            </div>
            {/* end of Tabs */}
          </div>
        </div>
        {/* end of Navbar */}

        {/* Products */}
        <div className="products">
          {menuPageData?.result.categories.map((category, index) => {
            return (
              <>
                <div
                  key={index}
                  className="my-container category-name font-medium py-[16px] scroll-m-24"
                  id={category.category_name.replaceAll(" ", "_")}
                >
                  {category.category_name}
                </div>
                {category.menu.map((menu, index) => (
                  <div key={index} className="item bg-white py-[8px]">
                    <div className="my-container flex gap-[16px]">
                      {/* Product Image */}
                      <div className="width-[40px] shrink-0">
                        <Image
                          alt={menu.photo}
                          src={menu.photo}
                          height={120}
                          width={100}
                          className="mx-auto"
                        />
                      </div>
                      {/* end of Product Image */}

                      {/* Product Info */}
                      <div className="product-info grow">
                        <div className="product-name font-medium">
                          {menu.name}
                        </div>
                        <div className="product-desc text-gray-400">
                          {menu.description}
                        </div>
                      </div>
                      {/* end of Product Info */}

                      {/* Product Price */}
                      <div className="product-price font-medium">
                        {menu.price}
                      </div>
                      {/* end of Product Price */}
                    </div>
                  </div>
                ))}
              </>
            );
          })}
        </div>
        {/* end of Products */}

        {/* Bottom bar */}
        <div className="bottom-bar py-[8px] bg-white sticky bottom-0">
          <div className="my-container flex items-center justify-around">
            <div className="home-icon cursor-pointer text-center">
              <Link href={Route.HOME}>
                <Image
                  className="mx-auto"
                  alt="home-icon"
                  src={homeIconInactive}
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
                  src={menuIconActive}
                  width={25}
                />
                <p className="text-center text-sm">Menu</p>
              </Link>
            </div>
          </div>
        </div>
        {/* end of Bottom bar */}
      </main>
    </>
  );
}
