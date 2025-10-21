"use client";
import NavbarHome from "@/UI/componen-onbording/navbar";
import Products from "@/UI/componen-onbording/product";

export default function ProductUser() {
  return (
    <div>
      <NavbarHome />
      <Products typeContent="all-products"/>
    </div>
  );
}
