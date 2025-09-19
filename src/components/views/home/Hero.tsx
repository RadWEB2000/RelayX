'use client'
import { useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react";
import { motion } from "framer-motion"


export default function Hero() {

    const { scrollY } = useScroll();
    const [scrollPos, updateScrollPos] = useState<number>(0)

    useMotionValueEvent(scrollY, "change", (latest) => {
        updateScrollPos(latest)
    })

    console.log(Math.max(1 - scrollPos / 3000, 0.95))

    return (
        <motion.header className="grid relative w-full mx-auto  overflow-hidden duration-100 ease-linear"
            style={{
                borderRadius: `${Math.min(scrollPos / 1000 * 1.975, 1)}rem`,
                scale: Math.max(1 - scrollPos / 3000, 0.95)
            }}
        >
            <section className="col-start-1 flex flex-col justify-center min-h-[94vh] p-8 row-start-1 text-center text-neutral-50 xl:p-20  ">
                <h1 className="font-slab text-sm 2xl:text-2xl text-balance font-bold
          mb-3 sm:text-base sm:mb-7
        "
                >
                    Pozycjonowanie SEO | Reklamy PPC | Strony internetowe | Automatyzacje RPA
                </h1>
                <h2 className="font-big-uppercase text-6xl text-balance 2xl:text-[12em] sm:text-8xl lg:text-9xl">
                    Zbuduj, skaluj,<br /> działaj, zarabiaj!
                </h2>
            </section>
            <video muted loop autoPlay className="col-start-1 absolute w-full brightness-70 h-full object-cover row-start-1 z-[-1]
" src="/city.mp4"></video>
        </motion.header>
    )
}