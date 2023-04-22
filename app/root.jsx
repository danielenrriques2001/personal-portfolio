import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
  return [

    {
      charset: 'utf-8',
      title: 'Daniel Mercedes - Portfolio',
      viewport: "width=device-width,initial-scale=1"
    }

        ]
}


const Normalize = {
    rel: 'stylesheet',
    href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
};
const DosisFont = [ 
    {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin : "true"
    }, 
    {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700&display=swap"
    }
 ];

 const SignikaFont = [

    {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin : "true"
    }, 
    {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;400;500&display=swap"
    }


 ]

const styleSheet = {
    rel: 'stylesheet',
    href: styles
}
export function links() {
  return [
      Normalize,
      DosisFont[0],
      DosisFont[1],
      DosisFont[2],

      SignikaFont[0],
      SignikaFont[1],
      SignikaFont[2],
      styleSheet
    
  ]
}

export default function App() {
  return(
      <Document>
          <Outlet />
      </Document>
  )
}

function Document({children}) {
  return (
      <html lang="es">
          <head>
              <Meta />
              <Links />
          </head>
          <body>
              <Header />
              {children}
              <Footer />
              <Scripts />
              <LiveReload />
          </body>
      </html>
  )
}

/** Manejo de errores */
export function CatchBoundary() {
  const error = useCatch()
  return (
      <Document>
          <p className='error'>{error.status } {error.statusText}</p>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
      </Document>
  )
}

export function ErrorBoundary({error}) {
  return (
      <Document>
          <p className='error'>{error.status } {error.statusText}</p>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
      </Document>
  )
}