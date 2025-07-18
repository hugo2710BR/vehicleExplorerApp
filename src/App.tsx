import { useTranslation } from "react-i18next";
import "./App.css";
import { useStoreVehicles } from "./store/vehiclesStore/selectors";
import { useFetchVehicleData } from "./services/vehicles/useFetchvehiclesData";
import { MainPageScreen } from "./screens/mainPage/mainPageScreen";

function App() {
  const { t } = useTranslation();
  const { saveVehiclesData, storeVehicles } = useStoreVehicles();

  const handleButton = async () => {
    const res = await useFetchVehicleData();
    if(res) {
      saveVehiclesData(res)
    }
  };

  if(storeVehicles.vehicles.results) {
    console.log(storeVehicles.vehicles.results)
  }

  return (
    <>
      {/* <div>{t("variableNumber", { count: 1 })}</div>
      <button onClick={handleButton}>Clica</button> */}
      <MainPageScreen />
    </>
  );
}

export default App;
