import type { DataFromAPI } from "./types";
import { useZustandVehiclesStore } from "./vehicles.store";

export const useStoreVehicles = () => {
  const store = useZustandVehiclesStore();

  const storeData: DataFromAPI = {
    ...store,
  };

  return {
    storeVehicles: storeData,
    saveVehiclesData: (data: DataFromAPI) => {
      store.saveVehiclesData(data);
    },
  };
};
