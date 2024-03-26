import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/customer/Homepage';
import ProductDetails from './pages/customer/ProductDetails';
import Cart from './pages/customer/Cart';
import EcommerceLayout from './layouts/EcommerceLayout';

const routes:RouteObject[] = [
{
    element: <EcommerceLayout />,
    path:"/",
    children: [
        {
          path: '/',
          element: <Homepage />
        },
        {
          path: 'product-details',
          element: <ProductDetails />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'checkout',
          element: <p>checkout</p>,
        },
        {
          path: 'shipping-info',
          element: <p>shipping</p>,
        },
        {
          path: 'profile',
          element: <p>profile</p>,
        },
        {
          path: 'products-filter',
          element: <p>product</p>,
        },
        {
          path: 'wishlist',
          element:<p>wishlist</p>,
        },
        {
          path: 'favorite-stores',
          element: <p>favorite</p>,
        },
        {
          path: 'order-tracking',
          element: <p>order</p>,
        },
        {
          path: 'invoice',
          element:<p>invoice</p>,
        }
      ]
}
]

export const router = createBrowserRouter(routes);

export default routes;