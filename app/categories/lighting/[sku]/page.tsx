import { products } from "@/app/data/products";
import { notFound } from "next/navigation";
import ProductDetail from "../../../components/ProductDetail";

const getProduct = (sku: string) =>
  products.find((p) => p.sku.toLowerCase() === sku.toLowerCase());

export default async function ProductDetailWrapper({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const product = getProduct(sku);
  if (!product) return notFound();
  return <ProductDetail product={product} />;
}
