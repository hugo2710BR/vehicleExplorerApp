import type { ResultsType } from "../../store/vehiclesStore/types";

export interface SquareModelProps {
  data: ResultsType[] | number[];
}

export const SquareModelComponent = (props: SquareModelProps) => {
  const { data } = props;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))",
        gap: "20px",
        padding: "42px",
      }}
    >
      {data.map((index) => (
        <div
          style={{
            width: "100%",
            height: "380px",
            aspectRatio: "1 / 1",
            border: "1px solid #cbc8c8",
            borderRadius: "16px",
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
            }}
          />
          <div style={{ fontSize: "13px", color: "black" }}></div>
        </div>
      ))}
    </div>
  );
};
