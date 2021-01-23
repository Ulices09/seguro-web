import { FC } from 'react';
import { Title, Button, InputText, Select, Checkbox } from 'components';
import Layout from './components/layout';
import { ISelectItem } from 'common/types';

const documentTypes: ISelectItem[] = [
  { value: 'DNI', text: 'DNI' },
  { value: 'C.E', text: 'C.E' },
];

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
      <div className="row mb-4">
        <div className="col">
          <Select items={documentTypes} />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <InputText type="date" placeholder="Fecha nacimiento" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <Checkbox
            text={
              <span>
                Acepto la&nbsp;
                <a href="/" target="_blank">
                  Política de Protección de Datos Personales y los Términos y
                  Condiciones
                </a>
              </span>
            }
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <Checkbox
            text={
              <span>
                Acepto la&nbsp;
                <a href="/" target="_blank">
                  Política de Envío de Comunicaciones Comerciales
                </a>
              </span>
            }
          />
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
