export type IPersonDataResult = {
  tipo: string;
  mensaje: string;
  titulo: string;
  data: {
    tercero: IPersonData;
  };
  error: {
    codigo: string;
    mensajedev: string;
    mensajeux: string;
  };
};

export type IPersonData = {
  direccion: string;
  nomCompleto: string;
  indCrearTercero: string;
  estadoCivil: string;
  tipoPersona: string;
  telefono: string;
  apellidoPaterno: string;
  sexo: string;
  indRequiereDireccion: string;
  paisNacimiento: string;
  nombres: string;
  stsTercero: string;
  tipoDocumento: string;
  apellidoMaterno: string;
  numDocumento: string;
  fechaNacimiento: string;
  correo: string;
};
