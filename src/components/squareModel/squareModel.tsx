import type { DataFromAPI, ResultsType } from "../../store/vehiclesStore/types";

export interface SquareModelProps {
  data: DataFromAPI;
}

export const SquareModelComponent = (props: SquareModelProps) => {
  const { data } = props;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))",
        gap: "20px",
        padding: "20px 42px 42px 42px",
      }}
    >
      {data.results.map((car) => (
        <div
          style={{
            width: "100%",
            height: "380px",
            aspectRatio: "1 / 1",
            border: "1px solid #cbc8c8",
            borderRadius: "16px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "204px",
              backgroundColor: "black",
              backgroundImage:
                "url(https://static.vecteezy.com/system/resources/previews/000/623/239/non_2x/auto-car-logo-template-vector-icon.jpg)",
              borderRadius: "16px 16px 0 0 ",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderBottom: "1px solid #cbc8c8",
              display: "block",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              color: "black",
              marginTop: "50px",
              marginLeft: "20px",
            }}
          >
            {car.make}
          </div>
          <div
            style={{
              fontSize: "15px",
              color: "#717182",
              marginTop: "5px",
              marginLeft: "20px",
            }}
          >
            {car.model}
          </div>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              position: "absolute",
              top: "10px",
              left: "10px",
              width: "15%",
              textAlign: "center",
              borderRadius: "10px",
              padding: "3px",
            }}
          >
            {car.year}
          </div>
        </div>
      ))}
    </div>
  );
};
