import { RootState } from ".."

export const isLoading = () => {
  return (state: RootState) => state.app?.loading
}

export const selectToastData = () => {
  return (state: RootState) => state.app?.toast
}

export const selectVerse = () => {
  return (state: RootState) => state.app?.verse
}