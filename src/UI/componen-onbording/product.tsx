"use client";
import CardProduct from "../global/card-product";
import { useState } from "react";
import FilterAndSearch from "../global/filter-and-search";

interface ProductsProps {
  typeContent: "home" | "all-products";
}

const Products = ({ typeContent }: ProductsProps) => {
  const productsArray = Array.from({ length: 8 }, (_, index) => index);

  // Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedLocation, setSelectedLocation] = useState("Semua");
  const [priceRange, setPriceRange] = useState("Semua");
  const [selectedYear, setSelectedYear] = useState("Semua");
  const [discountFilter, setDiscountFilter] = useState("Semua");

  // Reset all filters handler
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Semua");
    setSelectedLocation("Semua");
    setPriceRange("Semua");
    setSelectedYear("Semua");
    setDiscountFilter("Semua");
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
      <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 mt-8 ${typeContent === "home" ? "text-center" : "text-left"}`}>
        Produk Terbaru
      </h2>

      {/* Search & Filter Section */}
      <FilterAndSearch
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedLocation={selectedLocation}
        priceRange={priceRange}
        selectedYear={selectedYear}
        discountFilter={discountFilter}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onLocationChange={setSelectedLocation}
        onPriceRangeChange={setPriceRange}
        onYearChange={setSelectedYear}
        onDiscountChange={setDiscountFilter}
        onResetFilters={handleResetFilters}
      />

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        {productsArray.map((_, index) => (
          <CardProduct
            key={index}
            id={`product-${index + 1}`}
            discountPercentage={
              index % 3 === 0 ? 25 : index % 2 === 0 ? 50 : undefined
            }
          />
        ))}
      </div>

      {/* View All Products Button */}
      {typeContent === "home" && (
        <div className="flex justify-center mt-8 sm:mt-12 mb-8">
          <button className="group relative px-8 sm:px-12 py-3 sm:py-4 border border-black bg-transparent text-[#494F54] rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl">
            <span>Lihat Semua Produk</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
