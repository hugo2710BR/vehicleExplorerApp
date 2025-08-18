import type { CSSProperties, ReactNode } from "react";

export interface TypographyProps {
  text: string;
  mainContainerProps?: CSSProperties;
  icon?: ReactNode | string;
}

export const Typography = (props: TypographyProps) => {
  const { text, mainContainerProps, icon } = props;

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return <img src={icon} alt="icon" style={{ width: 16, height: 16 }} />;
    }
    return icon;
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        ...mainContainerProps,
      }}
    >
      {renderIcon()}
      <span>{text}</span>
    </div>
  );
};
