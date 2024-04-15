import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/customer/Homepage';
import ProductDetails from './pages/customer/ProductDetails';
import Cart from './pages/customer/Cart';
import EcommerceLayout from './layouts/EcommerceLayout';
import Checkout from './pages/customer/checkout/Checkout';
import ShippingInfo from './pages/customer/checkout/ShippingInfo';
import Profile from './pages/customer/Profile';
import ProductsFilter from './pages/customer/ProductsFilter';
import Wishlist from './pages/customer/Wishlist';
import FavoriteStores from './pages/customer/FavoriteStores';
import OrderTracking from './pages/customer/OrderTracking';
import Invoice from './pages/customer/Invoice';
import CardSignIn from './pages/authentication/card/SignIn';
import CardSignUp from './pages/authentication/card/SignUp';
import CardForgotPassword from './pages/authentication/card/ForgotPassword';
import CardSignOut from './pages/authentication/card/SignOut';
import CardResetPassword from './pages/authentication/card/ResetPassword';
import CardTwoFA from './pages/authentication/card/TwoFA';
import CardLockScreen from './pages/authentication/card/LockScreen';
import Error404 from './pages/error/Error404';
import FaqTab from './pages/faq/FaqTab';
import ComingSoon from './pages/ComingSoon';
import AppLayout from './AppLayout';
import ProtectedRoute from './navigation/ProtectedRoute';


const ecommerceRoutes: RouteObject[] = [
    {
        element: <EcommerceLayout />,
        children: [

            {
                path: '/',
                element: <Homepage />
            },
            {
                path: 'p-d',
                element: <ProductDetails />,
            },
            {
                path: 'cart',
                element: <ProtectedRoute  element={<Cart />}  />
            },
            {
                path: 'checkout',
                element: <Checkout />,
            },
            {
                path: 'shipping-info',
                element: <ShippingInfo />
            },
            {
                path: 'profile',
                element: <ProtectedRoute element={<Profile />} />
            },
            {
                path: 'pf',
                element: <ProductsFilter />
            },
            {
                path: 'wishlist',
                element: <ProtectedRoute element={<Wishlist />} />
            },
            {
                path: 'favorite-stores',
                element: <FavoriteStores />
            },
            {
                path: 'order-tracking',
                element: <OrderTracking />
            },
            {
                path: 'invoice',
                element: <Invoice />
            },


            {
                path: 'help',
                element: <FaqTab />

            },


        ]
    },
]


const signInRoutes: RouteObject[] = [
    {
        element: <EcommerceLayout />,
        children: [
            {
                path: 'sign-in',
                element: <CardSignIn />
            },
            {
                path: 'sign-up',
                element: <CardSignUp />
            },
            {
                path: 'sign-out',
                element: <CardSignOut />
            },
            {
                path: 'forgot-password',
                element: <CardForgotPassword />
            },
            {
                path: 'reset-password',
                element: <CardResetPassword />
            },
            {
                path: 'lock-screen',
                element: <CardLockScreen />
            },
            {
                path: '2FA',
                element: <CardTwoFA />
            }
        ]
    }
];


const routes: RouteObject[] = [
    {
        element: <AppLayout />,
        children: [
            ...ecommerceRoutes,
            ...signInRoutes,
            {
                path: 'coming-soon',
                element: <ComingSoon />
            },
            {
                path: '*',
                element: <Error404 />
            }
        ]
    }
];


export const router = createBrowserRouter(routes);

export default routes;
