'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })

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
