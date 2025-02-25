import { CSSProperties, FC, MouseEvent } from "react";

interface Props {
  name?: string;
  className?: string;
  size?: string | number;
  height?: string | number;
  width?: string | number;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<SVGElement>) => void;
  id?: string;
  color?: string;
  stroke?: string;
  fill?: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

const Icon: FC<Props> = ({
  name,
  size,
  height,
  className,
  width,
  style,
  onClick,
  id,
  color,
  stroke,
  fill,
  isActive,
  isDisabled,
}) => {
  const vSize = size ? `${size}px` : "20px";
  const vHeight = `${height}px`;
  const vWidth = `${width}px`;

  return (
    <svg
      className={[
        className,
        "c-icon",
        "transition-colors",
        "duration-200",
        isActive && "active",
        isDisabled ? "disabled" : "enabled",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...style,
        width: width ? vWidth : vSize,
        height: height ? vHeight : vSize,
        color: color || undefined,
      }}
      onClick={onClick}
      id={id}
    >
      <use xlinkHref={`#${name}`} id={id} stroke={stroke} fill={fill} />
    </svg>
  );
};

export default Icon;
