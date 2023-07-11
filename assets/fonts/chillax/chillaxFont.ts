import localFont from '@next/font/local';

export const chillax = localFont({
    src: [
      {
        path: './Chillax-Extralight.woff2',
        weight: '200'
      },
      {
        path: './Chillax-Light.woff2',
        weight: '300'
      },
      {
        path: './Chillax-Regular.woff2',
        weight: '400'
      },
      {
        path: './Chillax-Medium.woff2',
        weight: '500'
      },
      {
        path: './Chillax-Semibold.woff2',
        weight: '600'
      },
      {
        path: './Chillax-Bold.woff2',
        weight: '700'
      },
    ],
    variable: '--font-chillax'
  })