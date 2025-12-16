import { Overlay } from "@/components/Overlay";
import type { Dispatch, SetStateAction } from "react";
import { NavigationRail } from "./NavigationRail";

export const NavigationMenu = ({
  setIsOpen,
  toggleIsNavigationMenuOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleIsNavigationMenuOpen: () => void;
}) => {
  return (
    <Overlay setIsOpen={setIsOpen}>
      <NavigationRail
        isNavigationMenu
        toggleIsNavigationMenuOpen={toggleIsNavigationMenuOpen}
      />
    </Overlay>
  );
};
