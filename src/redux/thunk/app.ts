import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { ApiEndpoints } from "../../lib/apiEndpoints";
import { RootState } from "..";
import { API_ENDPOINTS } from "../../lib/apiConstants";
import { Verse } from "../../models/verse";
import { updateLoading, updateToast, updateVerse } from "../actions/app";

const apiEndPoint = new ApiEndpoints(
  process.env.REACT_APP_API_HOST || "",
  process.env.REACT_APP_API_KEY || ""
);

export const fetchVerse = (chap: number, verse: number) => {
  return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    dispatch(updateLoading(true));

    const endpoint = `${API_ENDPOINTS.VERSE}/chapters/${chap || 1}/verses/${verse || 1}/`
    const { response } = await apiEndPoint.get(endpoint);

    if(response && response.data) {
      const verseInstance = new Verse(response.data);
      dispatch(updateVerse(verseInstance));
    } else {
      dispatch(updateToast({ type: 'error', message: `Unable to fetch chapter ${chap} verse ${verse}!`, open: true}))
    }

    dispatch(updateLoading(false));
  }
}
