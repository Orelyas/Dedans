export const extraSmallWindowSizeClass = "xs";
export const extraSmallToSmallWindowBreakpoint = 768;
export const smallWindowSizeClass = "s";
export const smallToMediumWindowBreakpoint = 1024;

export const mobileSizeClassArray = [
  extraSmallWindowSizeClass,
  smallWindowSizeClass,
];

export const mobileWindow = `@media (max-width: ${
  smallToMediumWindowBreakpoint - 1
}px)`;

export const desktopWindow = `@media (min-width: ${smallToMediumWindowBreakpoint}px)`;
