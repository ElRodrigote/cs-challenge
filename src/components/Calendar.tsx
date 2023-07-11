'use client';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar as BigCalendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';

import { Holiday } from '@/hooks/useCountryHolidays';

dayjs.extend(timezone);

interface CalendarProps {
  date: Date;
  holidayError?: Error | unknown;
  holidayList: Holiday[];
  onNavigate: (date: Date) => void;
}

const Event = ({ event }: { event?: any }) => <p>{event.title}</p>;

export const Calendar = ({
  date,
  holidayError,
  holidayList,
  onNavigate,
}: CalendarProps) =>
  holidayError ? (
    <p className="text-red-700">
      {
        "We're unable to load the holiday calendar right now. Please, try again later."
      }
    </p>
  ) : (
    <BigCalendar
      className="w-1/2 !h-[500px]"
      components={{ event: Event }}
      date={date}
      endAccessor="endDate"
      events={holidayList}
      localizer={dayjsLocalizer(dayjs)}
      onNavigate={onNavigate}
      startAccessor="startDate"
      showMultiDayTimes
      views={['month']}
    />
  );
