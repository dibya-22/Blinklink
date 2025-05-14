import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white min-h-[calc(100vh-8rem)] flex items-center overflow-hidden">
      <section className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 p-2 md:p-4 max-w-7xl mx-auto">
        {/* Content Section */}
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 px-2 md:px-4 text-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl">
            World&apos;s Quickest Link Shortener
          </h1>
          
          <p className="text-base sm:text-lg max-w-xl text-gray-200 leading-relaxed">
            Your go-to solution for shortening links quickly and efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center w-full sm:w-auto">
            <Link 
              href="/shorten"
              className="bg-blue-900 px-8 py-3 rounded-xl hover:bg-blue-950 
                hover:scale-105 transition-all duration-300 text-lg text-white
                text-center shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[160px]
                active:scale-95"
            >
              Start Now
            </Link>
            
            <Link 
              href="/about"
              className="bg-gray-600 px-8 py-3 rounded-xl hover:bg-gray-700 
                hover:scale-105 transition-all duration-300 text-lg text-white
                text-center shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[160px]
                active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[180px] sm:h-[220px] md:h-[400px] lg:min-h-[500px]">
          <Image 
            src="/vector.png" 
            alt="URL Shortener Illustration"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      </section>
    </main>
  );
}
