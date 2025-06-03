import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Caption2 = ({ text, styles }: TypographyProps) => {
  return (
    <p className={clsx("text-caption2 leading-caption2", styles?.color ?? "text-service-black", styles?.weight ?? "font-normal")}>{text}</p>
  );
};

export default Caption2;
