import clsx from "clsx";

import TypographyProps from "@/components/atoms/typography/props/typographyProps";

interface Body2Props extends TypographyProps {
  reading?: boolean;
}

const Body2 = ({ text, reading, styles }: Body2Props) => {
  return (
    <p
      className={clsx(
        "text-body2 font-body2",
        reading ? "leading-body2-reading" : "leading-body2",
        styles?.textColor ?? "text-service-black",
      )}
    >
      {text}
    </p>
  );
};

export default Body2;
