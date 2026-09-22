import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { routes } from './routes';
import { LanguageProvider } from './context/LanguageContext';

const App: FC = () => {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App;
