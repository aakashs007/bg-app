export interface ITranslation {
  description: string;
  language: string;
}

export interface IVerseOptions {
  chapter_number: number;
  verse_number: number;
  text: string;
  word_meanings: string;
  translations: ITranslation[];
}
