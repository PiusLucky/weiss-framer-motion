import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


const dinPro = localFont({
  src: [
    {
      path: '../../public/font/DINPro-Light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/DINPro-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/font/DINPro-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
  ],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={dinPro.className} >{children}</body>
    </html>
  )
}