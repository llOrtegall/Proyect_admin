import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import Root from './root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]

  }
])

export default router;