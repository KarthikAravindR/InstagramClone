import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as ROUTES from './constants/routes'

import "./styles/app.css"

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
