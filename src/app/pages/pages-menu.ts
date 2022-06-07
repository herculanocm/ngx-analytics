import { NbMenuItem } from '@nebular/theme';
export class NbMenuItemAux extends NbMenuItem {
  roles?: String[];
  children?: NbMenuItemAux[];
}
export const MENU_ITEMS: NbMenuItemAux[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
    roles: [
      'ROLE_ADMIN',
      'ROLE_USER',
      'ROLE_ANY',
    ],
  },
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    roles: [
      'ROLE_OTHER',
    ],
  },
  {
    title: 'FEATURES',
    group: true,
    roles: ['ROLE_ANY'],
  },
  {
    title: 'Dados Públicos',
    icon: 'file-text-outline',
    roles: [
      'ROLE_ADMIN',
      'ROLE_DADOS_PUBLICOS',
    ],
    children: [
      {
        title: 'Upload',
        link: '/pages/dados-publicos/upload',
        roles: [
          'ROLE_ADMIN',
          'ROLE_DADOS_PUBLICOS',
        ],
      }
    ],
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    roles: [],
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
        roles: [],
      },
      {
        title: 'List',
        link: '/pages/layout/list',
        roles: [],
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
        roles: [],
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
        roles: [],
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
        roles: [],
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    roles: [],
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
        roles: [],
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
        roles: [],
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
        roles: [],
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
        roles: [],
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    roles: [],
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
        roles: [],
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
        roles: [],
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
        roles: [],
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
        roles: [],
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    roles: [],
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
        roles: [],
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
        roles: [],
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
        roles: [],
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
        roles: [],
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
        roles: [],
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    roles: [],
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
        roles: [],
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
        roles: [],
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
        roles: [],
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
        roles: [],
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
        roles: [],
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
        roles: [],
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    roles: [],
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
        roles: [],
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
        roles: [],
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
        roles: [],
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
        roles: [],
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    roles: [],
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
        roles: [],
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
        roles: [],
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
        roles: [],
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    roles: [],
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
        roles: [],
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
        roles: [],
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    roles: [],
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
        roles: [],
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
        roles: [],
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    roles: ['ROLE_ANY'],
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
        roles: ['ROLE_ANY'],
      },
      {
        title: 'Not Authorized',
        link: '/pages/miscellaneous/not-authorized',
        roles: ['ROLE_ANY'],
      },
    ],
  },
];
