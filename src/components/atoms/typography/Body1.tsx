import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

interface Body1Props extends TypographyProps {
  reading?: boolean;
}

const Body1 = ({ text, reading, styles }: Body1Props) => {
  return (
    <p
      className={clsx(
        "text-body1 font-body1",
        reading ? "leading-body1-reading" : "leading-body1",
        styles?.textColor ?? "text-service-black"
      )}
    >
      {text}
    </p>
  );
};

export default Body1;
