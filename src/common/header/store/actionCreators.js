import { SEARCH_FOCUSED,SEARCH_BLUR } from './constants'

export const searchFocus = () => ({
  type: SEARCH_FOCUSED
})

export const searchBlur = () => ({
  type: SEARCH_BLUR
})