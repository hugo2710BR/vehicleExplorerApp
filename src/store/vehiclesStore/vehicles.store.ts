import { StoreHelper } from "../storeHelper";
import type { DataFromAPI } from "./types";

export const initialState: DataFromAPI = {
  total_count: 1,
  results: [{ make: "OPEL", model: "ASTRA", year: "2001" }],
};

interface StoreOutput extends DataFromAPI {
  saveVehiclesData: (data: DataFromAPI) => void;
}

export const useZustandVehiclesStore = StoreHelper.createStore<StoreOutput>(
  (set) => ({
    ...initialState,
    saveVehiclesData: (data: DataFromAPI) => {
      set(
        () => ({
          total_count: data.total_count,
          results: data.results.map((car) => ({
            make: car.make,
            model: car.model,
            year: car.year,
          })),
        }),
        false,
        "saveVehiclesData"
      );
    },
  }),
  "_Store_Vehicles"
);
