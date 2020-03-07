import React from 'react';
import { Grommet, Heading, Paragraph, Box} from 'grommet';
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
        <Paragraph>CRUD de tapiocas feito com react</Paragraph>

      </Box>

      <Box pad="medium" gap='medium' align='center'>
        <Routes />
      </Box>

    </Grommet>
  );
}

export default App;
