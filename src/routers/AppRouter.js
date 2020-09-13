import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginScreen} from "../components/login/LoginScreen"
import { DashBoardRoutes } from "./DashBoardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                {/*si esta en esa ruta renderiza el componente*/}
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route path="/" component={DashBoardRoutes}></Route>
                </Switch>
            </div>
        </Router>
    )
}
 