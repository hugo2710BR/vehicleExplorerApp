import { useZustandVehiclesStore } from "./vehicles.store";

export const useStoreVehicles = () => {
  const store = useZustandVehiclesStore();

  const storeData: any = {
    ...store,
  };

  return {
    storeVehicles: storeData,
    saveVehiclesData: (data: any) => {
      store.saveVehiclesData(data);
    },
  };
};
