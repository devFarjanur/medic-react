import React from "react";
import LayoutHomeTwo from "../Partials/Layout";

import datas from "../../data/productsTwo.json";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleThreeHomeTwo from "../Helpers/SectionStyleThreeHomeTwo";
import SectionStyleTwo from "../Helpers/SectionStyleTwoHomeTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import ProductsAds from "../Home/ProductsAds";
import Banner from "./Banner";
import CampaignCountDown from "./CampaignCountDown";
import CategoriesSection from "./CategoriesSection";

export default function HomeTwo() {
  const { products } = datas;
  return (
    <LayoutHomeTwo>
      <Banner className="banner-wrapper mb-[46px]" />
      <ViewMoreTitle
        className="my-categories mb-[60px]"
        seeMoreUrl="/all-products"
        categoryTitle="Medicine Category"
      >
        <CategoriesSection />
      </ViewMoreTitle>
      <SectionStyleThreeHomeTwo
        products={products}
        showProducts={6}
        sectionTitle="Featured Products"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />
      {/* <CampaignCountDown className="mb-[60px]" lastDate="2023-10-04 4:00:00" /> */}
      <ProductsAds
        ads={[
          `${import.meta.env.VITE_PUBLIC_URL}/assets/images/ban-1.png`,
          `${import.meta.env.VITE_PUBLIC_URL}/assets/images/ban-1.png`,
        ]}
        sectionHeight="sm:h-[450px] h-full"
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleThreeHomeTwo
        products={products.slice(3, 7)}
        showProducts={3}
        sectionTitle="Popular Sales"
        seeMoreUrl="/all-products"
        className="feature-products mb-[60px]"
      />
      <ViewMoreTitle
        className="top-selling-product mb-[60px]"
        seeMoreUrl="/all-products"
        categoryTitle="Top Selling Products"
      >
        <SectionStyleTwo products={products.slice(3, products.length)} />
      </ViewMoreTitle>
      <ProductsAds
        ads={[`${import.meta.env.VITE_PUBLIC_URL}/assets/images/ban-3.webp`]}
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleThreeHomeTwo
        products={products.reverse().slice(0, 10)}
        showProducts={9}
        sectionTitle="New Arrivals"
        seeMoreUrl="/all-products"
        className="new-arrivals mb-[60px]"
      />
      <ProductsAds
        sectionHeight="164"
        ads={[`${import.meta.env.VITE_PUBLIC_URL}/assets/images/ban-2.webp`]}
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleFour
        products={products}
        sectionTitle="Popular Sales"
        seeMoreUrl="/all-products"
        className="category-products mb-[60px]"
      />
    </LayoutHomeTwo>
  );
}
