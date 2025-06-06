import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Title1 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-title1-sm leading-title1-sm",
        "md:text-title1-md md:leading-title1-md",
        "lg:text-title1-lg lg:leading-title1-lg",
        styles?.color ?? "text-service-black",
        styles?.weight ?? "font-bold",
      )}
    >
      {text}
    </p>
  );
};

export default Title1;
