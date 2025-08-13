// Models
import { Banner } from '@/models/Banner/banner'
import { Country } from '@/models/Country/country'
import { Campaign } from '@/models/Top/campaign'
import { SearchSchool } from '@/models/Top/searchSchool'

// Constants
import { ACTION_TYPES } from './actionTypes'

export type Action =
  | { type: typeof ACTION_TYPES.FETCHING_SEARCH_LOCATIONS }
  | {
      type: typeof ACTION_TYPES.SEARCH_LOCATIONS_FETCHED
      payload: {
        countriesWithCities: any
        schoolList: SearchSchool[]
        schoolNameList: string[]
      }
    }
  | { type: typeof ACTION_TYPES.FETCHING_BANNERS }
  | { type: typeof ACTION_TYPES.BANNERS_FETCHED; payload: Banner[] }
  | { type: typeof ACTION_TYPES.FETCHING_CAMPAIGNS }
  | { type: typeof ACTION_TYPES.CAMPAIGNS_FETCHED; payload: Campaign[] }
  | { type: typeof ACTION_TYPES.FETCHING_SEARCH_BY_AREA }
  | { type: typeof ACTION_TYPES.SEARCH_BY_AREA_FETCHED; payload: any }
  | { type: typeof ACTION_TYPES.FETCHING_SEARCH_BY_PREFERENCE }
  | { type: typeof ACTION_TYPES.SEARCH_BY_PREFERENCE_FETCHED; payload: any }
  | { type: typeof ACTION_TYPES.FETCHING_BLOGS }
  | { type: typeof ACTION_TYPES.BLOGS_FETCHED; payload: any }
  | { type: typeof ACTION_TYPES.FETCHING_COUNTRIES }
  | { type: typeof ACTION_TYPES.COUNTRIES_FETCHED; payload: Country[] }

export interface State {
  searchLocations: {
    countriesWithCities: any
    schoolList: SearchSchool[]
    schoolNameList: string[]
    isLoading: boolean
  }
  banners: {
    data: Banner[]
    isLoading: boolean
  }
  campaigns: {
    data: Campaign[]
    isLoading: boolean
  }
  searchByArea: any
  searchByPreference: any
  blogs: any
  countries: Country[]
}

export const initialState: State = {
  searchLocations: {
    countriesWithCities: [],
    schoolList: [],
    schoolNameList: [],
    isLoading: true,
  },
  banners: {
    data: [],
    isLoading: false,
  },
  campaigns: {
    data: [],
    isLoading: false,
  },
  searchByArea: [],
  searchByPreference: [],
  blogs: [],
  countries: [],
}
