import { Link } from "@tanstack/react-router";
import { ChevronRight, CreditCard, Eye, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";
import { CarCard } from "../components/CarCard";
import { useGetAllCars } from "../hooks/useQueries";

const trustItems = [
  {
    icon: Shield,
    title: "Verified Vehicles",
    desc: "Every car undergoes a rigorous 150-point inspection before listing.",
  },
  {
    icon: CreditCard,
    title: "Easy Financing",
    desc: "Flexible EMI options with competitive rates from top banks.",
  },
  {
    icon: Eye,
    title: "Transparent Deals",
    desc: "No hidden charges. Complete ownership history and documentation.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Drive home your dream car within 48 hours of purchase.",
  },
];

export function HomePage() {
  const { data: cars, isLoading } = useGetAllCars();

  return (
    <main>
      {/* ── HERO ── FIX 1: Ambient glow + metallic headline + stronger CTA ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/assets/generated/car-bmw-5-series.dim_800x500.jpg"
        >
          <source
            src="https://cdn.mixkit.co/videos/preview/mixkit-luxury-car-driving-on-a-highway-at-dusk-41455-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F12]/96 via-[#0B0F12]/72 to-[#0B0F12]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F12] via-transparent to-[#0B0F12]/30" />

        {/* FIX 1: Ambient gold glow blob — positioned behind hero text */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "-8%",
            top: "20%",
            width: "560px",
            height: "560px",
            background:
              "radial-gradient(ellipse at center, rgba(201,164,90,0.09) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            {/* FIX 1: Eyebrow now uses gold-dash prefix via .section-eyebrow::before */}
            <p className="section-eyebrow mb-5">VK CARS & CO — MOHALI</p>

            <h1
              className="section-title mb-7"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(42px, 7vw, 76px)",
                lineHeight: 1.08,
                letterSpacing: "0.02em",
              }}
            >
              Drive Premium.
              <br />
              {/* FIX 1: Metallic gradient text via .gold-text */}
              <span className="gold-text">Drive VK Cars.</span>
            </h1>

            <p
              className="mb-10 leading-relaxed max-w-lg"
              style={{ color: "#b0bac4", fontSize: "17px", lineHeight: 1.7 }}
            >
              Trusted Used &amp; Luxury Car Dealer in Mohali. Discover our
              curated collection of premium vehicles with full transparency and
              zero compromises.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/inventory" data-ocid="hero.primary_button">
                <button
                  type="button"
                  className="gold-btn flex items-center gap-2"
                  style={{ padding: "15px 36px", fontSize: "12px" }}
                >
                  EXPLORE INVENTORY
                  <ChevronRight size={15} strokeWidth={2.5} />
                </button>
              </Link>
              <Link
                to="/book-test-drive"
                search={{ carId: undefined }}
                data-ocid="hero.secondary_button"
              >
                <button
                  type="button"
                  className="outline-btn"
                  style={{ padding: "15px 36px", fontSize: "12px" }}
                >
                  BOOK TEST DRIVE
                </button>
              </Link>
            </div>

            {/* FIX 1: Small credibility line beneath CTAs */}
            <p
              className="mt-7 flex items-center gap-3"
              style={{
                fontSize: "12px",
                color: "#5a6472",
                letterSpacing: "0.12em",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 28,
                  height: 1,
                  background: "rgba(201,164,90,0.4)",
                }}
              />
              1000+ HAPPY CUSTOMERS &nbsp;·&nbsp; 5+ YEARS IN MOHALI
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B0F12] to-transparent" />
      </section>

      {/* ── Trust Section ── */}
      <section className="py-24 bg-[#0B0F12]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="section-eyebrow mb-4 justify-center">WHY CHOOSE US</p>
            <h2 className="section-title text-3xl md:text-4xl">
              THE VK CARS PROMISE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="trust-card"
              >
                {/* FIX 3: Icon ring with subtle gold glow */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "rgba(201,164,90,0.08)",
                    border: "1px solid rgba(201,164,90,0.2)",
                    boxShadow: "0 0 20px rgba(201,164,90,0.06)",
                  }}
                >
                  <item.icon size={22} style={{ color: "#c9a45a" }} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Cars — FIX 3: ambient glow behind panel ── */}
      <section
        className="py-24 relative"
        style={{
          background: "linear-gradient(180deg, #0B0F12 0%, #0e1520 100%)",
        }}
      >
        {/* FIX 3: Ambient gold radial glow behind the panel */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "900px",
              height: "600px",
              background:
                "radial-gradient(ellipse at center, rgba(201,164,90,0.055) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-panel p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <p className="section-eyebrow mb-4 justify-center">
                HAND-PICKED PREMIUM VEHICLES
              </p>
              <h2 className="section-title text-3xl md:text-4xl">
                OUR EXCLUSIVE COLLECTION
              </h2>
              <div
                className="mx-auto mt-5"
                style={{
                  width: 80,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, #c9a45a, transparent)",
                  opacity: 0.6,
                }}
              />
            </motion.div>

            {isLoading ? (
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                data-ocid="inventory.loading_state"
              >
                {["s1", "s2", "s3", "s4", "s5", "s6"].map((sk) => (
                  <div key={sk} className="car-card animate-pulse">
                    <div
                      className="bg-white/5"
                      style={{ aspectRatio: "16/10" }}
                    />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-white/5 rounded w-2/3" />
                      <div className="h-3 bg-white/5 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(cars || []).map((car, i) => (
                  <motion.div
                    key={car.id.toString()}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                  >
                    <CarCard car={car} index={i} />
                  </motion.div>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Link to="/inventory" data-ocid="featured.primary_button">
                <button
                  type="button"
                  className="gold-btn"
                  style={{ padding: "15px 44px" }}
                >
                  VIEW FULL INVENTORY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Story Strip ── */}
      <section className="py-24 bg-[#0B0F12]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-eyebrow mb-5">OUR STORY</p>
              <h2 className="section-title text-3xl md:text-4xl mb-6">
                ELEVATING THE STANDARD
              </h2>
              <p
                className="leading-relaxed mb-7"
                style={{ color: "#8a949c", fontSize: "15px", lineHeight: 1.8 }}
              >
                For over 5 years, VK Cars &amp; Co has been Mohali's most
                trusted destination for premium pre-owned vehicles. We believe
                luxury shouldn't come with doubt — every car we sell is
                inspected, documented, and backed by our promise of quality.
              </p>
              <div
                style={{
                  width: 48,
                  height: 1,
                  background: "linear-gradient(90deg, #c9a45a, transparent)",
                  marginBottom: 16,
                }}
              />
              <p
                className="italic text-lg"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#c9a45a",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Driven by Trust. Powered by Quality.&rdquo;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { n: "1000+", l: "Happy Customers" },
                { n: "5+", l: "Years of Trust" },
                { n: "500+", l: "Cars Sold" },
                { n: "100%", l: "Satisfaction Rate" },
              ].map((s) => (
                <div key={s.l} className="glass-panel stat-block">
                  <div className="stat-number">{s.n}</div>
                  <div className="stat-label">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
