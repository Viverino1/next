import './globals.css'
import Navbar from './(components)/Navbar'
import { Providers } from '@/utils/redux/provider'

export const metadata = {
  title: 'Debate Tool',
  description: 'Made to unify your debate experience',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en" className='fixed'>
            <Providers>{
                <body className='relative top-0 bottom-0 right-0 left-0 flex font-quicksand'>
                    <div className='shadow-2xl shadow-accent z-50 fixed top-0 left-0 bottom-0'>
                        <Navbar/>
                    </div>
                    <div className='fixed top-0 bottom-0 left-21 right-0 bg-background'>{children}</div>
                </body>
            }</Providers>
        </html>
    )
}

export default RootLayout;