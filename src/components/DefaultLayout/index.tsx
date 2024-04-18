import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'

const DefaultLayout = ({ children }) => {
  return (
    <div className="z-0 flex flex-col items-center w-full h-full">
    {/* @ts-ignore */}
      <Header />
    {/* @ts-ignore */}
      <Main>{children}</Main>
    {/* @ts-ignore */}
      {/* <Footer /> */}
    </div>
  )
}

export default DefaultLayout