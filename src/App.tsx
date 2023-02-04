import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import { routes } from './routes'

const App: FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </div>
  )
}

export default App