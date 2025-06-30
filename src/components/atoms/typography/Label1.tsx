import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

interface Label1Props extends TypographyProps {
  reading?: boolean;
}

const Label1 = ({ text, reading, styles }: Label1Props) => {
  return (
    <p
      className={clsx(
        "text-label1",
        reading ? "leading-label1-reading" : "leading-label1",
        styles?.color ?? "text-service-black",
        styles?.weight ?? "font-bold",
      )}
    >
      {text}
    </p>
  );
};

export default Label1;
