import { homeIcon, settingsIcon } from "@/utils/icons";
import { homePagePath, settingsPagePath } from "@/utils/router";
import type { TFunction } from "i18next";

export const navigationItemPadding = "6px";

export const buildNavigationMenuItemArray = (t: TFunction) => {
  return [
    { icon: homeIcon, label: t("today"), to: homePagePath },
    { icon: settingsIcon, label: t("settings"), to: settingsPagePath },
  ];
};
