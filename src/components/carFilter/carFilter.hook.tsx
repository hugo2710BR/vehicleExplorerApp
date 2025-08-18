import { useStoreVehicles } from "../../store/vehiclesStore/selectors";
import type { FilterData } from "./carFilter";

export const CarFilterScreenHelper = (props: FilterData) => {
  const { cars } = props;
  const { storeVehicles, saveVehiclesData } = useStoreVehicles();
  const marcas = cars.map((car) => {
    return car.make;
  });
  const modelos = cars.map((car) => {
    return car.model;
  });

  const handleCarFilterModel = (value: string) => {
    const filteredData = storeVehicles.results.filter((car) => {
      return car.model === value;
    });
    saveVehiclesData({
      total_count: storeVehicles.total_count,
      results: filteredData,
    });
  };
  const handleCarFilterMake = (value: string) => {
    const filteredData = storeVehicles.results.filter((car) => {
      return car.make === value;
    });
    saveVehiclesData({
      total_count: storeVehicles.total_count,
      results: filteredData,
    });
  };

  return {
    marcas,
    modelos,
    onChangeModel: handleCarFilterModel,
    onChangeMake: handleCarFilterMake,
  };
};
