import { ClinicSvg, ShieldSvg, MobileSvg, MoneySvg } from 'assets/svg';
import { IDescriptionItem } from 'common/types';

export const items: IDescriptionItem[] = [
  {
    icon: ShieldSvg,
    text: 'Cómpralo de manera fácil',
    className: 'mb-3',
  },
  {
    icon: MobileSvg,
    text: 'Cotiza y compra tu seguro 100% digital',
    className: 'mb-3',
  },
  {
    icon: MoneySvg,
    text: 'Hasta S/.12 millones de cobertura anual',
    className: 'mb-3',
  },
  {
    icon: ClinicSvg,
    text: 'Más de 300 clínicas en todo el Perú',
    className: 'mb-3',
  },
];
