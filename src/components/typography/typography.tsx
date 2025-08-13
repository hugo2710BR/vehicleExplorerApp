import type { CSSProperties } from "react";

export interface TypographyProps {
  text: string;
  mainContainerProps?: CSSProperties;
  containerProps?: CSSProperties;
}

export const Typography = (props: TypographyProps) => {
  const { text, containerProps, mainContainerProps } = props;

  return (
    <div style={{ ...mainContainerProps }}>
      {text ?? <div style={{ color: "red", ...containerProps }}>{text}</div>}
    </div>
  );
};
