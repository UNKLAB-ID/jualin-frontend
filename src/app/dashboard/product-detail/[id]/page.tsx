"use client";

import { use } from "react";
import DashboardMenu from "@/UI/componen-administrator/dashboard-menu";
import ProductDetail from "@/UI/componen-onbording/product-detail";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const { id } = use(params);

  return (
    <DashboardMenu>
      <ProductDetail typeAction="admin" id={id} />
    </DashboardMenu>
  );
};

export default ProductDetailPage;
