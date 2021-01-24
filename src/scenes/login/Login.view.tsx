import { FC } from 'react';
import { Title } from 'components';
import { ILoginForm, Layout, LoginForm } from './components';
import { useLazyRequest } from 'hooks';
import { personService } from 'services';
import { useHistory } from 'react-router-dom';
import { paths } from 'routes';

const Login: FC = () => {
  const history = useHistory();
  const [getPersonData, { loading }] = useLazyRequest(
    personService.getPersonData,
    {
      onSuccess: () => {
        history.push(paths.QUOTE);
      },
      onError: (err) => {
        console.log('ERROR -> ', err);
        // el servicio no funciona, para poder seguir el flujo se está haciendo
        // la redirección aquí
        history.push(paths.QUOTE);
      },
    },
  );

  const handleSubmit = (data: ILoginForm) => {
    getPersonData(data);
  };

  return (
    <Layout>
      <Title
        text="Obtén tu"
        secondText="seguro ahora"
        description="Ingresa los datos para comenzar."
      />
      <LoginForm loading={loading} onSubmit={handleSubmit} />
    </Layout>
  );
};

export default Login;
