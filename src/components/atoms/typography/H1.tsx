import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const H1 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-h1-sm leading-h1-sm font-bold",
        "md:text-h1-md md:leading-h1-md",
        "lg:text-h1-lg lg:leading-h1-lg",
        styles?.textColor ?? "text-service-black"
      )}
    >
      {text}
    </p>
  );
};

export default H1;
