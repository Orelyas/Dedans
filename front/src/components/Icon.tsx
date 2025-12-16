import { ColorThemeContext } from "@/utils/contexts";
import type { IconType } from "@/utils/icons";
import { useContext } from "react";

export const Icon = ({
  color,
  icon,
  isFilled,
}: {
  color?: string;
  icon: IconType;
  isFilled?: boolean;
}) => {
  const colorTheme = useContext(ColorThemeContext);

  const size = "24px";

  return (
    <svg
      display={"block"}
      fill={color || colorTheme.onSurfaceVariantColor}
      height={size}
      viewBox="0 -960 960 960"
      width={size}
    >
      <path d={isFilled ? icon.filledPath : icon.path} />
    </svg>
  );
};
