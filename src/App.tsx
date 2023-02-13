import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { routes } from './routes';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </div>
  )
}

export default App;