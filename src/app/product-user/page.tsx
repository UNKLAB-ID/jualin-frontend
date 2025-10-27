"use client";
import NavbarHome from "@/UI/componen-onbording/navbar";
import Products from "@/UI/componen-onbording/product";
import Footer from "@/UI/global/footer";

export default function ProductUser() {
  return (
    <div>
      <NavbarHome />
      <Products typeContent="all-products" />
      <Footer />
    </div>
  );
}
