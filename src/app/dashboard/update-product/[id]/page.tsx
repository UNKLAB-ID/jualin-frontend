"use client";

import { useForm } from "react-hook-form";
import { useEffect, use } from "react";
import DashboardMenu from "@/UI/componen-administrator/dashboard-menu";
import FormProduct, {
  ProductFormData,
} from "@/UI/componen-administrator/product-administrator/form-product";

interface UpdateProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const UpdateProductPage = ({ params }: UpdateProductPageProps) => {
  const { id } = use(params);

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

  useEffect(() => {
    // Fetch product data by ID
    const fetchProductData = async () => {
      try {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/products/${id}`);
        // const data = await response.json();

        // Mock data for example
        const mockData: ProductFormData = {
          title: "Toyota Avanza 2023",
          price: "150000",
          discount_percentage: "25",
          discount_start_date: "2025-01-01",
          discount_end_date: "2025-12-31",
          category: "Mobil",
          type: ["GT Sport", "VIP"],
          description: "Mobil keluarga yang nyaman dan irit",
          images: [],
          status_product: "active",
        };

        // Set form values with fetched data
        form.reset(mockData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductData();
  }, [id, form]);

  const onSubmit = (data: ProductFormData) => {
    console.log("Update Product Data:", data);
    console.log("Product ID:", id);
    console.log("Total images:", data.images.length);
    // Handle update product logic here
    // Example: call API to update product with FormData
  };

  return (
    <DashboardMenu>
      <FormProduct
        form={form}
        onSubmit={onSubmit}
        title="Edit Produk"
        submitButtonText="Update Produk"
      />
    </DashboardMenu>
  );
};

export default UpdateProductPage;
