"use client";

import { use } from "react";
import NavbarHome from "@/UI/componen-onbording/navbar";
import ProductDetail from "@/UI/componen-onbording/product-detail";
import Footer from "@/UI/global/footer";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params);

  return (
    <div>
      <NavbarHome />
      <ProductDetail typeAction="user" id={id} />
      <Footer />
    </div>
  );
}
