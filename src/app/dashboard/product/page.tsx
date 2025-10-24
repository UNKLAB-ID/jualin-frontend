"use client";

import DashboardMenu from "@/UI/componen-administrator/dashboard-menu";
import ProductList from "@/UI/componen-administrator/product-administrator/product-list";

export default function ProductPage() {
  return (
    <DashboardMenu>
      <ProductList />
    </DashboardMenu>
  );
}
