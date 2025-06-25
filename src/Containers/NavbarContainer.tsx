import  { type ReactNode } from 'react'

interface NavbarContainerProps {
    children: ReactNode;
    color?: string;
}


function NavbarContainer({ children }: NavbarContainerProps) {
    return (
        <div className=" flex py-4 px-8 lg:px-0 items-center justify-center bg-transparent ">
            <div className={` w-screen `}>
                <div className='max-w-screen-lg  mx-auto '>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default NavbarContainer