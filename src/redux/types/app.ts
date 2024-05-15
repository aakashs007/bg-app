export interface Translation {
  id: number;
  description: string;
  language: string;
}

export interface IVerse {
  verseNumber: number;
  chapterNumber: number;
  sanskritText?: string;
  translation?: string;
  wordMeanings?: string;
  translations: Translation[];
}

export interface AppInitialState {
  loading: boolean;
  verse: IVerse;
  toast: ToastInterface;
}

export interface ToastInterface {
  open: boolean;
  message?: string | null;
  description?: string | null;
  type?: "success" | "error" | "warning" | "info" | null
}