import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, InputText, Select } from 'components';
import { documentTypes } from 'common/data';
import { messages } from 'common/constants';

export type IStepOneForm = {
  documentType: string;
  document: string;
  firstname: string;
  lastnameFather: string;
  lastnameMother: string;
  birthday: string;
};

type IProps = {
  loading?: boolean;
  onSubmit: (data: IStepOneForm) => void;
};

const StepOneForm: FC<IProps> = (props) => {
  const {
    handleSubmit,
    control,
    errors,
    formState: { isValid },
  } = useForm<IStepOneForm>({
    mode: 'onChange',
  });

  const onSubmit = (data: IStepOneForm) => props.onSubmit(data);

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
            defaultValue="87865686"
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
            name="firstname"
            control={control}
            defaultValue="Luisa"
            rules={{
              required: { value: true, message: messages.REQUIRED_FIELD },
            }}
            render={(props) => (
              <InputText
                placeholder="Nombres"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                error={errors.firstname?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <Controller
            name="lastnameFather"
            control={control}
            defaultValue="Pérez"
            rules={{
              required: { value: true, message: messages.REQUIRED_FIELD },
            }}
            render={(props) => (
              <InputText
                placeholder="Apellido paterno"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                error={errors.lastnameFather?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <Controller
            name="lastnameMother"
            control={control}
            defaultValue="Sánchez"
            rules={{
              required: { value: true, message: messages.REQUIRED_FIELD },
            }}
            render={(props) => (
              <InputText
                placeholder="Apellido materno"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                error={errors.lastnameMother?.message}
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
                placeholder="Fecha de nacimiento"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                error={errors.birthday?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            type="submit"
            className="float-right"
            disabled={!isValid || props.loading}
          >
            CONTINUAR
          </Button>
        </div>
      </div>
    </form>
  );
};

export default StepOneForm;
