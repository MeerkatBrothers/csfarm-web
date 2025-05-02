import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

/** @deprecated */
const Caption = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-caption leading-caption font-normal",
        styles?.textColor ?? "text-service-black"
      )}
    >
      {text}
    </p>
  );
};

export default Caption;
