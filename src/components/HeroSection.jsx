import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Grüezi, I'm Mariel</h1>
                    <p className="text-black text-base sm:text-lg mb-6lg:text-xl">
                        I am an artist, a dreamer, and a storyteller.
                        Through my work, I aim to capture the essence of imagination and bring it to life.
                    </p>
                </div>
                <div className='col-span-5'>
                    <div className='rounded-full bg-pink-300' relative>
                        <Image src="/images/heidi.png"
                            alt="heidi image"
                            className='absolute transform -translate-x-1/ -translate-y-1/2 top-1/2 left-1/2 '
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection