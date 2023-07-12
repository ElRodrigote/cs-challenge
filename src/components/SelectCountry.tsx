'use client';

import { ChangeEvent } from 'react';

import { Country, NameData } from '@/types';

interface SelectProps {
  countries: Country[];
  countryListError?: Error | unknown;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const DEFAULT_LANG = 'EN';
const SELECT_COUNTRY_ID = 'selectCountry';

export const SelectCountry = ({
  countries,
  countryListError,
  onChange,
  value,
}: SelectProps) =>
  countryListError ? (
    <p className="text-red-700" data-testid="country-error">
      {
        "We're unable to load the country list right now. Please, try again later."
      }
    </p>
  ) : (
    <div>
      <label htmlFor={SELECT_COUNTRY_ID}>Available Countries: </label>
      <select
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
        id={SELECT_COUNTRY_ID}
        data-testid="country-select"
      >
        {countries.map((country: Country) => {
          const countryName =
            country.name.find(
              (nameData: NameData) => nameData.language === DEFAULT_LANG
            )?.text ?? country.name[0].text;

          return (
            <option
              key={country.isoCode}
              value={country.isoCode}
              data-testid={`country-option-${country.isoCode}`}
            >
              {countryName}
            </option>
          );
        })}
      </select>
    </div>
  );
