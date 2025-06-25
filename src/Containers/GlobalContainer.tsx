import React, { ReactNode } from 'react'

interface NavbarContainerProps {
    children: ReactNode;
    color?: string;
}


function GlobalContainer({ children }: NavbarContainerProps) {
    return (
            <div className={` w-screen px-3 max-md:px-6`}>
                <div className='max-w-screen-lg  mx-auto '>
                    {children}
                </div>
            </div>
    )
}

export default GlobalContainer