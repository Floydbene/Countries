import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCountryLoader } from './pages/Country';
import {
  About,
  Country,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
} from './index';
import SinglePageError from './pages/SinglePageError';
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'about',
        errorElement: <SinglePageError />,
        element: <About />,
      },
      {
        path: 'Country/:name',
        errorElement: <SinglePageError />,
        loader: singleCountryLoader(queryClient),
        element: <Country />,
      },
      {
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: 'newsletter',
        errorElement: <SinglePageError />,
        element: <NewsLetter />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
