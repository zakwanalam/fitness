import waveLines from '@/assets/wavy.svg'
function WaveLines() {
  return (
    <>
      <div className='absolute -right-40 translate-y-[80%] w-[400px] aspect-square bg-primary/15 blur-[100px] bg-blend-screen rounded-full'></div>
      <img className='absolute -right-80 translate-y-[30%] rotate-[270deg] size-1/2' src={waveLines}/>
    </>
  )
}

export default WaveLines