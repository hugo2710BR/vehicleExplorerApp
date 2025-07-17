import { useTranslation } from "react-i18next";
import "./App.css";
import { useStoreVehicles } from "./store/vehiclesStore/selectors";
import { useFetchVehicleData } from "./services/vehicles/useFetchvehiclesData";

function App() {
  const { t } = useTranslation();
  const { saveVehiclesData, storeVehicles } = useStoreVehicles();

  console.log("StoreData", storeVehicles.vehicles);

  const handleButton = async () => {
    const res = await useFetchVehicleData();
    console.log(res);
    // saveVehiclesData(res);
  };

  // saveVehiclesData({ teste: "ola" });

  return (
    <>
      <div>{t("variableNumber", { count: 1 })}</div>
      <button onClick={handleButton}>Clica</button>
    </>
  );
}

export default App;
