"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { SVG_SIZE } from "@/lib/constants/ui";

import OverlayNav from "@/components/organisms/layout/OverlayNav";

const MobileHeaderActionGroup = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <>
      <FiMenu size={SVG_SIZE} onClick={() => setIsNavOpen(true)} />

      {isNavOpen && <OverlayNav onClose={setIsNavOpen} />}
    </>
  );
};

export default MobileHeaderActionGroup;
