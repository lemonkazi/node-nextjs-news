import { ACTION_TYPES } from './actionTypes'
import { Action, State } from './types'

function updateState<T>(
  state: State,
  key: keyof State,
  data: T,
  isLoading: boolean,
): State {
  return {
    ...state,
    [key]: {
      data,
      isLoading,
    },
  }
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTION_TYPES.FETCHING_SEARCH_LOCATIONS:
      return {
        ...state,
        searchLocations: {
          ...state.searchLocations,
          isLoading: true,
        },
      }
    case ACTION_TYPES.SEARCH_LOCATIONS_FETCHED:
      return {
        ...state,
        searchLocations: {
          countriesWithCities: action.payload.countriesWithCities,
          schoolList: action.payload.schoolList,
          schoolNameList: action.payload.schoolNameList,
          isLoading: false,
        },
      }
    case ACTION_TYPES.FETCHING_BANNERS:
      return updateState(state, 'banners', [], true)
    case ACTION_TYPES.BANNERS_FETCHED:
      return updateState(state, 'banners', action.payload, false)
    case ACTION_TYPES.FETCHING_CAMPAIGNS:
      return updateState(state, 'campaigns', [], true)
    case ACTION_TYPES.CAMPAIGNS_FETCHED:
      return updateState(state, 'campaigns', action.payload, false)
    case ACTION_TYPES.FETCHING_SEARCH_BY_AREA:
      return {
        ...state,
        searchByArea: [],
      }
    case ACTION_TYPES.SEARCH_BY_AREA_FETCHED:
      return {
        ...state,
        searchByArea: action.payload,
      }
    case ACTION_TYPES.FETCHING_SEARCH_BY_PREFERENCE:
      return {
        ...state,
        searchByPreference: [],
      }
    case ACTION_TYPES.SEARCH_BY_PREFERENCE_FETCHED:
      return {
        ...state,
        searchByPreference: action.payload,
      }
    case ACTION_TYPES.FETCHING_BLOGS:
      return {
        ...state,
        blogs: [],
      }
    case ACTION_TYPES.BLOGS_FETCHED:
      return {
        ...state,
        blogs: action.payload,
      }
    case ACTION_TYPES.FETCHING_COUNTRIES:
      return {
        ...state,
        countries: [],
      }
    case ACTION_TYPES.COUNTRIES_FETCHED:
      return {
        ...state,
        countries: action.payload,
      }
    default:
      return state
  }
}
