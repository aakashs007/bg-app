import { AppInitialState } from "../types/app";

export const initialState: AppInitialState = {
  loading: false,
  verse: {
    verseNumber: 1,
    chapterNumber: 1,
    sanskritText: "",
    translation: "",
    wordMeanings: "",
    translations: []  
  },
  toast: {
    open: false,
    message: null,
    type: null
  },  
};

export const previousState = {};