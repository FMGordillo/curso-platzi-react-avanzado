import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './pages/App'
import GlobalStyles from './styles/GlobalStyles'

const defaultQueryFn = async ({ queryKey }) => {
  const rawData = await window.fetch(`http://localhost:3500/${queryKey}`)
  const json = await rawData.json()
  return json
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>, document.getElementById('root'))
