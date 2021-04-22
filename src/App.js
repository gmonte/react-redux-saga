import { Provider as StoreProvider } from 'react-redux'

import store from './store/store'

import Router from './pages/Router'

function App() {
  return (
    <StoreProvider store={ store }>
      <Router />
    </StoreProvider>
  )
}

export default App;
