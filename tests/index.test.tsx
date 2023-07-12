import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Home from '../src/app/page';
import { HolidaysTable, SelectCountry } from '../src/components';
import { MOCKED_COUNTRY, MOCKED_HOLIDAYS_TABLE } from './mocks.ts';

describe('Public Holiday App', () => {
  it('renders a loading message', () => {
    render(<Home />);

    expect(screen.getByTestId('country-loading')).toBeInTheDocument();
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

      expect(screen.getByTestId('country-error')).toBeInTheDocument();
    });

    it('renders an Available Country selector with its label', () => {
      render(
        <SelectCountry
          countries={MOCKED_COUNTRY.LIST}
          value={MOCKED_COUNTRY.VALUE}
          onChange={MOCKED_COUNTRY.ONCHANGE}
        />
      );

      expect(screen.getByTestId('country-select')).toBeInTheDocument();
    });

    it('should display the correct number of options', () => {
      render(
        <SelectCountry
          countries={MOCKED_COUNTRY.LIST}
          value={MOCKED_COUNTRY.VALUE}
          onChange={MOCKED_COUNTRY.ONCHANGE}
        />
      );

      expect(screen.getAllByRole('option').length).toBe(
        MOCKED_COUNTRY.LIST.length
      );
    });

    it('should have the first Country in the list as default', () => {
      render(
        <SelectCountry
          countries={MOCKED_COUNTRY.LIST}
          value={MOCKED_COUNTRY.VALUE}
          onChange={MOCKED_COUNTRY.ONCHANGE}
        />
      );

      expect(
        screen.getByRole('option', {
          name: MOCKED_COUNTRY.LIST[0].name[0].text,
        }).selected
      ).toBe(true);
    });

    it('should allow user to change the selected country', () => {
      render(
        <SelectCountry
          countries={MOCKED_COUNTRY.LIST}
          value={MOCKED_COUNTRY.VALUE}
          onChange={MOCKED_COUNTRY.ONCHANGE}
        />
      );

      const combobox = screen.getByTestId('country-select');
      const select = combobox.childNodes[0];
      const austria = screen.getByRole('option', { name: 'Austria' });
      const belgium = screen.getByRole('option', { name: 'Belgium' });

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
