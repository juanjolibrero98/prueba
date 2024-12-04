export type Colors = 'sky' | 'yellow' | 'green' | 'red' | 'violet' | 'gray' | 'success' | 'primary' | 'danger' | 'light' | 'lightCard' | 'lightList';

//este type es para indicar que los colores tienen un type especifico, solo puede tener objetos y esos objetos
//solo puede venir dada por una clave:valor -> string | booleano
//Record para modelar el objeto
export type ObjColors = Record<string, Record<string, boolean>>;

export const COLORS: ObjColors = {
  success: {
    'bg-success-700': true,
    'hover:bg-success-800': true,
    'focus:ring-success-300': true,
    'text-white': true,
  },
  primary: {
    'bg-primary-700': true,
    'hover:bg-primary-800': true,
    'focus:ring-primary-300': true,
    'text-white': true,
  },
  danger: {
    'bg-danger-700': true,
    'hover:bg-danger-800': true,
    'focus:ring-danger-300': true,
    'text-white': true,
  },
  light: {
    'bg-gray-200': true,
    'hover:bg-gray-500': true,
    'focus:ring-gray-50': true,
    'text-gray-700': true,
  },
  lightCard: {
    'bg-gray-200': true,
    'hover:bg-gray-300': true,
    'hover:rounded-[10px]': true,
    'focus:ring-gray-50': true,
    'text-gray-700': true,
  },
  lightList: {
    'bg-gray-200': true,
    'hover:bg-gray-700': true,
    'hover:text-gray-200': true,
    'focus:ring-gray-50': true,
    'text-gray-700': true,
  },
  sky: {
    'bg-sky-700': true,
    'hover:bg-sky-800': true,
    'focus:ring-sky-300': true,
    'text-white': true,
  },
  yellow: {
    'bg-yellow-700': true,
    'hover:bg-yellow-800': true,
    'text-white': true,
  },
  green: {
    'bg-green-700': true,
    'hover:bg-green-800': true,
    'text-white': true,
  },
  red: {
    'bg-red-700': true,
    'hover:bg-red-800': true,
    'text-white': true,
  },
  violet: {
    'bg-violet-700': true,
    'hover:bg-violet-800': true,
    'text-white': true,
  },
  gray: {
    'bg-gray-700': true,
    'hover:bg-gray-800': true,
    'text-white': true,
  },
}

export const BACKGROUNDS: ObjColors = {
  success: {
    'bg-success-600': true,
  },
  primary: {
    'bg-primary-600': true,
  },
  danger: {
    'bg-danger-600': true,
  },
  light: {
    'bg-gray-600': true,
  },
  sky: {
    'bg-[#0079bf]': true,
  },
  yellow: {
    'bg-[#d29034]': true,
  },
  green: {
    'bg-[#519839]': true,
  },
  red: {
    'bg-red-400': true,
  },
  violet: {
    'bg-[#89609e]': true,
  },
  gray: {
    'bg-[#838c91]': true,
  },
}

export const NAVBAR_BACKGROUNDS: ObjColors = {
  success: {
    'bg-success-700': true,
  },
  primary: {
    'bg-primary-700': true,
  },
  danger: {
    'bg-danger-700': true,
  },
  light: {
    'bg-gray-700': true,
  },
  sky: {
    'bg-sky-900': true,
  },
  yellow: {
    'bg-yellow-800': true,
  },
  green: {
    'bg-green-900': true,
  },
  red: {
    'bg-red-500': true,
  },
  violet: {
    'bg-violet-900': true,
  },
  gray: {
    'bg-gray-600': true,
  },
}
