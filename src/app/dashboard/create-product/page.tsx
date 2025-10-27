"use client";

import { useForm } from "react-hook-form";
import DashboardMenu from "@/UI/componen-administrator/dashboard-menu";
import FormProduct, {
  ProductFormData,
} from "@/UI/componen-administrator/product-administrator/form-product";

const CreateProductPage = () => {
  const form = useForm<ProductFormData>({
    defaultValues: {
      title: "",
      price: "",
      discount_percentage: "",
      discount_start_date: "",
      discount_end_date: "",
      category: "",
      type: [],
      description: "",
      images: [],
      status_product: "active",
    },
  });

  const onSubmit = (data: ProductFormData) => {
    console.log("Create Product Data:", data);
    console.log("Total images:", data.images.length);
    // Handle create product logic here
    // Example: call API to create product with FormData
  };

  return (
    <DashboardMenu>
      <FormProduct
        form={form}
        onSubmit={onSubmit}
        title="Tambah Produk Baru"
        submitButtonText="Tambah Produk"
      />
    </DashboardMenu>
  );
};

export default CreateProductPage;