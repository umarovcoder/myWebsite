import Home from './pages/Home/Home'
import About from './pages/About/About'
import Works from './pages/Works/Works'
import Contact from './pages/Contact/Contact'
import Articles from './pages/Articles/Articles'

export const routes = [
    {path: `/`, element: <Home />},
    {path: `/about`, element: <About />},
    {path: `/works`, element: <Works />},
    {path: `/contact`, element: <Contact />},
    {path: `/articles`, element: <Articles />},
]