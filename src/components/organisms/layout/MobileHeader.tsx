"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { ICON_SIZE } from "@/lib/constants/ui";

import OverlayNav from "@/components/organisms/layout/OverlayNav";

const MobileHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <>
      <FiMenu size={ICON_SIZE} onClick={() => setIsNavOpen(true)} />

      {isNavOpen && <OverlayNav onClose={setIsNavOpen} />}
    </>
  );
};

export default MobileHeader;
