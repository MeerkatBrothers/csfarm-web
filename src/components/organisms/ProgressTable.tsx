'use client';

import { useMemo } from 'react';

import { getAllDatesOfYear } from '@/shared/utils/date';
import { formatDateToYMD } from '@/shared/utils/formatter/date';

import type { Progress } from '@/features/progress/models/progress';

import ProgressCell from '@/components/atoms/ProgressCell';

interface ProgressTableProps {
  progresses: Record<string, Progress>;
  year?: number;
}

const ProgressTable = ({ progresses, year = 2025 }: ProgressTableProps) => {
  const dateRow = useMemo(() => {
    const datesOfYear = getAllDatesOfYear(year);
    const colCount = Math.ceil(datesOfYear.length / 7);

    return Array.from({ length: 7 }, (_, row) =>
      Array.from({ length: colCount }, (_, col) => datesOfYear[col * 7 + row]),
    );
  }, [year]);

  return (
    <table className="min-w-max border-separate border-spacing-1">
      <tbody>
        {dateRow.map((row, rowIdx) => (
          <tr key={`progress-row-${rowIdx}`}>
            {row.map((date, colIdx) => {
              const progress = date ? progresses[formatDateToYMD(date)] : undefined;

              return (
                date && (
                  <ProgressCell key={`progress-col-${colIdx}`} date={date} progress={progress} />
                )
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProgressTable;
