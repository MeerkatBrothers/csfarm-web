'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

import { ICON_SIZE } from '@/shared/constants/ui';

import type { SubInsight } from '@/features/insight/models/sub-insight';

import Body from '@/components/atoms/typography/Body';

interface SubInsightSectionProps {
  subInsight: SubInsight;
}

const SubInsightSection = ({ subInsight }: SubInsightSectionProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = (): void => setIsDescriptionOpen(!isDescriptionOpen);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-100 px-4 py-5">
      <button
        className="flex w-full items-center justify-between gap-4"
        onClick={toggleDescription}
      >
        <div className="flex-1 text-start">
          <Body text={subInsight.subject} scale={1} styles={{ weight: 'font-bold' }} />
        </div>

        {isDescriptionOpen ? <FiChevronUp size={ICON_SIZE} /> : <FiChevronDown size={ICON_SIZE} />}
      </button>

      <AnimatePresence>
        {isDescriptionOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          >
            <div className="mt-2">
              <Body text={subInsight.description} scale={1} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubInsightSection;
