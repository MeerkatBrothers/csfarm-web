import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Caption1 = ({ text, styles }: TypographyProps) => {
  return (
    <p className={clsx("text-caption1 leading-caption1", styles?.color ?? "text-service-black", styles?.weight ?? "font-normal")}>{text}</p>
  );
};

export default Caption1;
