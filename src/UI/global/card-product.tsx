"use client";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import rectangle38 from "../../assets/images/rectangle38.svg";
import { useState } from "react";
import ButtonSecundary from "./button-secundary";
import ButtonPrimary from "./button-primary";
import DeleteIcon from '@mui/icons-material/Delete';

interface CardProductProps {
  title?: string;
  category?: string;
  location?: string;
  price?: string;
  originalPrice?: string;
  description?: string;
  images?: string[];
  views?: string;
  timePosted?: string;
  discountPercentage?: number;
  onBuyClick?: () => void;
  onChatClick?: () => void;

  role?: "user" | "admin";
}

const CardProduct = ({
  title = "Toyota Avanza 2023 - Mobil Keluarga Nyaman & Irit",
  category = "Mobil",
  location = "Jakarta Selatan",
  price = "Rp 250.000.000",
  originalPrice = "Rp 275.000.000",
  description = "Dijual cepat! Mobil terawat, service rutin, pajak hidup. Siap pakai untuk keluarga Anda.",
  images = [rectangle38, rectangle38, rectangle38, rectangle38],
  views = "1.2k",
  timePosted = "2h",
  discountPercentage,
  onBuyClick,
  onChatClick,
  role = "user",
}: CardProductProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - next image
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
    if (isRightSwipe) {
      // Swipe right - previous image
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }
  };

  // Mouse drag for desktop
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragEnd(0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!dragStart || !dragEnd) return;

    const distance = dragStart - dragEnd;
    const isLeftDrag = distance > minSwipeDistance;
    const isRightDrag = distance < -minSwipeDistance;

    if (isLeftDrag) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
    if (isRightDrag) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full">
      {/* Image Slider - Swipeable */}
      <div className="relative overflow-hidden">
        {/* Discount Badge - Pojok Kiri Atas */}
        {discountPercentage && discountPercentage > 0 && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
            <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-lg">
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-sm font-bold">
                  -{discountPercentage}%
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:scale-110 transition-transform duration-200 z-10"
        >
          {isFavorite ? (
            <FavoriteIcon
              className="text-red-500"
              sx={{ fontSize: { xs: 18, sm: 24 } }}
            />
          ) : (
            <FavoriteBorderIcon
              className="text-gray-600"
              sx={{ fontSize: { xs: 18, sm: 24 } }}
            />
          )}
        </button>
        <div
          className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing select-none"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          {images.map((imgSrc, index) => (
            <div key={index} className="min-w-full">
              <Image
                src={imgSrc}
                alt={`Product image ${index + 1}`}
                width={1000}
                height={296}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        {images.length > 1 && (
          <>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Image Counter - Pojok Kanan Bawah */}
            <div className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Product Information */}
      <div className="p-2 sm:p-4">
        {/* Product Title */}
        <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2 hover:text-[var(--primary)] cursor-pointer transition-colors">
          {title}
        </h3>

        {/* Category & Location - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 mb-3">
          <span className="bg-gray-100 px-2 py-1 rounded-md text-xs font-medium">
            {category}
          </span>
          <span>•</span>
          <span>{location}</span>
        </div>

        {/* Price */}
        <div className="mb-2 sm:mb-3">
          <p className="text-sm sm:text-2xl font-bold text-[var(--primary)]">
            {price}
          </p>
          {originalPrice && (
            <p className="text-xs sm:text-sm text-gray-500 line-through">
              {originalPrice}
            </p>
          )}
        </div>

        {/* Description - Hidden on mobile */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 hidden sm:block">
          {description}
        </p>

        {/* Product Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2 sm:mb-4 pb-2 sm:pb-4 border-b">
          <div className="flex items-center gap-1">
            <span className="text-xs">👁️</span>
            <span className="text-xs">{views}</span>
          </div>
          <div>
            <span className="text-xs">{timePosted}</span>
          </div>
        </div>

        {/* Action Buttons */}
        {role === "user" && (
          <div className="flex gap-1 sm:gap-2">
            <ButtonPrimary text="Beli" width="100%" onClick={onBuyClick} />
            <ButtonSecundary text="Chat" width="auto" onClick={onChatClick} />
          </div>
        )}

        {role === "admin" && (
          <div>
            <ButtonPrimary text="Update" width="100%" onClick={onBuyClick} />
            <div className="flex gap-1 sm:gap-2 mt-2">
              <ButtonSecundary text="Show" width="100%" onClick={onChatClick} />
              <button
                style={{ width: 'auto' }}
                className="flex items-center justify-center px-4 p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                onClick={() => alert("Delete action")}
              >
                <DeleteIcon sx={{ fontSize: { xs: 18, md: 30 } }} className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
