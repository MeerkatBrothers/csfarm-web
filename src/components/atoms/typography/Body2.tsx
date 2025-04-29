import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Body2 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-body2 leading-body2 font-normal",
        styles?.textColor ?? "text-service-black"
      )}
    >
      {text}
    </p>
  );
};

export default Body2;
