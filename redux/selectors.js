import { createSelector } from '@reduxjs/toolkit'

export const selectGender = createSelector(
  (state) => state.gender.showGender,
  (gender) => gender
)
