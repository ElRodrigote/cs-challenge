import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { BASE_URL, ENDPOINTS } from './constants';
import { HolidayRowData } from '@/components';
import { NameData } from '@/types';

interface useHolidayListArgs {
  holidayListData: { date: Date; countryIsoCode?: string };
}

interface HolidayListData {
  holidayList: Holiday[] | null;
  holidayError: Error | unknown;
}

interface FormattedHoliday {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
}

export interface Holiday {
  id: string;
  startDate: string;
  endDate: string;
  type: 'Public';
  name: NameData[];
  nationwide: true;
}

export const useHolidayList = ({
  holidayListData: { date, countryIsoCode },
}: useHolidayListArgs) => {
  const [holidayListData, setHolidayListData] = useState<HolidayListData>({
    holidayList: null,
    holidayError: null,
  });
  const [holidayTableData, setHolidayTableData] = useState<HolidayRowData[]>(
    []
  );

  const selectedYear = dayjs(date).get('year');

  useEffect(() => {
    const validFrom = dayjs(date).startOf('year').format('YYYY-MM-DD');
    const validTo = dayjs(validFrom).endOf('year').format('YYYY-MM-DD');

    const fetchCountryHolidayList = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/${ENDPOINTS.holidays}?countryIsoCode=${countryIsoCode}&validFrom=${validFrom}&validTo=${validTo}`
        );

        if (!response.ok)
          throw new Error(
            'Failed to fetch holiday list for the selected country'
          );

        const countryHolidayList = await response.json();

        const formattedHolidays = countryHolidayList.map((holiday: Holiday) => {
          return {
            id: holiday.id,
            title:
              holiday.name.find((name) => name.language === 'EN')?.text ??
              holiday.name[0].text,
            startDate: holiday.startDate,
            endDate: holiday.endDate,
          };
        });
        const holidayTableFormattedData = formattedHolidays.map(
          (holiday: FormattedHoliday) => {
            return {
              id: holiday.id,
              date: dayjs(holiday.startDate).format('YYYY-MM-DD'),
              description: holiday.title,
            };
          }
        );
        setHolidayListData({
          holidayList: formattedHolidays,
          holidayError: null,
        });
        setHolidayTableData(holidayTableFormattedData);
      } catch (countryError) {
        setHolidayListData({ holidayList: [], holidayError: null });
      }
    };

    fetchCountryHolidayList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryIsoCode, selectedYear]);

  return { holidayListData, holidayTableData };
};
