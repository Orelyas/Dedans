import { Layout } from "@/components";
import { DayPage, Error404Page, HomePage, SettingsPage } from "@/pages";
import { createBrowserRouter } from "react-router";

export const dayPagePath = "/day";
export const homePagePath = "/";
export const settingsPagePath = "/settings";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      { path: `${dayPagePath}/:year/:month/:day`, element: <DayPage /> },
      { path: homePagePath, element: <HomePage /> },
      { path: settingsPagePath, element: <SettingsPage /> },
    ],
  },
]);
