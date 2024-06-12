import gsap from 'gsap';
import React, { useEffect } from 'react'
import './CustomPointer.scss'

const CustomPointer = () => {
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      cursorMovingAnimation(event);
    }
    const cursorMovingAnimation = (event: any) => {
      try {
        const timing = gsap.timeline({
          defaults: {
            x: event.clientX,
            y: event.clientY,
          }
        })
        timing.to(
          '.cs_cursor_sm',
          {
            x: event.clientX,
            y: event.clientY,
            ease: 'power2.out'
          },
          "-=0.001"
        )

      } catch (error) {
        console.error(error);
      }
    }
    document.addEventListener('mousemove', handleMouseMove);
    return (() => {
      document.removeEventListener('mousemove', handleMouseMove);
    })
  }, [])
  return (
    <>
      <span className='cs_cursor_sm'></span>
    </>
  )
}

export default CustomPointer