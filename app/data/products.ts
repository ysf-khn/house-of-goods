// Product data for all categories
export type Product = {
  name: string;
  sku: string;
  images: string[];
  category: string;
  categorySlug: string;
  info: string;
  returnPolicy: string;
  shippingDelivery: string;
};

export const products: Product[] = [
  // Furniture
  {
    name: "Modern Oak Table",
    sku: "FUR-001",
    images: ["/categories/furniture/table1.webp"],
    category: "FURNITURE",
    categorySlug: "furniture",
    info: "A sturdy oak table perfect for dining or workspace.",
    returnPolicy:
      "30-day return policy. Item must be unused and in original packaging.",
    shippingDelivery:
      "Ships within 5-7 business days. Free delivery over $100.",
  },
  {
    name: "Contemporary Side Table",
    sku: "FUR-002",
    images: [
      "/categories/furniture/table2.webp",
      "/categories/furniture/table2.1.webp",
    ],
    category: "FURNITURE",
    categorySlug: "furniture",
    info: "A sleek side table with a minimalist design.",
    returnPolicy:
      "30-day return policy. Item must be unused and in original packaging.",
    shippingDelivery:
      "Ships within 5-7 business days. Free delivery over $100.",
  },
  // Home Decor
  {
    name: "Elegant Wall Mirror",
    sku: "DEC-001",
    images: [
      "/categories/home-decor/mirror1.1.webp",
      "/categories/home-decor/mirror1.2.webp",
    ],
    category: "HOME DECOR",
    categorySlug: "home-decor",
    info: "A decorative wall mirror with a gold frame.",
    returnPolicy: "15-day return policy. No returns on damaged items.",
    shippingDelivery:
      "Ships within 3-5 business days. Standard delivery rates apply.",
  },
  {
    name: "Handwoven Floor Mat",
    sku: "DEC-002",
    images: [
      "/categories/home-decor/mat1.1.webp",
      "/categories/home-decor/mat1.2.webp",
    ],
    category: "HOME DECOR",
    categorySlug: "home-decor",
    info: "A soft, handwoven mat for living spaces.",
    returnPolicy: "15-day return policy. No returns on damaged items.",
    shippingDelivery:
      "Ships within 3-5 business days. Standard delivery rates apply.",
  },
  // Lighting
  {
    name: "Classic Table Lamp",
    sku: "LGT-001",
    images: [
      "/categories/lighting/lamp1.webp",
      "/categories/lighting/lamp1.1.webp",
    ],
    category: "LIGHTING",
    categorySlug: "lighting",
    info: "A classic lamp for bedside or desk use.",
    returnPolicy: "7-day return policy. Item must be unused.",
    shippingDelivery:
      "Ships within 2-4 business days. Express delivery available.",
  },
  {
    name: "Modern Pendant Light",
    sku: "LGT-002",
    images: [
      "/categories/lighting/lighting2.webp",
      "/categories/lighting/lighting2.1.webp",
    ],
    category: "LIGHTING",
    categorySlug: "lighting",
    info: "A modern pendant light for dining or living rooms.",
    returnPolicy: "7-day return policy. Item must be unused.",
    shippingDelivery:
      "Ships within 2-4 business days. Express delivery available.",
  },
  // Plants & Pots
  {
    name: "Ceramic Planter",
    sku: "PLT-001",
    images: ["/categories/plants-and-pots/planter1.webp"],
    category: "PLANTS & POTS",
    categorySlug: "plants-and-pots",
    info: "A stylish ceramic planter for indoor plants.",
    returnPolicy: "No returns on live plants. 14-day return for pots.",
    shippingDelivery:
      "Ships within 3-6 business days. Live plants delivered locally only.",
  },
  {
    name: "Glass Vase Set",
    sku: "PLT-002",
    images: [
      "/categories/plants-and-pots/vase1.webp",
      "/categories/plants-and-pots/vase1.1.jpeg",
      "/categories/plants-and-pots/vase1.2.jpeg",
    ],
    category: "PLANTS & POTS",
    categorySlug: "plants-and-pots",
    info: "A set of two glass vases for flowers or decor.",
    returnPolicy: "No returns on live plants. 14-day return for pots.",
    shippingDelivery:
      "Ships within 3-6 business days. Live plants delivered locally only.",
  },
  // Florals & Greenery
  {
    name: "Hanging Faux Ivy",
    sku: "FLR-001",
    images: [
      "/categories/florals-and-greenery/hanging1.1.webp",
      "/categories/florals-and-greenery/hanging1.2.webp",
    ],
    category: "FLORALS & GREENERY",
    categorySlug: "florals-and-greenery",
    info: "Artificial ivy for hanging baskets or wall decor.",
    returnPolicy: "30-day return policy. Item must be unused.",
    shippingDelivery:
      "Ships within 4-7 business days. Free shipping on orders over $50.",
  },
  {
    name: "Potted Faux Succulent",
    sku: "FLR-002",
    images: [
      "/categories/florals-and-greenery/pot1.1.webp",
      "/categories/florals-and-greenery/pot1.2.webp",
    ],
    category: "FLORALS & GREENERY",
    categorySlug: "florals-and-greenery",
    info: "A realistic artificial succulent in a decorative pot.",
    returnPolicy: "30-day return policy. Item must be unused.",
    shippingDelivery:
      "Ships within 4-7 business days. Free shipping on orders over $50.",
  },
];
