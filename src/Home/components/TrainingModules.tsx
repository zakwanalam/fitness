import React from 'react'
import { GradientCard } from './GradientCard'
import { ShinyButton } from '@/components/magicui/shiny-button'
import { ArrowRight } from 'lucide-react'
import waveLines from '@/assets/wavy.svg'
import WaveLines from './WaveLines'
function TrainingModules() {
  return (
    <section className='w-screen py-20'>
      <div className='flex flex-col max-w-screen-md mx-auto items-center text-center space-y-5 justify-center '>
        <h1 className='text-white  font-bold  '>Training Modules</h1>
        <p className="text-muted-foreground">Choose a module to start your fitness journey</p>
          <div className='absolute -right-60 translate-y-[30%] w-[350px] aspect-square bg-primary/25 blur-[100px] bg-blend-screen rounded-full'></div>
          <img className='absolute -right-80  translate-y-[30%] rotate-[270deg] size-1/2' src={waveLines} 
          style={{
            WebkitMaskImage: 'linear-gradient(to left, black 0px, transparent 650px)',
            maskImage: 'linear-gradient(to left, black 0px, transparent 650px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
          />  
        <GradientCard />
        <ShinyButton className="w-56 py-4 rounded-full text-lg  font-bold whitespace-nowrap bg-gradient-to-r from-lime-400 to-lime-600 text-white hover:brightness-110 transition-all duration-300">
          <div className='flex w-full items-center justify-center gap-4 '>
            <p>Start Now</p>
            <ArrowRight className="w-5 h-5" />
          </div>
        </ShinyButton>
      </div>
    </section>
  )
}

export default TrainingModules