'use client'

import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../../store/store'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import StyledComponentsRegistry from '../styledComponent/register'
import GlobalStyleComponent from '../styledComponent/GlobalStyleComponent'
export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PrimeReactProvider>
        <StyledComponentsRegistry>
          <GlobalStyleComponent>{children}</GlobalStyleComponent>
        </StyledComponentsRegistry>
      </PrimeReactProvider>
    </Provider>
  )
}
