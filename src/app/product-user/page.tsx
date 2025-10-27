"use client";
import NavbarHome from "@/UI/componen-onbording/navbar";
import Products from "@/UI/componen-onbording/product";
import Footer from "@/UI/global/footer";

export default function ProductUser() {
  return (
    <div>
      <NavbarHome />
      <div className="mb-20">
        <Products typeContent="all-products" />
      </div>
      <Footer />
    </div>
  );
}
