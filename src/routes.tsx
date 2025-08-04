import Home from './pages/Home/Home';
import About from './pages/About/About'
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Articles from './pages/Articles/Articles';
import DetailedArticle from './pages/Articles/Typescript/DetailedArticle';


export const routes = [
    { path: `/`, element: <Home /> },
    { path: `/about`, element: <About /> },
    { path: `/projects`, element: <Projects /> },
    { path: `/contact`, element: <Contact /> },
    { path: `/articles`, element: <Articles /> },
    { path: `/articles/:articleId`, element: <DetailedArticle /> }

];