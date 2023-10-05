"use client";
import HeroCarousel from "./(pages)/_components/heroCarousel";
import CategoryList from "./(pages)/products/_components/CategoryList";
import NewFlavorList from "./(pages)/products/_components/NewFlavoursList";
import ProductList from "./(pages)/products/_components/ProductList";
import NewProductList from "./(pages)/products/_components/newProductList";
import CategoryDevice from "./(pages)/products/devices/_components/CategoryDevices";
import CategoryDispo from "./(pages)/products/disposable/_components/CategoryDispo";
import CategoryPods from "./(pages)/products/pods/_components/CategoryPods";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <div className="text-center mb-8 mt-14">
        <h1 className="text-6xl font-bold mb-2">Best Deals</h1>
        <h3 className="text-xl">Just for you</h3>
      </div>
      <ProductList />
      <CategoryList />
      <h1 className="text-6xl font-bold text-center my-10">
        <span className="text-red-700">Newly </span>Released
      </h1>
      <NewProductList />
      <NewFlavorList />
      <CategoryDevice />
      <CategoryPods />
      <CategoryDispo />
    </>
  );
}
