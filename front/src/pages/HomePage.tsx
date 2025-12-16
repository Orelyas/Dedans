import { dayPagePath } from "@/utils/router";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const todayPath = buildTodayPath();

    navigate(todayPath, { replace: true });
  });

  const buildTodayPath = () => {
    const now = new Date();

    if (now.getHours() < 4) {
      now.setDate(now.getDate() - 1);
    }

    const year = now.getFullYear();
    const month = buildTwoDigitStringFromNumber(now.getMonth() + 1);
    const day = buildTwoDigitStringFromNumber(now.getDate());

    return `${dayPagePath}/${year}/${month}/${day}`;
  };

  const buildTwoDigitStringFromNumber = (n: number) => {
    return `${n}`.padStart(2, "0");
  };

  return <Fragment />;
};
