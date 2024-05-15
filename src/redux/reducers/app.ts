import { Verse } from "../../models/verse";
import { App } from "../actions/app";
import { initialState } from "../store/app";
import { AppInitialState, ToastInterface } from "../types/app";

export function appReducer(state = initialState, action: any) {
  switch (action.type) {
    case App.APP_LOADING: {
      const payload = action.payload;
      return { ...state, loading: payload } as AppInitialState;
    }

    case App.UPDATE_VERSE: {
      const payload = action.payload as Verse;
      return { ...state, verse: payload.verse } as AppInitialState;
    }

    case App.SET_TOAST: {
      const payload = action.payload as ToastInterface;
      return { ...state, toast: payload } as AppInitialState;
    }

    default:
      return state
  }
}