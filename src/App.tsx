import React, { Fragment } from 'react';
import ErrorBoundary from './components/errorBoundary';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Verse } from './pages/verse';
import Toast from './components/molecules/toast';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route
          path={"*"}
          element={
            <ErrorBoundary>
              <Verse />
            </ErrorBoundary>
          }
        />
      </Fragment>
    ),
    { basename: "/" }
  );

  return (
    <ErrorBoundary>
      <Toast />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
