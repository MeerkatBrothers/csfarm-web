import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Title3 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-title3-sm leading-title3-sm",
        "md:text-title3-md md:leading-title3-md",
        "lg:text-title3-lg lg:leading-title3-lg",
        styles?.color ?? "text-service-black",
        styles?.weight ?? "font-bold",
      )}
    >
      {text}
    </p>
  );
};

export default Title3;
