import { FC } from 'react';
import { Title } from 'components';
import Layout from './components/layout';

const Login: FC = () => {
  return (
    <Layout>
      <Title text="Obtén tu" secondText="seguro ahora" />
      <span>Ingresa tus datos para comenzar.</span>
    </Layout>
  );
};

export default Login;
