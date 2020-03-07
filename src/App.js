import React from 'react';
import { Grommet, Heading, Text, Box } from 'grommet';
import Routes from './routes';

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

      <Box tag='header' align='center' background='brand'>

        <Heading>Tapiocaria React</Heading>
        <Text>CRUD de tapiocas feito com react</Text>

      </Box>

      <Box pad="large">
        <Routes />
      </Box>

    </Grommet>
  );
}

export default App;
