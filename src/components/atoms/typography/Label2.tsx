import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Label2 = ({ text, styles }: TypographyProps) => {
  return (
    <p className={clsx("text-label2 leading-label2", styles?.color ?? "text-service-black", styles?.weight ?? "font-normal")}>{text}</p>
  );
};

export default Label2;
