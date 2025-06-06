import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Headline2 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-headline2-sm leading-headline2-sm",
        "md:text-headline2-md md:leading-headline2-md",
        "lg:text-headline2-lg lg:leading-headline2-lg",
        styles?.color ?? "text-service-black",
        styles?.weight ?? "font-bold",
      )}
    >
      {text}
    </p>
  );
};

export default Headline2;
