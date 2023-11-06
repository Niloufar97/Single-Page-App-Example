import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Login from './pages/Login/Login'
import Panel from './pages/Panel/Panel'
import Course from './pages/Course/Course'
import NotFound from './pages/NotFound/NotFound'
import PrivateRoute from './PrivateRoute'
const routes =[
    { path:"/", element:<Home />},
    { path:"/about", element:<About />},
    { path:"/blog/*", element:<Blog />, children :[
      { path:"tech-news", element : <h1>Thechnology news</h1>},
      { path:"fun", element : <h1>Fun</h1>},
    ]},
    { path:"/login", element:<Login />},
    { path:"/panel", element:<PrivateRoute>  <Panel /> </PrivateRoute> },
    { path:"/course/:id", element:<Course />},
    { path:"/*", element:<NotFound />},
  ]
export default routes;