

import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import BreakpointsProvider from './providers/BreakpointsProvider'
import SettingsPanelProvider from './providers/SettingsPanelProvider'
import AppProvider from './providers/AppProvider'
import ChatWidgetProvider from './providers/ChatWidgetProvider'

function App() {
  return (
    <AppProvider>
    <SettingsPanelProvider>
    <ChatWidgetProvider>
    <BreakpointsProvider>
        <RouterProvider router={router} />
    </BreakpointsProvider>
    </ChatWidgetProvider>
    </SettingsPanelProvider>
 
    </AppProvider>

  )
}

export default App
