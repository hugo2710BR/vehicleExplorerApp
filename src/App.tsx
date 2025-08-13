import { useTranslation } from "react-i18next";
import "./App.css";
import { useStoreVehicles } from "./store/vehiclesStore/selectors";
import { useFetchVehicleData } from "./services/vehicles/useFetchVehiclesData";
import { Header } from "./components/header/header";
import { SquareModelComponent } from "./components/squareModel/squareModel";
import { useEffect } from "react";
import { Typography } from "./components/typography/typography";

function App() {
  const { t } = useTranslation();
  const { saveVehiclesData, storeVehicles } = useStoreVehicles();
  const numberOfVehicles = storeVehicles.results.length;

  // console.log(storeVehicles);

  useEffect(() => {
    const fetchData = async () => {
      const res = await useFetchVehicleData();
      if (res) {
        // saveVehiclesData({
        //   results: res.results,
        //   total_count: res.total_count,
        // });
        saveVehiclesData(res);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Typography
        text={t("numberOfVehiclesText_other", {
          vehiclesNumber: numberOfVehicles,
        })}
        mainContainerProps={{ paddingLeft: "42px" }}
      />
      <SquareModelComponent data={storeVehicles} />
    </>
  );
}

export default App;
