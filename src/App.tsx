import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return <div>{t("variableNumber", { count: 1 })}</div>;
}

export default App;
