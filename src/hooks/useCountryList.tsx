import { useEffect, useState } from 'react';

import { BASE_URL, ENDPOINTS } from './constants';
import { Country } from '@/types';

interface CountryListData {
  countryList: Country[];
  countryListError: Error | unknown;
}

export const useCountryList = () => {
  const [countryListData, setCountryListData] = useState<CountryListData>({
    countryList: [],
    countryListError: null,
  });

  useEffect(() => {
    const fetchCountryList = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${ENDPOINTS.countries}`);

        if (!response.ok) throw new Error('Failed to fetch country list');

        const countryList = await response.json();
        setCountryListData({ countryList, countryListError: null });
      } catch (countryListError) {
        setCountryListData({ countryList: [], countryListError });
      }
    };

    fetchCountryList();
  }, []);

  return countryListData;
};
