import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { paths } from 'routes';
import { Layout, StepOneForm } from './components';

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
      <h5>Datos personales del titular</h5>
      <StepOneForm onSubmit={(data) => console.log(data)} />
    </Layout>
  );
};

export default Quote;
