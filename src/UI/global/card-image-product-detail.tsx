"use client";
import Image from "next/image";
import rectangle38 from "../../assets/images/rectangle38.svg";
import { useState } from "react";

interface CardImageProductDetailProps {
  images?: string[];
}

const CardImageProductDetail = ({
  images = [rectangle38, rectangle38, rectangle38, rectangle38],
}: CardImageProductDetailProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      {/* Main Image - Square 1:1 */}
      <div className="w-full mb-4 relative aspect-square rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt={`Product image hero`}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Images - Square 1:1 */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 cursor-pointer border-2 rounded-lg overflow-hidden transition-all aspect-square ${
              selectedImage === index
                ? "border-[var(--primary)]"
                : "border-gray-300"
            }`}
          >
            <Image
              src={img}
              alt={`Product image ${index + 1}`}
              width={200}
              height={200}
              className="w-20 h-20 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardImageProductDetail;
