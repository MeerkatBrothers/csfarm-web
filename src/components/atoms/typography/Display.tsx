import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Display = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-display-sm leading-display-sm font-bold",
        "md:text-display-md md:leading-display-md",
        "lg:text-display-lg lg:leading-display-lg",
        styles?.textColor ?? "text-service-black"
      )}
    >
      {text}
    </p>
  );
};

export default Display;
