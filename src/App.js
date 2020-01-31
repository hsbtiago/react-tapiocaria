import React, { useState, useEffect } from 'react';
import { Grommet, Heading, Paragraph, Box, Button, TextInput } from 'grommet';
import ListaDeTapiocas from './components/listaDeTapiocas'
import FormDeTapioca from './components/formDeTapioca';
import { Switch, Route, Link } from 'react-router-dom';
import { Add } from 'grommet-icons';
import api from '../src/services/api';

function App() {

  const [filtro, setFiltro] = useState('');
  const [tapiocas, setTapiocas] = useState([]);
  const [loading, setLoading] = useState('Carregando Tapiocas...');

  useEffect(() => {

    async function BuscarTapiocas() {

      const response = await api.get('/tapiocas');

      const listaFormatada = response.data.map(FormatarTapioca);

      setTapiocas(listaFormatada);
      setLoading('');
    }

    BuscarTapiocas();

  }, []);

  function HandleFilter(e) {
    setFiltro(e.target.value)
  }

  function AddTapioca(tapioca) {
    var tapiocaFormatada = FormatarTapioca(tapioca);
    setTapiocas([...tapiocas, tapiocaFormatada]);
  }

  function FormatarTapioca(tapioca) {
    return {
      recheio: `Tapioca de ${tapioca.recheio}`,
      preco: `R$ ${tapioca.preco}`,
      id: tapioca.id
    }
  }


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
      <Box pad="medium" gap='medium' align='center'>
        <Switch>

          <Route exact path="/">

            <Box direction="row">

              <Box margin='medium'>
                <TextInput placeholder='Pesquisar' value={filtro} onChange={HandleFilter} />
              </Box>

              <Box margin='medium'>
                <Link to='/tapiocas/criar'>
                  <Button
                    icon={<Add />}
                    label="Add"
                    primary={true}
                  />
                </Link>
              </Box>

            </Box>

            <Box>
              <Paragraph>
                {loading}
              </Paragraph>
              <ListaDeTapiocas tapiocas={tapiocas} />
            </Box>

          </Route>

          <Route exact path="/tapiocas/criar">
            <FormDeTapioca onSubmit={AddTapioca} />
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
