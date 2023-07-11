'use client';

export interface HolidayRowData {
  date: string;
  description: string;
  id: string;
}

interface TableProps {
  holidayData: HolidayRowData[];
  holidayError?: Error | unknown;
}

export const HolidaysTable = ({ holidayData, holidayError }: TableProps) =>
  holidayError ? (
    <p className="text-red-700">
      {
        "We're unable to load the holiday table right now. Please, try again later."
      }
    </p>
  ) : (
    <div className="h-[70%] w-full overflow-y-scroll" id="holidaysTable">
      <table className="h-full overflow-y-auto min-w-full divide-y bg-slate-50  divide-gray-200 rounded-md">
        <thead className="relative">
          <tr className="text-xs text-left font-semibold text-gray-500 uppercase tracking-wider backdrop-blur-sm sticky top-0">
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {holidayData.map((holiday) => (
            <tr key={holiday.id} className="overflow-x-scroll">
              <td className="px-6 py-4 w-14 whitespace-nowrap text-sm font-medium text-gray-900">
                {holiday.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {holiday.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
