import { Link } from "@tanstack/react-router";
import { Fuel, Gauge, Settings } from "lucide-react";
import type { Car } from "../backend.d";
import { formatPrice, getCarImage } from "../lib/carImages";

interface CarCardProps {
  car: Car;
  index: number;
}

export function CarCard({ car, index }: CarCardProps) {
  const image = getCarImage(car.brand, car.model);

  return (
    <div className="car-card" data-ocid={`inventory.item.${index + 1}`}>
      {/* ── FIX 2: Image hero with name + price overlaid directly ── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/10" }}
      >
        <img
          src={image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Deep gradient — car info reads cleanly over photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(14,18,22,0.98) 0%, rgba(14,18,22,0.6) 45%, rgba(14,18,22,0.08) 100%)",
          }}
        />

        {/* Year badge — top left */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(201,164,90,0.15)",
              border: "1px solid rgba(201,164,90,0.35)",
              color: "#e0bc78",
              backdropFilter: "blur(8px)",
            }}
          >
            {car.year.toString()}
          </span>
        </div>

        {/* Fuel type badge — top right */}
        <div className="absolute top-3 right-3">
          <span
            className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(20,26,30,0.7)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#a8b0b6",
              backdropFilter: "blur(8px)",
            }}
          >
            {car.fuelType}
          </span>
        </div>

        {/* Car name + price overlaid on the photo — the premium way */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
          <p
            className="text-[10px] font-bold tracking-[0.22em] uppercase mb-0.5"
            style={{ color: "rgba(201,164,90,0.75)" }}
          >
            {car.brand}
          </p>
          <div className="flex items-end justify-between gap-2">
            <h3
              className="text-white font-semibold leading-tight"
              style={{
                fontSize: "16px",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {car.model}
            </h3>
            <p className="price-tag shrink-0" style={{ fontSize: "18px" }}>
              {formatPrice(car.price)}
            </p>
          </div>
        </div>
      </div>

      {/* ── Specs strip + actions ── */}
      <div className="p-4 pt-3">
        {/* Specs — 3 key stats, cleaner */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="spec-item">
            <Gauge size={12} className="text-gold mx-auto mb-1" />
            <span className="spec-label">Mileage</span>
            <span className="spec-value">
              {(Number(car.mileage) / 1000).toFixed(0)}k km
            </span>
          </div>
          <div className="spec-item">
            <Fuel size={12} className="text-gold mx-auto mb-1" />
            <span className="spec-label">Fuel</span>
            <span className="spec-value">{car.fuelType}</span>
          </div>
          <div className="spec-item">
            <Settings size={12} className="text-gold mx-auto mb-1" />
            <span className="spec-label">Gearbox</span>
            <span className="spec-value">{car.transmission.slice(0, 5)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            to="/inventory/$id"
            params={{ id: car.id.toString() }}
            className="flex-1"
            data-ocid={`inventory.edit_button.${index + 1}`}
          >
            <button
              type="button"
              className="outline-btn w-full py-2.5 text-[11px]"
            >
              VIEW DETAILS
            </button>
          </Link>
          <Link
            to="/book-test-drive"
            search={{ carId: car.id.toString() }}
            className="flex-1"
            data-ocid={`inventory.primary_button.${index + 1}`}
          >
            <button
              type="button"
              className="gold-btn w-full py-2.5 text-[11px]"
            >
              TEST DRIVE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
