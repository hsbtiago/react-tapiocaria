import React from 'react';
import ListaDeTapiocas from './pages/listaDeTapiocas'
import FormDeTapioca from './pages/formDeTapioca';
import { Switch, Route} from 'react-router-dom';

const Routes = () => (
    <>
        <Switch>

            <Route exact path="/">
                <ListaDeTapiocas />
            </Route>

            <Route exact path="/tapiocas/criar">
                <FormDeTapioca />
            </Route>

            <Route exact path="/tapiocas/editar/:id">
                <FormDeTapioca />
            </Route>

        </Switch>
    </>
);

export default Routes;