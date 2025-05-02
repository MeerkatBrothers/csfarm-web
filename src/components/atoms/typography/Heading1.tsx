import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Heading1 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-heading1-sm leading-heading1-sm font-heading1",
        "md:text-heading1-md md:leading-heading1-md",
        "lg:text-heading1-lg lg:leading-heading1-lg",
        styles?.textColor ?? "text-service-black"
      )}
    >
      {text}
    </p>
  );
};

export default Heading1;
