'use client';

import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

interface DatePickerProps {
  date: Date;
  onChange: (date: Date) => void;
}

export const DatePicker = ({ date, onChange }: DatePickerProps) => (
  <ReactDatePicker
    dateFormat="MM/yyyy"
    inline
    onChange={onChange}
    selected={date}
    showMonthYearPicker
  />
);
