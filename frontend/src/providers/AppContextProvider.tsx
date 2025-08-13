/* eslint-disable no-unused-vars */
'use client'

import { Component, PropsWithChildren, createContext } from 'react'

export default class AppContextProvider extends Component<PropsWithChildren> {
  state: State = {
    asset: {
      component: {
        link: {
          reload: false,
        },
        isTranferring: false,
        isAdminInProgress: false,
        toPage: '',
        countriesAndCitiesUrls: [],
      },
    },
  }
  helpers: Helper = {
    setState: (func) => {
      this.setState((prevState: State) => {
        return {
          ...prevState,
          ...func(prevState),
        }
      })
    },
    setStateLinkReload: (reload: boolean) => {
      this.setState((prevState: State) => {
        return {
          ...prevState,
          asset: {
            ...prevState.asset,
            component: {
              ...prevState.asset.component,
              link: {
                ...prevState.asset.component.link,
                reload: reload,
              },
            },
          },
        }
      })
    },
    setStateTransfer: (transfer: boolean, topage: string) => {
      this.setState((prevState: State) => {
        return {
          ...prevState,
          asset: {
            ...prevState.asset,
            component: {
              ...prevState.asset.component,
              isTranferring: transfer,
              toPage: topage,
            },
          },
        }
      })
    },
    setAdminStateTransfer: (manageTransfer: boolean) => {
      this.setState((prevState: State) => {
        return {
          ...prevState,
          asset: {
            ...prevState.asset,
            component: {
              ...prevState.asset.component,
              isAdminInProgress: manageTransfer,
            },
          },
        }
      })
    },
    setStateCountriesAndCitiesUrls: (data: []) => {
      this.setState((prevState: State) => {
        return {
          ...prevState,
          asset: {
            ...prevState.asset,
            component: {
              ...prevState.asset.component,
              countriesAndCitiesUrls: data,
            },
          },
        }
      })
    },
  }
  render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this.helpers }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

interface State {
  asset: {
    component: {
      link: {
        reload: boolean
      }
      isTranferring: boolean
      isAdminInProgress: boolean
      toPage: string
      countriesAndCitiesUrls: []
    }
  }
}

interface Helper {
  setState: (func: (prevItems: State) => State) => void
  setStateLinkReload: (reload: boolean) => void
  setStateTransfer: (transfer: boolean, topage: string) => void
  setAdminStateTransfer: (manageTransfer: boolean) => void
  setStateCountriesAndCitiesUrls: (data: []) => void
}

export interface AppContextType extends State, Helper {}
export const AppContext = createContext({})
