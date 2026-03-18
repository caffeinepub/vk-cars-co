// Map car brand/model to local image paths
export function getCarImage(brand: string, model: string): string {
  const b = brand.toLowerCase();
  const m = model.toLowerCase();

  if (b.includes("bmw")) {
    if (m.includes("x5") || m.includes("x6") || m.includes("x7")) {
      return "/assets/generated/car-bmw-x5.dim_800x500.jpg";
    }
    return "/assets/generated/car-bmw-5-series.dim_800x500.jpg";
  }
  if (b.includes("audi")) {
    if (m.includes("q7") || m.includes("q5") || m.includes("q8")) {
      return "/assets/generated/car-audi-q7.dim_800x500.jpg";
    }
    return "/assets/generated/car-audi-a6.dim_800x500.jpg";
  }
  if (b.includes("mercedes") || b.includes("benz")) {
    return "/assets/generated/car-mercedes-eclass.dim_800x500.jpg";
  }
  // fallback
  return "/assets/generated/car-bmw-5-series.dim_800x500.jpg";
}

export function formatPrice(price: bigint): string {
  const num = Number(price);
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2)} Cr`;
  }
  if (num >= 100000) {
    return `₹${(num / 100000).toFixed(0)} L`;
  }
  return `₹${num.toLocaleString("en-IN")}`;
}
