import React from 'react';
import ListaDeTapiocas from './pages/listaDeTapiocas'
import FormDeTapioca from './pages/formDeTapioca';
import { HashRouter, Route} from 'react-router-dom';

const Routes = () => (
    <>
        <HashRouter basename='/'>

            <Route exact path="/">
                <ListaDeTapiocas />
            </Route>

            <Route exact path="/tapiocas/criar">
                <FormDeTapioca />
            </Route>

            <Route exact path="/tapiocas/editar/:id">
                <FormDeTapioca />
            </Route>

        </HashRouter>
    </>
);

export default Routes;