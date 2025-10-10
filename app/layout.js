import './globals.css'
import KindeClientProvider from "./providers/KindeClientProvider";
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Flow of Work',
  description: 'MVP — Flow of Work'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <KindeClientProvider
        >
          <Navbar/>
          {children}
        </KindeClientProvider>
      </body>
    </html>
  )
}
