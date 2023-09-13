// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Ana Sayfa',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Çalışanlar',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Projeler',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Sprintler',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'ÇALIŞANLAR',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
