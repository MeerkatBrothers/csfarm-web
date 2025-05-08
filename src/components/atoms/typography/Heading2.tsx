import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Heading2 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-heading2-sm leading-heading2-sm font-heading2",
        "md:text-heading2-md md:leading-heading2-md",
        "lg:text-heading2-lg lg:leading-heading2-lg",
        styles?.textColor ?? "text-service-black",
      )}
    >
      {text}
    </p>
  );
};

export default Heading2;
