import React from 'react';
import { Grommet, Heading, Paragraph, Box } from 'grommet';
import ListaDeTapiocas from './components/listaDeTapiocas'
import FormDeTapioca from './components/formDeTapioca';
import { Switch, Route } from 'react-router-dom';

function App() {

  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  return (
    <Grommet theme={theme} full>

      <Box
        tag='header'
        align='center'
        background='brand'
      >

        <Heading>Tapiocaria React</Heading>
        <Paragraph>CRUD de tapiocas feito com react</Paragraph>

      </Box>
      <Box pad="large" align='center'>
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
      </Box>

    </Grommet>
  );
}

export default App;
