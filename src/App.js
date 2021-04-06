import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import ListarPersonaView from "./views/Persona/ListarPersonaView";
import CrearPersonaView from "./views/Persona/CrearPersonaView";
import EditarPersonaView from "./views/Persona/EditarPersonaView";

import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <React.Fragment>
            <div>
              <Route path="/personas" component={ListarPersonaView} />
              <Route path="/crear_personas" component={CrearPersonaView} />
              <Route
                path="/editar_personas/:id"
                component={EditarPersonaView}
              />

              <Route exact path="/">
                <Redirect to="/personas" />
              </Route>
            </div>
          </React.Fragment>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
