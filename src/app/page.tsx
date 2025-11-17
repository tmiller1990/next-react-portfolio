import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'

export default function Home() {
    return (
        <div className="font-sans min-h-screen bg-theme-base">
            <Navbar/>
            <Hero/>
            <div className="border-b border-dashed border-theme-content my-4"></div>
            <Contact/>
            <div className="border-b border-dashed border-theme-content my-4"></div>
            <Portfolio/>
        </div>
    )
}
