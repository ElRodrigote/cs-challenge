import { useEffect, useState } from 'react';

interface UserCountry {
  name: string;
  isoCode: string;
}

interface UserCountryData {
  userCountry: UserCountry | null;
  userCountryError: Error | unknown;
}

export const useUserGelocation = () => {
  const [userCountryData, setUserCountryData] = useState<UserCountryData>({
    userCountry: null,
    userCountryError: null,
  });

  useEffect(() => {
    const fetchUserGeolocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json');

        if (!response.ok)
          throw new Error('Failed to fetch user geolocation data');

        const userGeolocationData = await response.json();

        setUserCountryData({
          userCountry: {
            name: userGeolocationData.country_name,
            isoCode: userGeolocationData.country_code,
          },
          userCountryError: null,
        });
      } catch (userCountryError) {
        setUserCountryData({ userCountry: null, userCountryError });
      }
    };

    fetchUserGeolocation();
  }, []);

  return userCountryData;
};
