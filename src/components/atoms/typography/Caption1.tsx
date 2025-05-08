import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Caption1 = ({ text, styles }: TypographyProps) => {
  return <p className={clsx("text-caption1 leading-caption1 font-caption1", styles?.textColor ?? "text-service-black")}>{text}</p>;
};

export default Caption1;
