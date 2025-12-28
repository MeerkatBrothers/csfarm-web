'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

import { ICON_SIZE } from '@/shared/constants/ui';
import { cn } from '@/shared/utils/cn';

import Body from '@/components/atoms/typography/Body';

interface SubInsightCardProps {
  subject: string;
  description: string;
}

const SubInsightCard = ({ subject, description }: SubInsightCardProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = (): void => setIsDescriptionOpen(!isDescriptionOpen);

  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-lg bg-gray-100 px-6 py-6',
        'md:px-7',
        'lg:px-8',
      )}
    >
      <button className="flex items-center justify-between gap-4" onClick={toggleDescription}>
        <div className="min-w-0 flex-1 text-start">
          <Body text={subject} scale={1} styles={{ weight: 'font-bold' }} />
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
            <div className="mt-4">
              <Body text={description} scale={1} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubInsightCard;
