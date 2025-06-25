import React, { useEffect, useState } from 'react'
import NavbarContainer from '../Containers/NavbarContainer'
import { Navbar } from '@/components/navbar1'
import GlobalContainer from '@/Containers/GlobalContainer'
import HeroSection from './components/HeroSection'
import { GradientCard } from './components/GradientCard'
import { Button } from '@/components/ui/button'
import { ArrowBigRight, ArrowRight } from 'lucide-react'
import { ShinyButton } from '@/components/magicui/shiny-button'
import waveLines from "../assets/wavy.svg"
import TrainingModules from './components/TrainingModules'
import WaveLines from './components/WaveLines'
import { MarqueeDemo } from './components/Marquee'
import fitnessModel from '@/assets/fitness-model.jpg'
import { Chrono } from "react-chrono"
import Timeline from '@/components/ui/timeline'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Footer2 } from '@/components/footer2'
const data = [
  {
    title: " Personal Training",
    content: (
      <div>
        <p className="mb-4 text-sm text-white dark:text-neutral-200">
          Get expert-led, customized workout plans tailored to your goals, fitness level, and schedule.
        </p>
      </div>
    ),
  },
  {
    title: "Meal Planning",
    content: (
      <div>
        <p className="mb-4 text-sm text-white dark:text-neutral-200">
          Access science-backed nutrition plans to boost performance and help with weight management.
        </p>
      </div>
    ),
  },
  {
    title: "Progress Tracking",
    content: (
      <div>
        <p className="mb-4 text-sm text-white dark:text-neutral-200">
          Monitor your progress with detailed analytics, body transformation stats, and visual progress tracking.
        </p>
      </div>
    ),
  },
  {
    title: "Community Challenges",
    content: (
      <div>
        <p className="mb-4 text-sm text-white dark:text-neutral-200">
          Join fitness challenges, compete with others, and stay motivated as part of our fitness community.
        </p>
      </div>
    ),
  },
];
function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Watch if the div is in the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 } // at least 50% of the element in view
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // Trap scroll only when the div is in view
  useEffect(() => {
    const scrollDiv = containerRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (!scrollDiv || !isInView) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollDiv;
      const atTop = Math.floor(scrollTop) === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      const shouldTrap =
        (scrollingDown && !atBottom) || (scrollingUp && !atTop);

      if (shouldTrap) {
        e.preventDefault();
        scrollDiv.scrollBy({ top: e.deltaY*0.4,behavior:'instant' });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isInView]);

  useEffect(() => {
    const handleSlowPageScroll = (e: WheelEvent) => {
      if (containerRef.current?.contains(e.target as Node)) {
        // Let the scroll trap handle internal scroll
        return;
      }
      e.preventDefault(); // stop native fast scroll
      window.scrollBy({
        top: e.deltaY*2.0, // slower scroll speed
        behavior: "smooth", // or "smooth" (optional)
      });
    };
  
    window.addEventListener("wheel", handleSlowPageScroll, { passive: false });
    return () =>
      window.removeEventListener("wheel", handleSlowPageScroll);
  }, []);
  return (
    <React.Fragment>
      <div className=" relative w-screen p-0">
        {/* Full width navbar container */}
        <div className=' '>
          <HeroSection />
        </div>
        <div className='absolute top-0'>
          <NavbarContainer >
            <Navbar />
          </NavbarContainer>
        </div>
      </div>
      <TrainingModules />
      <div className='max-md:hidden w-20 '>
        <div className='absolute -left-60 translate-y-[80%] w-[350px] aspect-square bg-primary/25 blur-[100px] bg-blend-screen rounded-full'></div>
        <img className='absolute  -left-80 translate-y-[30%] rotate-[450deg] size-1/2' src={waveLines}
          style={{
            WebkitMaskImage: 'linear-gradient(to left, black 0px, transparent 680px)',
            maskImage: 'linear-gradient(to left, black 0px, transparent 680px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        />
      </div>
      <GlobalContainer>
        <section className='flex flex-col justify-center pt-10 space-y-10 p-5 items-center'>
          <h1 className='font-bold'>Testemonials</h1>
          <p className="text-muted-foreground text-base text-center -mt-6">
            Hear what our satisfied users have to say about their experience with our platform.
          </p>
          <MarqueeDemo />
        </section>
      </GlobalContainer>
      <GlobalContainer>
        <section className='flex py-50 justify-center pt-10 space-y-10 space-x-5  items-start'>
          <div className='flex flex-col  flex-1'>
            <div className="flex flex-col space-y-5 rounded-md">
              <h1 className="font-bold text-xl">Training Program</h1>
              <div className="w-1/6 h-1 bg-white mb-7"></div>
              <p className="text-sm text-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis suscipit molestias aut ipsum consectetur...
              </p>
            </div>
            <div
              ref={containerRef}
              className="h-[400px] mt-10 overflow-y-auto relative [scrollbar-width:none]"
              style={{
                // Ensure these styles are present:
                position: 'relative', // Required for scroll tracking
                overflow: 'hidden auto', // Cleaner than overflow-scroll
              }}
            >
              <Timeline data={data} containerRef={containerRef} />
            </div>
          </div>

          <div className='flex-1'>
            <img className='rounded-xl w-full h-auto object-cover' src={fitnessModel} alt="Fitness Model" />
          </div>
        </section>
      </GlobalContainer>
      <section className='bg-accent  text-white'>
        <GlobalContainer>
          <Footer2 />
        </GlobalContainer>
      </section>
    </React.Fragment>

  )
}

export default Home