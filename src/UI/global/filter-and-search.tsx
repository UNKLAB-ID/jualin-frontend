'use client';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export interface FilterOption {
    id: string | number;
    label: string;
    value: string;
}

export interface FilterState {
    searchQuery: string;
    selectedCategory: string;
    selectedLocation: string;
    priceRange: string;
    selectedYear: string;
    discountFilter: string;
}

interface FilterAndSearchProps {
    // Filter Options
    categories?: FilterOption[];
    locations?: FilterOption[];
    priceRanges?: FilterOption[];
    years?: FilterOption[];
    discountRanges?: FilterOption[];

    // Current Filter State
    searchQuery?: string;
    selectedCategory?: string;
    selectedLocation?: string;
    priceRange?: string;
    selectedYear?: string;
    discountFilter?: string;

    // Callbacks
    onSearchChange?: (value: string) => void;
    onCategoryChange?: (value: string) => void;
    onLocationChange?: (value: string) => void;
    onPriceRangeChange?: (value: string) => void;
    onYearChange?: (value: string) => void;
    onDiscountChange?: (value: string) => void;
    onResetFilters?: () => void;

    // Optional Props
    showYearFilter?: boolean;
    searchPlaceholder?: string;
}

const FilterAndSearch = ({
    // Filter Options with defaults
    categories = [
        { id: 1, label: "Semua", value: "Semua" },
        { id: 2, label: "Mobil", value: "Mobil" },
        { id: 3, label: "Motor", value: "Motor" },
        { id: 4, label: "Properti", value: "Properti" },
        { id: 5, label: "Elektronik", value: "Elektronik" },
        { id: 6, label: "Fashion", value: "Fashion" }
    ],
    locations = [
        { id: 1, label: "Semua", value: "Semua" },
        { id: 2, label: "Jakarta", value: "Jakarta" },
        { id: 3, label: "Bandung", value: "Bandung" },
        { id: 4, label: "Surabaya", value: "Surabaya" },
        { id: 5, label: "Medan", value: "Medan" },
        { id: 6, label: "Makassar", value: "Makassar" }
    ],
    priceRanges = [
        { id: 1, label: "Semua", value: "Semua" },
        { id: 2, label: "< 10 Juta", value: "< 10 Juta" },
        { id: 3, label: "10-50 Juta", value: "10-50 Juta" },
        { id: 4, label: "50-100 Juta", value: "50-100 Juta" },
        { id: 5, label: "100-500 Juta", value: "100-500 Juta" },
        { id: 6, label: "> 500 Juta", value: "> 500 Juta" }
    ],
    years = [
        { id: 1, label: "Semua", value: "Semua" },
        { id: 2, label: "2024", value: "2024" },
        { id: 3, label: "2023", value: "2023" },
        { id: 4, label: "2022", value: "2022" },
        { id: 5, label: "2021", value: "2021" },
        { id: 6, label: "2020", value: "2020" },
        { id: 7, label: "2015-2019", value: "2015-2019" },
        { id: 8, label: "2010-2014", value: "2010-2014" },
        { id: 9, label: "< 2010", value: "< 2010" }
    ],
    discountRanges = [
        { id: 1, label: "Semua", value: "Semua" },
        { id: 2, label: "Ada Diskon", value: "Ada Diskon" },
        { id: 3, label: "> 10%", value: "> 10%" },
        { id: 4, label: "> 20%", value: "> 20%" },
        { id: 5, label: "> 30%", value: "> 30%" },
        { id: 6, label: "> 50%", value: "> 50%" }
    ],

    // Current Filter State
    searchQuery: externalSearchQuery,
    selectedCategory: externalCategory,
    selectedLocation: externalLocation,
    priceRange: externalPriceRange,
    selectedYear: externalYear,
    discountFilter: externalDiscount,

    // Callbacks
    onSearchChange,
    onCategoryChange,
    onLocationChange,
    onPriceRangeChange,
    onYearChange,
    onDiscountChange,
    onResetFilters,

    // Optional Props
    showYearFilter: externalShowYearFilter,
    searchPlaceholder = "Cari produk, lokasi, kategori..."
}: FilterAndSearchProps) => {
    // Internal state (used if no external state provided)
    const [internalSearchQuery, setInternalSearchQuery] = useState("");
    const [internalCategory, setInternalCategory] = useState("Semua");
    const [internalLocation, setInternalLocation] = useState("Semua");
    const [internalPriceRange, setInternalPriceRange] = useState("Semua");
    const [internalYear, setInternalYear] = useState("Semua");
    const [internalDiscount, setInternalDiscount] = useState("Semua");
    const [showFilters, setShowFilters] = useState(false);

    // Use external state if provided, otherwise use internal state
    const searchQuery = externalSearchQuery !== undefined ? externalSearchQuery : internalSearchQuery;
    const selectedCategory = externalCategory !== undefined ? externalCategory : internalCategory;
    const selectedLocation = externalLocation !== undefined ? externalLocation : internalLocation;
    const priceRange = externalPriceRange !== undefined ? externalPriceRange : internalPriceRange;
    const selectedYear = externalYear !== undefined ? externalYear : internalYear;
    const discountFilter = externalDiscount !== undefined ? externalDiscount : internalDiscount;

    // Show year filter only for Mobil or Motor
    const showYearFilter = externalShowYearFilter !== undefined
        ? externalShowYearFilter
        : (selectedCategory === "Mobil" || selectedCategory === "Motor");

    // Handler functions
    const handleSearchChange = (value: string) => {
        if (onSearchChange) {
            onSearchChange(value);
        } else {
            setInternalSearchQuery(value);
        }
    };

    const handleCategoryChange = (value: string) => {
        if (onCategoryChange) {
            onCategoryChange(value);
        } else {
            setInternalCategory(value);
        }
    };

    const handleLocationChange = (value: string) => {
        if (onLocationChange) {
            onLocationChange(value);
        } else {
            setInternalLocation(value);
        }
    };

    const handlePriceRangeChange = (value: string) => {
        if (onPriceRangeChange) {
            onPriceRangeChange(value);
        } else {
            setInternalPriceRange(value);
        }
    };

    const handleYearChange = (value: string) => {
        if (onYearChange) {
            onYearChange(value);
        } else {
            setInternalYear(value);
        }
    };

    const handleDiscountChange = (value: string) => {
        if (onDiscountChange) {
            onDiscountChange(value);
        } else {
            setInternalDiscount(value);
        }
    };

    const handleResetFilters = () => {
        if (onResetFilters) {
            onResetFilters();
        } else {
            setInternalSearchQuery("");
            setInternalCategory("Semua");
            setInternalLocation("Semua");
            setInternalPriceRange("Semua");
            setInternalYear("Semua");
            setInternalDiscount("Semua");
        }
    };

    return (
        <div className="mb-6">
            {/* Search Bar */}
            <div className="flex gap-2 mb-4">
                <div className="flex-1 relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-sm sm:text-base"
                    />
                </div>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${showFilters
                            ? 'bg-[var(--primary)] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    <FilterListIcon fontSize="small" />
                    <span className="hidden sm:inline">Filter</span>
                </button>
            </div>

            {/* Filter Options */}
            {showFilters && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                    {/* Category Filter */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Kategori</label>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategoryChange(cat.value)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${selectedCategory === cat.value
                                            ? 'bg-[var(--primary)] text-white'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:border-[var(--primary)]'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Location Filter */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Lokasi</label>
                        <div className="flex flex-wrap gap-2">
                            {locations.map((loc) => (
                                <button
                                    key={loc.id}
                                    onClick={() => handleLocationChange(loc.value)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${selectedLocation === loc.value
                                            ? 'bg-[var(--primary)] text-white'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:border-[var(--primary)]'
                                        }`}
                                >
                                    {loc.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Range Filter */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Rentang Harga</label>
                        <div className="flex flex-wrap gap-2">
                            {priceRanges.map((range) => (
                                <button
                                    key={range.id}
                                    onClick={() => handlePriceRangeChange(range.value)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${priceRange === range.value
                                            ? 'bg-[var(--primary)] text-white'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:border-[var(--primary)]'
                                        }`}
                                >
                                    {range.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Year Filter - Only show for Mobil/Motor */}
                    {showYearFilter && (
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Tahun {selectedCategory}
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {years.map((year) => (
                                    <button
                                        key={year.id}
                                        onClick={() => handleYearChange(year.value)}
                                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${selectedYear === year.value
                                                ? 'bg-[var(--primary)] text-white'
                                                : 'bg-white text-gray-700 border border-gray-300 hover:border-[var(--primary)]'
                                            }`}
                                    >
                                        {year.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Discount Filter */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Diskon 🏷️
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {discountRanges.map((discount) => (
                                <button
                                    key={discount.id}
                                    onClick={() => handleDiscountChange(discount.value)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${discountFilter === discount.value
                                            ? 'bg-red-500 text-white'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:border-red-500'
                                        }`}
                                >
                                    {discount.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Reset Filter Button */}
                    <div className="pt-2">
                        <button
                            onClick={handleResetFilters}
                            className="text-sm text-[var(--primary)] font-medium hover:underline"
                        >
                            Reset Semua Filter
                        </button>
                    </div>
                </div>
            )}

            {/* Active Filters Display */}
            {(selectedCategory !== "Semua" || selectedLocation !== "Semua" || priceRange !== "Semua" || selectedYear !== "Semua" || discountFilter !== "Semua" || searchQuery) && (
                <div className="mt-3 flex flex-wrap gap-2 items-center">
                    <span className="text-sm text-gray-600">Filter aktif:</span>
                    {searchQuery && (
                        <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-xs font-medium">
                            &quot;{searchQuery}&quot;
                        </span>
                    )}
                    {selectedCategory !== "Semua" && (
                        <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-xs font-medium">
                            {selectedCategory}
                        </span>
                    )}
                    {selectedLocation !== "Semua" && (
                        <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-xs font-medium">
                            {selectedLocation}
                        </span>
                    )}
                    {priceRange !== "Semua" && (
                        <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-xs font-medium">
                            {priceRange}
                        </span>
                    )}
                    {selectedYear !== "Semua" && showYearFilter && (
                        <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-xs font-medium">
                            Tahun {selectedYear}
                        </span>
                    )}
                    {discountFilter !== "Semua" && (
                        <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
                            🏷️ {discountFilter}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default FilterAndSearch;
