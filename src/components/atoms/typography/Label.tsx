import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Label = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-label leading-label",
        styles?.textColor ?? "text-service-black"
      )}
    >
      {text}
    </p>
  );
};

export default Label;
