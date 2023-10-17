import { uniqueId } from 'lodash';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconUsers, IconUserSearch, IconLayoutDashboard
} from '@tabler/icons-react';

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: 'CMS',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/',
  },
  {
    id: uniqueId(),
    title: 'Clientes',
    icon: IconUsers,
    href: '/clientes',
  },
  {
    id: uniqueId(),
    title: 'Pesquisas',
    icon: IconUserSearch,
    href: '/pesquisa',
  }
];

export default Menuitems;
