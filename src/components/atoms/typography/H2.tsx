import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

/** @deprecated */
const H2 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-h2-sm leading-h2-sm font-bold",
        "md:text-h2-md md:leading-h2-md",
        "lg:text-h2-lg lg:leading-h2-lg",
        styles?.textColor ?? "text-service-black"
      )}
    >
      {text}
    </p>
  );
};

export default H2;
