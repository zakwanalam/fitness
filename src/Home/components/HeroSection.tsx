import { Button } from '@/components/ui/button'
import GlobalContainer from '@/Containers/GlobalContainer'

function HeroSection() {
  return (
    <div className='relative flex items-center justify-start h-[800px]' >
      <img className='absolute w-full h-full object-cover' src='https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
      <GlobalContainer >
        <div className='absolute  space-y-5 -translate-y-[50%] w-100 '>
          <p className="text-9xl text-primary font-extrabold italic">
            Unleash <br />
            <p className="text-[90px] text-white tracking-[1px] font-thin" >Your Best</p>
          </p>
          <div className='w-1/6 h-1 bg-white'></div>
          <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nisi saepe, minus maxime veniam voluptates eius iste qui animi velit sint, adipisci accusamus quo nihil, optio corporis consectetur. Alias, voluptates.</p>
         <div className='w-full *:cursor-pointer flex items-center gap-4 '>
           <Button >Join Our Training</Button>
           <Button variant={'ghost'} className='text-white font-bold'>Services</Button>
         </div>
        </div>
      </GlobalContainer>
    </div>
  )
}

export default HeroSection