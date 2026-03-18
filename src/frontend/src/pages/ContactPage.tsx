import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0F12]">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-[#111820] to-[#0B0F12]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow mb-3">GET IN TOUCH</p>
            <h1 className="section-title text-4xl md:text-5xl mb-4">
              CONTACT US
            </h1>
            <p className="muted-text max-w-lg mx-auto">
              Ready to find your dream car? Our team is here to help you every
              step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+91 98765 43210",
                    href: "tel:+919876543210",
                    cta: "Call Now",
                    ctaColor: "gold-btn",
                  },
                  {
                    icon: MessageCircle,
                    title: "WhatsApp",
                    value: "+91 98765 43210",
                    href: "https://wa.me/919876543210",
                    cta: "Message Us",
                    ctaColor: "outline-btn border-green-500/50 text-green-400",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    value: "info@vkcars.in",
                    href: "mailto:info@vkcars.in",
                    cta: null,
                    ctaColor: "",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    value:
                      "VK Cars & Co, Phase 7, Industrial Area, Mohali, Punjab 160055",
                    href: null,
                    cta: null,
                    ctaColor: "",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    value:
                      "Mon – Sat: 10:00 AM – 7:00 PM | Sun: 11:00 AM – 5:00 PM",
                    href: null,
                    cta: null,
                    ctaColor: "",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="glass-panel p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon size={18} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noreferrer"
                          className="text-white hover:text-gold transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{item.value}</p>
                      )}
                    </div>
                    {item.cta && (
                      <a
                        href={item.href || "#"}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          type="button"
                          className={`${item.ctaColor} text-xs py-2 px-4`}
                        >
                          {item.cta}
                        </button>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex gap-4">
                <a
                  href="tel:+919876543210"
                  className="flex-1"
                  data-ocid="contact.primary_button"
                >
                  <button
                    type="button"
                    className="gold-btn w-full py-4 flex items-center justify-center gap-2"
                  >
                    <Phone size={16} /> CALL NOW
                  </button>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                  data-ocid="contact.secondary_button"
                >
                  <button
                    type="button"
                    className="w-full py-4 rounded-full border border-green-500/50 text-green-400 text-xs font-semibold uppercase tracking-widest hover:bg-green-500/10 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} /> WHATSAPP
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="glass-panel overflow-hidden rounded-2xl h-full min-h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.717!3d30.709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ef96b%3A0xa5ff38!2sMohali%2C+Punjab!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "400px",
                    filter: "invert(90%) hue-rotate(180deg)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VK Cars & Co Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
