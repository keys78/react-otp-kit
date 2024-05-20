import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import Guides from './pages/Guides'
import Examples from './pages/Examples'
import NotFound from './pages/NotFound'


function App() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: 'get-started', element: <GetStarted /> },
    { path: 'guides', element: <Guides /> },
    { path: 'examples', element: <Examples /> },
    { path: '*', element: <NotFound /> },
  ]

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App
