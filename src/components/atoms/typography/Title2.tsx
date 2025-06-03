import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Title2 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-title2-sm leading-title2-sm",
        "md:text-title2-md md:leading-title2-md",
        "lg:text-title2-lg lg:leading-title2-lg",
        styles?.color ?? "text-service-black",
        styles?.weight ?? "font-bold",
      )}
    >
      {text}
    </p>
  );
};

export default Title2;
