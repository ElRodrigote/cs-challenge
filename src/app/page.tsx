'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import {
  Calendar,
  DatePicker,
  HolidaysTable,
  SelectCountry,
  UserCountry,
} from '@/components';
import { useCountryList, useHolidayList, useUserGelocation } from '@/hooks';
import { Country } from '@/types';

export default function Home() {
  const [isUserCountrySupported, setIsUserCountrySupported] =
    useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const { countryList, countryListError } = useCountryList();
  const { userCountry, userCountryError } = useUserGelocation();
  const {
    holidayListData: { holidayList, holidayError },
    holidayTableData,
  } = useHolidayList({
    holidayListData: {
      date: selectedDate,
      countryIsoCode: selectedCountry?.isoCode,
    },
  });

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIsoCode = event.target.value;
    const selectedCountry = countryList.find(
      (country: Country) => country.isoCode === selectedIsoCode
    );

    setSelectedCountry(selectedCountry);
  };

  useEffect(() => {
    if (countryList.length) {
      if (userCountry) {
        const userDefaultCountry = countryList.find(
          (country: Country) => country.isoCode === userCountry.isoCode
        );

        userDefaultCountry
          ? setSelectedCountry(userDefaultCountry)
          : setSelectedCountry(countryList[0]);
        setIsUserCountrySupported(Boolean(userDefaultCountry));
      } else {
        setSelectedCountry(countryList[0]);
        setIsUserCountrySupported(false);
      }
    }
  }, [countryList, userCountry]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-6 p-4">
      <div className="flex items-center space-x-4">
        {countryList.length ? (
          <SelectCountry
            countries={countryList}
            countryListError={countryListError}
            value={selectedCountry?.isoCode ?? ''}
            onChange={handleCountryChange}
          />
        ) : (
          <p data-testid="country-loading">
            {"We're loading the available country list"}
          </p>
        )}
        {userCountry && (
          <UserCountry
            isSupportedCountry={isUserCountrySupported}
            userCountryError={userCountryError}
            userCountryName={userCountry.name}
          />
        )}
      </div>

      {!holidayList ? (
        <p data-testid="no-holidays">There are no Holidays to display</p>
      ) : (
        <div className="flex items-center justify-center space-x-4 w-full">
          <div className="flex flex-col items-end w-1/5 h-[500px]">
            <DatePicker date={selectedDate} onChange={setSelectedDate} />
            <HolidaysTable
              holidayData={holidayTableData}
              holidayError={holidayError}
            />
          </div>

          <Calendar
            date={selectedDate}
            holidayError={holidayError}
            holidayList={holidayList}
            onNavigate={setSelectedDate}
          />
        </div>
      )}
    </main>
  );
}
