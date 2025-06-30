import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Heading1 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-heading1-sm leading-heading1-sm",
        "md:text-heading1-md md:leading-heading1-md",
        "lg:text-heading1-lg lg:leading-heading1-lg",
        styles?.color ?? "text-service-black",
        styles?.weight ?? "font-bold",
      )}
    >
      {text}
    </p>
  );
};

export default Heading1;
