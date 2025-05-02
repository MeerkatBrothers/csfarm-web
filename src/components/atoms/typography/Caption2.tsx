import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

const Caption2 = ({ text, styles }: TypographyProps) => {
  return (
    <p
      className={clsx(
        "text-caption2 leading-caption2 font-caption2",
        styles?.textColor ?? "text-service-black"
      )}
    >
      {text}
    </p>
  );
};

export default Caption2;
