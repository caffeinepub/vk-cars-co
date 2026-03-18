import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Order "mo:core/Order";

actor {
  type Car = {
    id : Nat;
    brand : Text;
    model : Text;
    year : Nat;
    price : Nat;
    mileage : Nat;
    fuelType : Text;
    transmission : Text;
    color : Text;
    description : Text;
  };

  module Car {
    public func compare(car1 : Car, car2 : Car) : Order.Order {
      Nat.compare(car1.id, car2.id);
    };
  };

  type Booking = {
    name : Text;
    phone : Text;
    carId : Nat;
    preferredDate : Text;
    bookingTime : Time.Time;
  };

  module Booking {
    public func compare(booking1 : Booking, booking2 : Booking) : Order.Order {
      Int.compare(booking1.bookingTime, booking2.bookingTime);
    };
  };

  let cars = Map.fromIter<Nat, Car>(
    [
      (
        1,
        {
          id = 1;
          brand = "BMW";
          model = "5 Series";
          year = 2022;
          price = 6000000;
          mileage = 15000;
          fuelType = "Petrol";
          transmission = "Automatic";
          color = "Black";
          description = "Luxury sedan with premium features";
        },
      ),
      (
        2,
        {
          id = 2;
          brand = "Audi";
          model = "A6";
          year = 2021;
          price = 5500000;
          mileage = 12000;
          fuelType = "Diesel";
          transmission = "Automatic";
          color = "White";
          description = "Elegant and comfortable drive";
        },
      ),
      (
        3,
        {
          id = 3;
          brand = "Mercedes-Benz";
          model = "E-Class";
          year = 2023;
          price = 7000000;
          mileage = 8000;
          fuelType = "Petrol";
          transmission = "Automatic";
          color = "Blue";
          description = "High-performance luxury sedan";
        },
      ),
      (
        4,
        {
          id = 4;
          brand = "BMW";
          model = "X5";
          year = 2022;
          price = 8000000;
          mileage = 10000;
          fuelType = "Diesel";
          transmission = "Automatic";
          color = "Silver";
          description = "Spacious and powerful SUV";
        },
      ),
      (
        5,
        {
          id = 5;
          brand = "Audi";
          model = "Q7";
          year = 2021;
          price = 7500000;
          mileage = 14000;
          fuelType = "Petrol";
          transmission = "Automatic";
          color = "Black";
          description = "Premium SUV with advanced features";
        },
      ),
    ].values(),
  );

  let bookings = Map.empty<Nat, Booking>();

  public query ({ caller }) func getAllCars() : async [Car] {
    cars.values().toArray().sort();
  };

  public query ({ caller }) func getCarById(id : Nat) : async Car {
    switch (cars.get(id)) {
      case (null) { Runtime.trap("Car not found") };
      case (?car) { car };
    };
  };

  public shared ({ caller }) func bookTestDrive(name : Text, phone : Text, carId : Nat, preferredDate : Text) : async Nat {
    switch (cars.get(carId)) {
      case (null) { Runtime.trap("Car not found") };
      case (?_) {
        let booking = {
          name;
          phone;
          carId;
          preferredDate;
          bookingTime = Time.now();
        };
        bookings.add(bookings.size(), booking);
        bookings.size() - 1;
      };
    };
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray().sort();
  };
};
