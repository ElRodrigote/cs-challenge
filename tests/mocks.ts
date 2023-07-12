export const MOCKED_COUNTRY = {
  ERROR: true,
  LIST: [
    {
      isoCode: 'AT',
      name: [
        {
          language: 'EN',
          text: 'Austria',
        },
        {
          language: 'DE',
          text: 'Österreich',
        },
      ],
      officialLanguages: ['DE'],
    },
    {
      isoCode: 'BE',
      name: [
        {
          language: 'EN',
          text: 'Belgium',
        },
        {
          language: 'NL',
          text: 'België',
        },
        {
          language: 'FR',
          text: 'Belgique (la)',
        },
        {
          language: 'DE',
          text: 'Belgien',
        },
      ],
      officialLanguages: ['NL', 'FR', 'DE'],
    },
  ],
  ONCHANGE: (event: Event) => {},
  VALUE: 'AT',
};

export const MOCKED_HOLIDAYS_TABLE = {
  ERROR: true,
  LIST: [
    {
      id: '13f3463d-9e9f-4605-aeab-f4d9733d7bd7',
      date: '2023-01-01',
      description: "New Year's Day",
    },
    {
      id: '89cba73b-bb5d-44dd-b6ef-bead84113a54',
      date: '2023-01-06',
      description: 'Epiphany',
    },
    {
      id: 'd7ae58b2-52dc-49ee-a28b-d7e466373b46',
      date: '2023-04-10',
      description: 'Easter Monday',
    },
    {
      id: '4f311896-f8c4-4a51-8ae7-9c44cce3aebd',
      date: '2023-05-01',
      description: 'Labour Day',
    },
    {
      id: 'edfb9aa1-d3d4-4254-8193-fbb5a3b128fe',
      date: '2023-05-18',
      description: 'Ascension Day',
    },
    {
      id: '75752dda-09d2-49b1-8a32-1f58d5a6ba98',
      date: '2023-05-29',
      description: 'Pentecost Monday',
    },
    {
      id: 'b8ab997a-3d53-4dd7-8ae9-70cfddd4a9b3',
      date: '2023-06-08',
      description: 'Corpus Christi',
    },
    {
      id: 'df81ac6e-9121-45a3-9f8f-140a10e6d8af',
      date: '2023-08-15',
      description: 'Assumption Day',
    },
    {
      id: 'd3f24660-4d65-4eed-aedb-8dc999a4689f',
      date: '2023-10-26',
      description: 'National Day',
    },
    {
      id: 'bb943eee-7ee6-4db4-9068-9c25cde7df48',
      date: '2023-11-01',
      description: "All Saints' Day",
    },
    {
      id: '0e060c5c-4452-4f5d-b5a1-9fc78fcf601e',
      date: '2023-12-08',
      description: 'Immaculate Conception',
    },
    {
      id: '25f24e1d-6b6e-4595-bca0-d71fb09e93aa',
      date: '2023-12-25',
      description: 'Christmas Day',
    },
    {
      id: '343be03f-a32d-493d-8738-121c81d6a740',
      date: '2023-12-26',
      description: "St Stephen's Day",
    },
  ],
};
