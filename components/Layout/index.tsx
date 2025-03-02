import { ReactNode } from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'

import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }: {children: ReactNode}) {
  return (
    <>
      <Head>
        <title>VLSILABS</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon_io/apple-touch-icon.png" />
      </Head>

      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Navbar />

        <Box sx={{ my: 2, margin: 0, flexGrow: 1 }}>
          {children}
        </Box>

        <Footer />
      </Box>
      
    </>
  )
}
