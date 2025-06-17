"use client";

import { useMemo } from "react";

import { getAllDatesOfYear } from "@/lib/utils/date";
import { formatDateToYMD } from "@/lib/utils/formatter/date";

import { Progress } from "@/domains/progress/models/fragments/progress";

import ProgressCell from "@/components/atoms/ProgressCell";

interface ProgressTableProps {
  progresses: Map<string, Progress>;
  year?: number;
}

const ProgressTable = ({ progresses, year = 2025 }: ProgressTableProps) => {
  const dateRow: (Date | undefined)[][] = useMemo(() => {
    const datesOfYear: Date[] = getAllDatesOfYear(year);
    const colCount: number = Math.ceil(datesOfYear.length / 7);

    return Array.from({ length: 7 }, (_, row) => Array.from({ length: colCount }, (_, col) => datesOfYear[col * 7 + row]));
  }, [year]);

  return (
    <table className="min-w-max border-separate border-spacing-1">
      <tbody>
        {dateRow.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((date, colIdx) => {
              const progress: Progress | undefined = date ? progresses.get(formatDateToYMD(date)) : undefined;

              return date && <ProgressCell key={colIdx} date={date} progress={progress} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProgressTable;
