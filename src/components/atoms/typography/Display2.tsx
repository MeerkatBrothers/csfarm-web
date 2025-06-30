import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Display2 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-display2-sm leading-display2-sm",
        "md:text-display2-md md:leading-display2-md",
        "lg:text-display2-lg lg:leading-display2-lg",
        styles?.color ?? "text-service-black",
        styles?.weight ?? "font-bold",
      )}
    >
      {text}
    </p>
  );
};

export default Display2;
