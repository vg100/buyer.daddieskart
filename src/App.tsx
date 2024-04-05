
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import BreakpointsProvider from './providers/BreakpointsProvider'
import SettingsPanelProvider from './providers/SettingsPanelProvider'
import AppProvider from './providers/AppProvider'
import ChatWidgetProvider from './providers/ChatWidgetProvider'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <AppProvider>
      <SettingsPanelProvider>
        <ChatWidgetProvider>
          <BreakpointsProvider>
            <Provider store={store}>
              <RouterProvider router={router} />
            </Provider>
          </BreakpointsProvider>
        </ChatWidgetProvider>
      </SettingsPanelProvider>

    </AppProvider>

  )
}

export default App
