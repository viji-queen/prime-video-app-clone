import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies'
import LiveTV from './components/LiveTV'
import TVShows from './components/TVShows'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,

    },
    {
      path:'movies',
      element:<Movies />
    },
    {
      path:'live-tv',
      element:<LiveTV />
    },
    {
      path:'tv-shows',
      element:<TVShows />
    }
  ])
  return (
    <div className='App'>
   {/* <RouterProvider router={router}/> */}
   <Nav/>
   <Home/>
    </div>
  );
}

export default App;
