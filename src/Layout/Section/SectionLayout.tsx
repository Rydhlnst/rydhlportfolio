import React, { ReactNode } from 'react'

interface PropTypes {
    children: ReactNode;
    description?: string;
    title?: string;
    type?: string
}

const SectionLayout = (props: PropTypes) => {
    const {children} = props;

  return (
    <div className='w-full px-20 py-20 flex flex-col bg-accent gap-30'>
        {children}
    </div>
  )
}

export default SectionLayout