import { products } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";

export default function FloralsAndGreeneryCategory() {
  const florals = products.filter((p) => p.category === "FLORALS & GREENERY");
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Florals & Greenery</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {florals.map((item) => (
          <Link
            key={item.sku}
            href={`/categories/florals-and-greenery/${item.sku}`}
            className="border rounded-lg p-4 bg-white/80 shadow block hover:shadow-lg transition"
          >
            <Image
              src={item.images[0]}
              alt={item.name}
              width={300}
              height={200}
              className="rounded mb-3 object-cover"
            />
            <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
            <div className="text-sm text-gray-600 mb-2">SKU: {item.sku}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
