import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

/** @deprecated */
const H3 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-h3-sm leading-h3-sm font-semibold",
        "md:text-h3-md md:leading-h3-md",
        "lg:text-h3-lg lg:leading-h3-lg",
        styles?.textColor ?? "text-service-black"
      )}
    >
      {text}
    </p>
  );
};

export default H3;
