import { useTranslation } from "react-i18next";
import "./App.css";
import { useStoreVehicles } from "./store/vehiclesStore/selectors";
import { useFetchVehicleData } from "./services/vehicles/useFetchVehiclesData";
import { Header } from "./components/header/header";
import { SquareModelComponent } from "./components/squareModel/squareModel";
import { useEffect } from "react";

function App() {
  const { t } = useTranslation();
  const { saveVehiclesData, storeVehicles } = useStoreVehicles();

  useEffect(() => {
    const fetchData = async () => {
      const res = await useFetchVehicleData();
      if (res) {
        saveVehiclesData(res);
      }
    };

    fetchData();
  }, []);

  // saveVehiclesData({ teste: "ola" });

  return (
    <>
      <Header />
      <SquareModelComponent
        data={storeVehicles.results ? storeVehicles.results : [1]}
      />
    </>
  );
}

export default App;
