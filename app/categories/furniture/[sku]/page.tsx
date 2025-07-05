"use client";
import React from "react";
import { products } from "@/app/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

const getProduct = (sku: string) =>
  products.find((p) => p.sku.toLowerCase() === sku.toLowerCase());

export default function ProductDetailWrapper({
  params,
}: {
  params: { sku: string };
}) {
  const product = getProduct(params.sku);
  if (!product) return notFound();
  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: (typeof products)[0] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const images = product.images;
  const hasMultiple = images.length > 1;
  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-10 px-4">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative border rounded-lg overflow-hidden bg-white w-full max-w-xl aspect-square flex items-center justify-center">
          {hasMultiple && (
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow"
              onClick={prevImage}
              aria-label="Previous image"
              type="button"
            >
              &#8592;
            </button>
          )}
          <Image
            src={images[currentIndex]}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
          {hasMultiple && (
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow"
              onClick={nextImage}
              aria-label="Next image"
              type="button"
            >
              &#8594;
            </button>
          )}
        </div>
      </div>
      <div className="md:w-1/3 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
            NEW
          </span>
        </div>
        <h1 className="text-2xl font-bold leading-tight">{product.name}</h1>
        <div className="text-sm text-gray-600 mb-2">{product.sku}</div>
        <div className="divide-y divide-gray-200 border-t border-b">
          <Details title="Description" content={product.info} />
          <Details title="Product Information" content={product.info} />
          <Details title="Return Policy" content={product.returnPolicy} />
          <Details
            title="Shipping Delivery"
            content={product.shippingDelivery}
          />
        </div>
      </div>
    </div>
  );
}

function Details({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
      >
        {title}
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && <div className="pb-4 text-gray-600 text-sm">{content}</div>}
    </div>
  );
}
