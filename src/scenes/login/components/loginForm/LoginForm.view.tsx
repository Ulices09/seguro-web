import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, InputText, Select, Checkbox } from 'components';
import { documentTypes } from 'common/data';
import { messages } from 'common/constants';

export type ILoginForm = {
  documentType: string;
  document: string;
  birthday: string;
  cellphone: string;
  checkTermsandConditions: boolean;
  checkShippingPolicies: boolean;
};

type IProps = {
  loading: boolean;
  onSubmit: (data: ILoginForm) => void;
};

const LoginForm: FC<IProps> = (props) => {
  const {
    handleSubmit,
    control,
    errors,
    formState: { isValid },
  } = useForm<ILoginForm>({
    mode: 'onChange',
  });

  const onSubmit = (data: ILoginForm) => props.onSubmit(data);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="row my-4">
        <div className="col-3 pr-0">
          <Controller
            name="documentType"
            control={control}
            defaultValue={documentTypes[0].value}
            render={(props) => (
              <Select
                value={props.value}
                items={documentTypes}
                className="border-rr-0"
                onChange={(e) => props.onChange(e.target.value)}
              />
            )}
          />
        </div>
        <div className="col-9 pl-0">
          <Controller
            name="document"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: messages.REQUIRED_FIELD },
              maxLength: { value: 8, message: 'Documento no válido' },
              minLength: { value: 8, message: 'Documento no válido' },
            }}
            render={(props) => (
              <InputText
                value={props.value}
                placeholder="Nro de Documento"
                className="border-lr-0 border-l-0"
                maxLength={8}
                onChange={(e) => props.onChange(e.target.value)}
                error={errors.document?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <Controller
            name="birthday"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: messages.REQUIRED_FIELD },
            }}
            render={(props) => (
              <InputText
                type="date"
                placeholder="Fecha nacimiento"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                error={errors.birthday?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <Controller
            name="cellphone"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: messages.REQUIRED_FIELD },
            }}
            render={(props) => (
              <InputText
                placeholder="Celular"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                error={errors.cellphone?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <Controller
            name="checkTermsandConditions"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={(props) => (
              <Checkbox
                text={
                  <span>
                    Acepto la&nbsp;
                    <a href="/" target="_blank">
                      Política de Protección de Datos Personales y los Términos
                      y Condiciones
                    </a>
                  </span>
                }
                value={props.value}
                onChange={(e) => props.onChange(e.target.checked)}
                hasError={errors.checkTermsandConditions != null}
              />
            )}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <Controller
            name="checkShippingPolicies"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={(props) => (
              <Checkbox
                text={
                  <span>
                    Acepto la&nbsp;
                    <a href="/" target="_blank">
                      Política de Envío de Comunicaciones Comerciales
                    </a>
                  </span>
                }
                value={props.value}
                onChange={(e) => props.onChange(e.target.checked)}
                hasError={errors.checkShippingPolicies != null}
              />
            )}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button type="submit" disabled={!isValid || props.loading}>
            COMENCEMOS
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
