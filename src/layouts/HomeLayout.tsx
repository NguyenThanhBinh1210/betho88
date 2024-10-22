import Footer from '~/components/layouts/Footer'
import Header from '~/components/layouts/Header'
import { LayoutPropsInterface } from '~/types/base.type'

const HomeLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div className='bg-bgPrimary'>
      <Header />
      <div className='pb-4'>{children}</div>
      <Footer />
    </div>
  )
}

export default HomeLayout
