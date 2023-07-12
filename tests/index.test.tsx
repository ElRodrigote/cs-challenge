import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Home from '../src/app/page';
import { HolidaysTable, SelectCountry } from '../src/components';
import { MOCKED_COUNTRY, MOCKED_HOLIDAYS_TABLE } from './mocks';

describe('Public Holiday App', () => {
  it('renders a loading message', () => {
    render(<Home />);

    const countryLoader = screen.getByTestId('country-loading');

    expect(countryLoader).toBeInTheDocument();
  });

  describe('Select Country', () => {
    it('renders an error message when we failed to fetch the country list', () => {
      render(
        <SelectCountry
          countryListError={MOCKED_COUNTRY.ERROR}
          countries={MOCKED_COUNTRY.LIST}
          value={MOCKED_COUNTRY.VALUE}
          onChange={MOCKED_COUNTRY.ONCHANGE}
        />
      );

      const countryErrorText = screen.getByTestId('country-error');

      expect(countryErrorText).toBeInTheDocument();
    });

    it('renders an Available Country selector with its label', () => {
      render(
        <SelectCountry
          countries={MOCKED_COUNTRY.LIST}
          value={MOCKED_COUNTRY.VALUE}
          onChange={MOCKED_COUNTRY.ONCHANGE}
        />
      );

      const countrySelect = screen.getByTestId('country-select');

      expect(countrySelect).toBeInTheDocument();
    });

    it('should display the correct number of options', () => {
      render(
        <SelectCountry
          countries={MOCKED_COUNTRY.LIST}
          value={MOCKED_COUNTRY.VALUE}
          onChange={MOCKED_COUNTRY.ONCHANGE}
        />
      );

      const options = screen.getAllByRole('option');

      expect(options.length).toBe(MOCKED_COUNTRY.LIST.length);
    });

    it('should have the first Country in the list as default', () => {
      render(
        <SelectCountry
          countries={MOCKED_COUNTRY.LIST}
          value={MOCKED_COUNTRY.VALUE}
          onChange={MOCKED_COUNTRY.ONCHANGE}
        />
      );

      const combobox = screen.getByTestId('country-select') as HTMLInputElement;

      expect(combobox.value).toBe('AT');
    });

    it('should allow user to change the selected country', () => {
      render(
        <SelectCountry
          countries={MOCKED_COUNTRY.LIST}
          value={MOCKED_COUNTRY.VALUE}
          onChange={MOCKED_COUNTRY.ONCHANGE}
        />
      );

      const combobox = screen.getByTestId('country-select') as HTMLInputElement;
      const select = combobox.childNodes[0];

      fireEvent.change(select, {
        target: { value: 'BE' },
      });
      expect(combobox.value).toBe('BE');

      fireEvent.change(select, {
        target: { value: 'AT' },
      });
      expect(combobox.value).toBe('AT');
    });
  });

  describe('Holidays Table', () => {
    it('renders an error message when we failed to fetch the holiday list', () => {
      render(
        <HolidaysTable
          holidayData={MOCKED_HOLIDAYS_TABLE.LIST}
          holidayError={MOCKED_HOLIDAYS_TABLE.ERROR}
        />
      );

      expect(screen.getByTestId('holidays-table-error')).toBeInTheDocument();
    });

    it('renders a Holidays Table', () => {
      render(<HolidaysTable holidayData={MOCKED_HOLIDAYS_TABLE.LIST} />);

      expect(screen.getByTestId('holidays-table')).toBeInTheDocument();
    });

    it('should display the correct number of holidays for the default country and current year', () => {
      render(<HolidaysTable holidayData={MOCKED_HOLIDAYS_TABLE.LIST} />);

      expect(screen.getAllByTestId('holidays-table-row').length).toBe(
        MOCKED_HOLIDAYS_TABLE.LIST.length
      );
      expect(screen.getByText("New Year's Day")).toBeInTheDocument();
      expect(screen.getByText('Epiphany')).toBeInTheDocument();
      expect(screen.getByText('Easter Monday')).toBeInTheDocument();
      expect(screen.getByText('Labour Day')).toBeInTheDocument();
      expect(screen.getByText('Ascension Day')).toBeInTheDocument();
      expect(screen.getByText('Pentecost Monday')).toBeInTheDocument();
      expect(screen.getByText('Corpus Christi')).toBeInTheDocument();
      expect(screen.getByText('Assumption Day')).toBeInTheDocument();
      expect(screen.getByText('National Day')).toBeInTheDocument();
      expect(screen.getByText("All Saints' Day")).toBeInTheDocument();
      expect(screen.getByText('Immaculate Conception')).toBeInTheDocument();
      expect(screen.getByText('Christmas Day')).toBeInTheDocument();
      expect(screen.getByText("St Stephen's Day")).toBeInTheDocument();
    });
  });
});
