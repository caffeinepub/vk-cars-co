import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  Fuel,
  Gauge,
  MessageCircle,
  Palette,
  Settings,
} from "lucide-react";
import { motion } from "motion/react";
import { useGetCarById } from "../hooks/useQueries";
import { formatPrice, getCarImage } from "../lib/carImages";

export function CarDetailsPage() {
  const { id } = useParams({ from: "/inventory/$id" });
  const carId = BigInt(id);
  const { data: car, isLoading, isError } = useGetCarById(carId);

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        data-ocid="car_details.loading_state"
      >
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading vehicle details...</p>
        </div>
      </div>
    );
  }

  if (isError || !car) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        data-ocid="car_details.error_state"
      >
        <div className="text-center">
          <p className="text-white text-xl mb-4">Vehicle not found</p>
          <Link to="/inventory">
            <button type="button" className="gold-btn">
              Back to Inventory
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const image = getCarImage(car.brand, car.model);
  const waText = encodeURIComponent(
    `Hi, I'm interested in the ${car.brand} ${car.model}. Please share more details.`,
  );

  return (
    <main className="min-h-screen bg-[#0B0F12]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          to="/inventory"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm"
          data-ocid="car_details.link"
        >
          <ArrowLeft size={14} />
          Back to Inventory
        </Link>
      </div>

      {/* Hero Image */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[16/7]"
          >
            <img
              src={image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F12]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">
                  {car.brand}
                </p>
                <h1
                  className="text-white text-3xl md:text-4xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {car.model}
                </h1>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  Price
                </p>
                <p className="price-tag text-3xl">{formatPrice(car.price)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              {/* Specs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-panel p-6 mb-6"
              >
                <h2 className="text-white font-semibold text-lg mb-5 uppercase tracking-wider">
                  Specifications
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Calendar,
                      label: "Year",
                      value: car.year.toString(),
                    },
                    {
                      icon: Gauge,
                      label: "Mileage",
                      value: `${Number(car.mileage).toLocaleString()} km`,
                    },
                    { icon: Fuel, label: "Fuel Type", value: car.fuelType },
                    {
                      icon: Settings,
                      label: "Transmission",
                      value: car.transmission,
                    },
                    { icon: Palette, label: "Color", value: car.color },
                  ].map((spec) => (
                    <div key={spec.label} className="spec-item py-4">
                      <spec.icon size={16} className="text-gold mx-auto mb-2" />
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-panel p-6"
              >
                <h2 className="text-white font-semibold text-lg mb-4 uppercase tracking-wider">
                  About This Vehicle
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {car.description}
                </p>
              </motion.div>
            </div>

            {/* Sidebar CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass-panel p-6 sticky top-24">
                <div className="divider-gold mb-5" />
                <p className="text-gray-400 text-sm text-center mb-1">
                  Starting from
                </p>
                <p className="price-tag text-3xl text-center mb-6">
                  {formatPrice(car.price)}
                </p>

                <Link
                  to="/book-test-drive"
                  search={{ carId: car.id.toString() }}
                  className="block mb-3"
                  data-ocid="car_details.primary_button"
                >
                  <button type="button" className="gold-btn w-full py-4">
                    BOOK TEST DRIVE
                  </button>
                </Link>

                <a
                  href={`https://wa.me/919876543210?text=${waText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                  data-ocid="car_details.secondary_button"
                >
                  <button
                    type="button"
                    className="w-full py-4 rounded-full border border-green-500/50 text-green-400 text-xs font-semibold uppercase tracking-widest hover:bg-green-500/10 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    WHATSAPP INQUIRY
                  </button>
                </a>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Brand</span>
                    <span className="text-white font-medium">{car.brand}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Model</span>
                    <span className="text-white font-medium">{car.model}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Year</span>
                    <span className="text-white font-medium">
                      {car.year.toString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Fuel</span>
                    <span className="text-white font-medium">
                      {car.fuelType}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
