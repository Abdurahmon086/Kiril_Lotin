import Layout from '@/components/Layout/layout'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  const [load, setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 500)
  console.log(pageProps)
  return (
    <>
      {load == true ?
        <div className='h-[100vh] bg-blue-50 flex justify-center items-center '>
          <div className="loader mt-[-50px]"></div>
        </div>
        :
        <div >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>}
    </>
  )
}
