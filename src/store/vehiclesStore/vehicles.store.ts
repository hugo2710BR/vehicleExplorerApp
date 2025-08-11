import { StoreHelper } from "../storeHelper";
import type { DataFromAPI } from "./types";

export const initialState: DataFromAPI = {
  total_count: 1,
  results: [{ make: "OPEL", model: "ASTRA" }],
};

interface StoreOutput extends DataFromAPI {
  saveVehiclesData: (data: DataFromAPI) => void;
}

export const useZustandVehiclesStore = StoreHelper.createStore<StoreOutput>(
  (set) => ({
    ...initialState,
    saveVehiclesData: (data) => {
      set(
        () => ({
          ...data,
        }),
        false,
        "saveVehiclesData"
      );
    },
  }),
  "_Store_Vehicles"
);
