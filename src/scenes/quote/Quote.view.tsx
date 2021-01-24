import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { paths } from 'routes';
import Layout from './components/layout';

const Quote: FC = () => {
  const history = useHistory();

  return (
    <Layout
      step={1}
      maxStep={7}
      title="Hola,"
      secondTitle="Luisa"
      textDescription="Valida que los datos sean correctos"
      onBack={() => history.push(paths.LOGIN)}
    >
      <h1>Cotizar</h1>
    </Layout>
  );
};

export default Quote;
