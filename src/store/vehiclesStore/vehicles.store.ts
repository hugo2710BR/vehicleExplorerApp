import { StoreHelper } from "../storeHelper";

export const initialState = {
  Model: "OPEL",
};

interface StoreOutput {
  saveVehiclesData: (data: any) => void;
}

export const useZustandVehiclesStore = StoreHelper.createStore<StoreOutput>(
  (set) => ({
    vehicles: initialState,
    saveVehiclesData: function (data: any) {
      set(
        (state: any) => ({
          ...state,
          vehicles: data,
        }),
        false,
        "saveMTravelData"
      );
    },
  }),
  "_Store_Vehicles"
);
