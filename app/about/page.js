import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div className='text-white w-[90vw] sm:w-[80vw] md:w-[70vw] mx-auto mb-10 px-4 py-6 md:py-10'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10'>About Us</h1>
            
            {/* Welcome Section */}
            <div className='mb-8 md:mb-12'>
                <h2 className='text-2xl sm:text-3xl font-bold flex flex-wrap gap-2 items-center'>
                    Welcome to <span className='logo font-bold font-serif text-white hover:text-gray-200'>blinkl!nk</span>
                    <span className='block w-full sm:inline sm:w-auto text-xl sm:text-2xl text-blue-200 mt-2 sm:mt-0'>
                        — Where Links Meet Efficiency
                    </span>
                </h2>
                <p className='text-base sm:text-lg mt-4 opacity-80 hover:opacity-100 leading-relaxed'>
                    In today's fast-paced digital world, every second counts. That's why we've created the most efficient link shortening solution that transforms how you share links online. Simple, swift, and secure.
                </p>
            </div>

            {/* Mission Section */}
            <div className='mb-8 md:mb-12'>
                <h2 className='text-2xl sm:text-3xl font-bold mb-4'>Our Mission</h2>
                <p className='text-base sm:text-lg opacity-80 hover:opacity-100 leading-relaxed'>
                    To revolutionize link sharing by providing the fastest, most reliable, and user-friendly URL shortening service in the digital space.
                </p>
            </div>

            {/* Features Section */}
            <div className='mb-8 md:mb-12'>
                <h2 className='text-2xl sm:text-3xl font-bold mb-4'>
                    Why Choose <span className='font-semibold'>blinkl!nk</span>?
                </h2>
                <ul className='space-y-4'>
                    <li>
                        <details className="group transition-all duration-300">
                            <summary className="cursor-pointer p-4 bg-slate-700/50 hover:bg-slate-700 
                                rounded-xl flex items-center gap-2 text-base sm:text-lg font-medium">
                                ⚡ Lightning Fast Processing
                            </summary>
                            <div className="p-4 bg-slate-600/50 mt-2 rounded-xl text-sm sm:text-base leading-relaxed">
                                Experience instant link shortening with our optimized infrastructure. 
                                No waiting, no delays — just immediate results.
                            </div>
                        </details>
                    </li>
                    <li>
                        <details className="group transition-all duration-300">
                            <summary className="cursor-pointer p-4 bg-slate-700/50 hover:bg-slate-700 
                                rounded-xl flex items-center gap-2 text-base sm:text-lg font-medium">
                                🔐 Privacy First
                            </summary>
                            <div className="p-4 bg-slate-600/50 mt-2 rounded-xl text-sm sm:text-base leading-relaxed">
                                We don’t track your clicks or sell your data. Your links are yours alone.
                            </div>
                        </details>
                    </li>
                    <li>
                        <details className="group transition-all duration-300">
                            <summary className="cursor-pointer p-4 bg-slate-700/50 hover:bg-slate-700 
                                rounded-xl flex items-center gap-2 text-base sm:text-lg font-medium">
                                📊 Analytics You Can Trust (Coming Soon)
                            </summary>
                            <div className="p-4 bg-slate-600/50 mt-2 rounded-xl text-sm sm:text-base leading-relaxed">
                                Transparent, real-time data to help you understand your audience and improve your reach.
                            </div>
                        </details>
                    </li>
                    <li>
                        <details className="group transition-all duration-300">
                            <summary className="cursor-pointer p-4 bg-slate-700/50 hover:bg-slate-700 
                                rounded-xl flex items-center gap-2 text-base sm:text-lg font-medium">
                                🌐 Optimized for All Devices
                            </summary>
                            <div className="p-4 bg-slate-600/50 mt-2 rounded-xl text-sm sm:text-base leading-relaxed">
                                <span className='font-semibold'>blinklink</span> works beautifully on desktop, tablet, and mobile — anytime, anywhere.
                            </div>
                        </details>
                    </li>
                    <li>
                        <details className="group transition-all duration-300">
                            <summary className="cursor-pointer p-4 bg-slate-700/50 hover:bg-slate-700 
                                rounded-xl flex items-center gap-2 text-base sm:text-lg font-medium">
                                👥 Built for Everyone
                            </summary>
                            <div className="p-4 bg-slate-600/50 mt-2 rounded-xl text-sm sm:text-base leading-relaxed">
                                From freelancers to teams, our platform is designed to grow with your needs.
                            </div>
                        </details>
                    </li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className='mt-12 text-center'>
                <h2 className='text-2xl sm:text-3xl font-bold mb-4'>Ready to Start?</h2>
                <p className='text-base sm:text-lg mb-6 opacity-80 hover:opacity-100'>
                    Join thousands of users who trust blinkl!nk for their link shortening needs.
                </p>
                <Link 
                    href="/shorten"
                    className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                        px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 
                        shadow-lg hover:shadow-xl'
                >
                    Try It Now
                </Link>
            </div>
        </div>
    )
}

export default About
