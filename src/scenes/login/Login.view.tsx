import { FC } from 'react';
import { Title, Button, InputText } from 'components';
import Layout from './components/layout';

const Login: FC = () => {
  return (
    <Layout>
      <Title text="Obtén tu" secondText="seguro ahora" />
      <span>Ingresa tus datos para comenzar.</span>
      <div className="row my-4">
        <div className="col">
          <InputText placeholder="Nro de Documento" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button>COMENCEMOS</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
