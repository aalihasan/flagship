import { createBrowserRouter } from 'react-router';
import home from '../pages/home';
import mainLayout from './layout/mainLayout';
import Favorites from '../pages/favorites';
import About from '../pages/about';
import PhoneDetails from '../pages/PhoneDetails';
import Error from '../pages/error';
import Cart from '../pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    Component: mainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: home,
        hydrateFallbackElement: <p>loading.......</p>,
        loader: () => fetch('../phones.json'),
      },
      {
        path: '/favorites',
        Component: Favorites,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/phone-details/:id',
        Component: PhoneDetails,
        hydrateFallbackElement: <p>loading.......</p>,
        loader: () => fetch('../phones.json'),
      },
      {
        path: '/cart',
        Component: Cart,
      },
    ],
  },
]);

export default router;
