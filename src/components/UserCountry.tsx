'use client';

interface UserCountryProps {
  isSupportedCountry: boolean;
  userCountryError?: Error | unknown;
  userCountryName: string;
}

export const UserCountry = ({
  isSupportedCountry,
  userCountryError,
  userCountryName,
}: UserCountryProps) =>
  userCountryError ? (
    <p className="text-red-700" data-testid="country-error">
      {
        "We're unable to detect your country right now. Please, try again later."
      }
    </p>
  ) : (
    <div>
      <p>{`You're located in ${userCountryName}`}</p>
      {!isSupportedCountry && (
        <p>{"Sorry, we currently don't support your country holidays data."}</p>
      )}
    </div>
  );
