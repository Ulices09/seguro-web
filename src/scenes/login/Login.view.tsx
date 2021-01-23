import { FC } from 'react';
import { Title } from 'components';
import { Layout, LoginForm } from './components';

const Login: FC = () => {
  return (
    <Layout>
      <Title text="Obtén tu" secondText="seguro ahora" />
      <span>Ingresa tus datos para comenzar.</span>
      <LoginForm onSubmit={(data) => console.log('submit success -> ', data)} />
    </Layout>
  );
};

export default Login;
