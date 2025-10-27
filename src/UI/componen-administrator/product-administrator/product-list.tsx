"use client";

import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CardProduct from "@/UI/global/card-product";
import { useState } from "react";
import FilterAndSearch from "@/UI/global/filter-and-search";
import { useRouter } from "next/navigation";

export default function ProductList() {
  // Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedLocation, setSelectedLocation] = useState("Semua");
  const [priceRange, setPriceRange] = useState("Semua");
  const [selectedYear, setSelectedYear] = useState("Semua");
  const [discountFilter, setDiscountFilter] = useState("Semua");
  const router = useRouter();

  // Reset all filters handler
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Semua");
    setSelectedLocation("Semua");
    setPriceRange("Semua");
    setSelectedYear("Semua");
    setDiscountFilter("Semua");
  };

  const productsArray = Array.from({ length: 8 }, (_, index) => index);

  return (
    <Box>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
            Product Management
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            Manage your products inventory
          </p>
        </div>
        <Button
          onClick={() => router.push("/dashboard/create-product")}
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
          className="text-xs sm:text-sm lg:text-base"
          sx={{
            whiteSpace: "nowrap",
            padding: { xs: "6px 12px", sm: "8px 16px", lg: "10px 20px" },
            fontSize: { xs: "0.75rem", sm: "0.875rem", lg: "1rem" },
          }}
        >
          Add New Product
        </Button>
      </div>

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

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        {productsArray.map((_, index) => (
          <CardProduct
            key={index}
            id={`product-${index + 1}`}
            discountPercentage={
              index % 3 === 0 ? 25 : index % 2 === 0 ? 50 : undefined
            }
            role="admin"
          />
        ))}
      </div>
    </Box>
  );
}
