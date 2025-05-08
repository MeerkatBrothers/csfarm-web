import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Title3 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-title3-sm leading-title3-sm font-title3",
        "md:text-title3-md md:leading-title3-md",
        "lg:text-title3-lg lg:leading-title3-lg",
        styles?.textColor ?? "text-service-black",
      )}
    >
      {text}
    </p>
  );
};

export default Title3;
