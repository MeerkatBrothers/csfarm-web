"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence, easeOut } from "framer-motion";

import { ICON_SIZE } from "@/lib/constants/ui";

import { SubInsight } from "@/domains/insight/models/fragments/subInsight";

import Body1 from "@/components/atoms/typography/Body1";

interface SubInsightSectionProps {
  subInsight: SubInsight;
}

const SubInsightSection = ({ subInsight }: SubInsightSectionProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  const toggleDescription = (): void => setIsDescriptionOpen(!isDescriptionOpen);

  return (
    <div className="flex flex-col px-4 py-5 rounded-lg overflow-hidden bg-gray-100">
      <button className="flex items-center justify-between w-full gap-4" onClick={toggleDescription}>
        <div className="flex-1 text-start">
          <Body1 text={subInsight.subject} styles={{ weight: "font-bold" }} />
        </div>

        {isDescriptionOpen ? <FiChevronUp size={ICON_SIZE} /> : <FiChevronDown size={ICON_SIZE} />}
      </button>

      <AnimatePresence>
        {isDescriptionOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            <div className="mt-2">
              <Body1 text={subInsight.description} reading />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubInsightSection;
