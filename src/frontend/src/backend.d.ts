import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    carId: bigint;
    name: string;
    preferredDate: string;
    bookingTime: Time;
    phone: string;
}
export type Time = bigint;
export interface Car {
    id: bigint;
    model: string;
    mileage: bigint;
    color: string;
    year: bigint;
    description: string;
    transmission: string;
    fuelType: string;
    brand: string;
    price: bigint;
}
export interface backendInterface {
    bookTestDrive(name: string, phone: string, carId: bigint, preferredDate: string): Promise<bigint>;
    getAllBookings(): Promise<Array<Booking>>;
    getAllCars(): Promise<Array<Car>>;
    getCarById(id: bigint): Promise<Car>;
}
