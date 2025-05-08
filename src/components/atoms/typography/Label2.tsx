import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Label2 = ({ text, styles }: TypographyProps) => {
  return <p className={clsx("text-label2 leading-label2 font-label2", styles?.textColor ?? "text-service-black")}>{text}</p>;
};

export default Label2;
