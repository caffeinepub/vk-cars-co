import { useMutation, useQuery } from "@tanstack/react-query";
import type { Car } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllCars() {
  const { actor, isFetching } = useActor();
  return useQuery<Car[]>({
    queryKey: ["cars"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCars();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetCarById(id: bigint | null) {
  const { actor, isFetching } = useActor();
  return useQuery<Car>({
    queryKey: ["car", id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) throw new Error("No actor or id");
      return actor.getCarById(id);
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}

export function useBookTestDrive() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      carId,
      preferredDate,
    }: {
      name: string;
      phone: string;
      carId: bigint;
      preferredDate: string;
    }) => {
      if (!actor) throw new Error("No actor");
      return actor.bookTestDrive(name, phone, carId, preferredDate);
    },
  });
}
