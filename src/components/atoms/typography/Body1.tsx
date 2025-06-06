import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

interface Body1Props extends TypographyProps {
  reading?: boolean;
}

const Body1 = ({ text, reading, styles }: Body1Props) => {
  return (
    <p
      className={clsx(
        "text-body1",
        reading ? "leading-body1-reading" : "leading-body1",
        styles?.color ?? "text-service-black",
        styles?.weight ?? "font-normal",
      )}
    >
      {text}
    </p>
  );
};

export default Body1;
