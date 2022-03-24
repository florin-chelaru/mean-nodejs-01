import {Route, Routes} from 'react-router-dom';

import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

const App = () =>
  <Layout>
    <Routes>
      <Route path='/' element={<AllMeetupsPage/>}></Route>
      <Route path='/new-meetup' element={<NewMeetupPage/>}></Route>
      <Route path='/favorites' element={<FavoritesPage/>}></Route>
    </Routes>
  </Layout>

;


export default App;
