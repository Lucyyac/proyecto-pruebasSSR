// Libraries imports
import { FC, ReactNode } from 'react'
import "./layout.css"

// App level imports
import HeaderNavigationBar from './navigationBar/HeaderNavigationBar'

type BaseLayoutProps = {
  children: ReactNode
}

const Layout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
    <div>
      <section className="pages">{children}</section>
      <div className='menu-style'>
        <HeaderNavigationBar />
      </div>
    </div>
    </>
  )
}

export default Layout
