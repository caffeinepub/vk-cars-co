import { DollarSign, HeartHandshake, Shield, Users } from "lucide-react";
import { motion } from "motion/react";

const pillars = [
  {
    icon: Shield,
    title: "Verified Quality",
    desc: "Every vehicle undergoes a comprehensive 150-point inspection by certified technicians before being listed.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "What you see is what you pay. No hidden fees, no surprises. Complete ownership and service history provided.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Our seasoned automotive experts guide you to the right vehicle that fits your lifestyle and budget perfectly.",
  },
  {
    icon: HeartHandshake,
    title: "After-Sale Support",
    desc: "Our relationship doesn't end at the sale. We offer continued support, service referrals, and warranty assistance.",
  },
];

export function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0F12]">
      {/* Hero Banner */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/car-bmw-x5.dim_800x500.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F12]/95 via-[#0B0F12]/80 to-[#0B0F12]/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-eyebrow mb-4">OUR STORY</p>
            <h1 className="section-title text-5xl md:text-6xl mb-6">
              ABOUT
              <br />
              <span className="gold-text">VK CARS & CO.</span>
            </h1>
            <p
              className="text-gray-300 text-lg max-w-lg leading-relaxed italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;Driven by Trust. Powered by Quality.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-eyebrow mb-4">OUR JOURNEY</p>
              <h2 className="section-title text-3xl md:text-4xl mb-6">
                MOHALI'S MOST TRUSTED CAR DESTINATION
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  VK Cars & Co was founded with a single vision: to bring the
                  luxury car buying experience to Mohali with complete
                  transparency, trust, and unmatched quality. Starting from a
                  small showroom in Phase 7, we have grown into one of Punjab's
                  most respected premium pre-owned car dealerships.
                </p>
                <p>
                  Over 5 years, we have helped more than 1,000 families find
                  their dream vehicles — from first-time buyers to seasoned
                  enthusiasts looking for their next performance machine. Our
                  team of experts handpicks every vehicle, ensuring it meets our
                  stringent quality standards before it ever reaches our
                  showroom floor.
                </p>
                <p>
                  We believe buying a car should be an exciting, stress-free
                  experience. That's why we offer complete documentation,
                  transparent pricing, flexible financing options, and dedicated
                  after-sales support.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/generated/car-mercedes-eclass.dim_800x500.jpg"
                alt="VK Cars Showroom"
                className="w-full rounded-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0D1318]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "1000+", l: "Happy Customers" },
              { n: "5+", l: "Years of Trust" },
              { n: "500+", l: "Cars Sold" },
              { n: "100%", l: "Satisfaction Rate" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel stat-block"
              >
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="section-eyebrow mb-3">WHAT SETS US APART</p>
            <h2 className="section-title text-3xl md:text-4xl">
              THE VK CARS DIFFERENCE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-8 flex gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <p.icon size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
