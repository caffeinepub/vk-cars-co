import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { CarCard } from "../components/CarCard";
import { useGetAllCars } from "../hooks/useQueries";

type BrandFilter = "all" | "BMW" | "Audi" | "Mercedes-Benz";
type PriceFilter = "all" | "under50" | "50to65" | "above65";
type FuelFilter = "all" | "Petrol" | "Diesel";

export function InventoryPage() {
  const { data: cars, isLoading } = useGetAllCars();
  const [brand, setBrand] = useState<BrandFilter>("all");
  const [price, setPrice] = useState<PriceFilter>("all");
  const [fuel, setFuel] = useState<FuelFilter>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!cars) return [];
    return cars.filter((car) => {
      if (
        brand !== "all" &&
        !car.brand.toLowerCase().includes(brand.toLowerCase())
      )
        return false;
      const p = Number(car.price);
      if (price === "under50" && p >= 5000000) return false;
      if (price === "50to65" && (p < 5000000 || p > 6500000)) return false;
      if (price === "above65" && p <= 6500000) return false;
      if (fuel !== "all" && car.fuelType.toLowerCase() !== fuel.toLowerCase())
        return false;
      if (
        search &&
        !`${car.brand} ${car.model}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [cars, brand, price, fuel, search]);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-[#111820] to-[#0B0F12]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow mb-3">BROWSE OUR FLEET</p>
            <h1 className="section-title text-4xl md:text-5xl mb-4">
              CAR INVENTORY
            </h1>
            <p className="muted-text max-w-lg mx-auto">
              Explore our hand-picked collection of premium used vehicles. Every
              car is verified and ready to drive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section
        className="py-8 bg-[#0D1318] border-y border-white/5 sticky top-16 z-40"
        data-ocid="inventory.panel"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-48">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search cars..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-dark pl-9 py-2.5 text-sm"
                data-ocid="inventory.search_input"
              />
            </div>

            {/* Brand Filter */}
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value as BrandFilter)}
              className="input-dark py-2.5 text-sm w-auto cursor-pointer"
              data-ocid="inventory.select"
            >
              <option value="all">All Brands</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
            </select>

            {/* Price Filter */}
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value as PriceFilter)}
              className="input-dark py-2.5 text-sm w-auto cursor-pointer"
              data-ocid="inventory.select"
            >
              <option value="all">All Prices</option>
              <option value="under50">Under ₹50 L</option>
              <option value="50to65">₹50L – ₹65L</option>
              <option value="above65">Above ₹65L</option>
            </select>

            {/* Fuel Filter */}
            <select
              value={fuel}
              onChange={(e) => setFuel(e.target.value as FuelFilter)}
              className="input-dark py-2.5 text-sm w-auto cursor-pointer"
              data-ocid="inventory.select"
            >
              <option value="all">All Fuel Types</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16 bg-[#0B0F12]">
        <div className="max-w-7xl mx-auto px-6">
          {isLoading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="inventory.loading_state"
            >
              {["s1", "s2", "s3", "s4", "s5", "s6"].map((sk) => (
                <div key={sk} className="car-card animate-pulse">
                  <div className="aspect-[16/10] bg-white/5" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-white/5 rounded w-2/3" />
                    <div className="h-3 bg-white/5 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div
              className="text-center py-20"
              data-ocid="inventory.empty_state"
            >
              <p className="text-4xl mb-4">🚗</p>
              <p className="text-white text-xl font-semibold mb-2">
                No cars found
              </p>
              <p className="text-gray-400">Try adjusting your filters</p>
            </div>
          ) : (
            <>
              <p className="text-gray-400 text-sm mb-8">
                Showing{" "}
                <span className="text-gold font-semibold">
                  {filtered.length}
                </span>{" "}
                vehicles
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((car, i) => (
                  <motion.div
                    key={car.id.toString()}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <CarCard car={car} index={i} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
