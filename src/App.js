import React from 'react';
import { Grommet, Heading, Main, Paragraph, Button, Box } from 'grommet';
import { Add } from 'grommet-icons';
import ListaDeTapiocas from './components/listaDeTapiocas'

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

      <Main pad="large" margin='medium'>

        <Box pad='large' margin='medium'>

          <Heading>Tapiocaria React</Heading>

          <Paragraph>CRUD de tapiocas feito com react</Paragraph>

        </Box>

        <Box pad='large' margin='medium'>
          <ListaDeTapiocas />
        </Box>

        <Box pad='large' margin='medium'>

          <Button
            icon={<Add />}
            label="Adicionar Nova Tapioca"
            primary={true}
            onClick={() => { }}
          />
        </Box>

      </Main>

    </Grommet>
  );
}

export default App;
