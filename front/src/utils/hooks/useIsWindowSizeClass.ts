import {
  extraSmallToSmallWindowBreakpoint,
  extraSmallWindowSizeClass,
  smallToMediumWindowBreakpoint,
  smallWindowSizeClass,
} from "@/utils/breakpoints";
import { useEffect, useState } from "react";

const buildIsWindowSizeClass = (sizeClassArray: string[]) => {
  const windowWidth = window.innerWidth;

  if (windowWidth < extraSmallToSmallWindowBreakpoint) {
    return sizeClassArray.includes(extraSmallWindowSizeClass);
  } else if (
    windowWidth >= extraSmallToSmallWindowBreakpoint &&
    windowWidth < smallToMediumWindowBreakpoint
  ) {
    return sizeClassArray.includes(smallWindowSizeClass);
  } else {
    return false;
  }
};

export const useIsWindowSizeClass = (sizeClassArray: string[]) => {
  const [isWindowSizeClass, setIsWindowSizeClass] = useState(
    buildIsWindowSizeClass(sizeClassArray)
  );

  useEffect(() => {
    const onResize = () => {
      setIsWindowSizeClass(buildIsWindowSizeClass(sizeClassArray));
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [sizeClassArray]);

  return isWindowSizeClass;
};
