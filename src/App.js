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

        <Box>

          <Heading>Tapiocaria React</Heading>
          <Paragraph>CRUD de tapiocas feito com react</Paragraph>

        </Box>

        <Box pad='large'>
          <Switch>

            <Route path='/'>
              <ListaDeTapiocas />
            </Route>

            <Route path='/tapiocas/criar'>
              <FormDeTapioca/>
            </Route>

          </Switch>
        </Box>


      </Box>

    </Grommet>
  );
}

export default App;
