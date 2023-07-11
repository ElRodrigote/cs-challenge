export interface Country {
  isoCode: string;
  name: NameData[];
  officialLanguages: string[];
}

export interface NameData {
  language: string;
  text: string;
}
