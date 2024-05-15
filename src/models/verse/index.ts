import { IVerse } from "../../redux/types/app";
import { IVerseOptions } from "./types";

export class Verse {
  public verse: Partial<IVerse> = {};

  constructor(verseOptions?: IVerseOptions) {
    if(!verseOptions) return;

    this.parseVerse(verseOptions);
  }

  private parseVerse(verseOptions: IVerseOptions) {
    this.verse.chapterNumber = verseOptions.chapter_number;
    this.verse.verseNumber = verseOptions.verse_number;
    this.verse.sanskritText = verseOptions.text;
    this.verse.wordMeanings = verseOptions.word_meanings;

    if(verseOptions.translations.length) {
      this.verse.translation = verseOptions.translations[0]?.description;
    }
  }
}