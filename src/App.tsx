import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import {routePath} from "./routes/path";
import Todos from "./pages/todos";

function App() {
  useEffect(() => {
    //TODO: handle redirect to list todo page if uri is root path
    // if (location.pathname === routePath.Root) {
    //     window.location.href = routePath.Todos
    // }
  })

  return (
      <React.Suspense fallback={<></>}>
          <Routes>
              <Route
                  path={routePath.Login}
                  element={
                      <React.Suspense fallback={null}>
                          //TODO: create login component
                          <div>Login</div>
                      </React.Suspense>
                  }
              />
              <Route
                  path={routePath.Login}
                  element={
                      <React.Suspense fallback={null}>
                          //TODO: create register component
                          <div>Register</div>
                      </React.Suspense>
                  }
              />
              <Route path={routePath.Todos} element={<Todos />} />
          </Routes>
      </React.Suspense>
  );
}

export default App;
