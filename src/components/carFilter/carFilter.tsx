import type { ResultsType } from "../../store/vehiclesStore/types";
import { Typography } from "../typography/typography";
import { CarFilterScreenHelper } from "./carFilter.hook";

export interface FilterData {
  cars: ResultsType[];
}

export const CarFilter = (props: FilterData) => {
  const { marcas, modelos, onChangeModel, onChangeMake } =
    CarFilterScreenHelper(props);

  return (
    <div
      style={{
        border: "1px solid #cbc8c8",
        borderRadius: "16px",
        width: "100%",
        padding: "20px",
      }}
    >
      <Typography
        text="Filtros"
        icon="https://cdn-icons-png.flaticon.com/512/2676/2676824.png"
        mainContainerProps={{
          fontSize: "15px",
          color: "#1e1d1dff",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginRight: "15px",
        }}
      >
        <div style={{}}>
          <Typography
            text="Marca"
            mainContainerProps={{
              margin: "10px 0 0 10px",
              fontSize: "15px",
              color: "#1e1d1dff",
            }}
          />
          <select
            onChange={(e) => onChangeMake(e.target.value)}
            style={{ border: "1px solid #cbc8c8", borderRadius: "16px" }}
          >
            {marcas.map((marca, idx) => (
              <option key={idx} value={marca}>
                {marca}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div>
            <Typography
              text="Modelo"
              mainContainerProps={{
                margin: "10px 0 0 10px",
                fontSize: "15px",
                color: "#1e1d1dff",
              }}
            />
            <select
              onChange={(e) => onChangeModel(e.target.value)}
              style={{ border: "1px solid #cbc8c8", borderRadius: "16px" }}
            >
              {modelos.map((modelo, idx) => (
                <option key={idx} value={modelo}>
                  {modelo}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
