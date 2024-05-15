import { Verse } from "../../models/verse";
import { ToastInterface } from "../types/app";

export enum App {
  APP_LOADING = "app/APP_LOADING",
  UPDATE_VERSE = "app/UPDATE_VERSE",
  SET_TOAST = "app/SET_TOAST"
}


export const updateLoading = (payload: boolean) => {
  return { type: App.APP_LOADING, payload };
}

export const updateVerse = (payload: Verse) => {
  return { type: App.UPDATE_VERSE, payload }
}

export const updateToast = (payload: ToastInterface) => {
  return { type: App.SET_TOAST, payload };
}