'use client'

import { useMotionValue, useScroll, useTransform } from 'framer-motion'

export const useHeader = () => {
  const { scrollY } = useScroll()
  const borderRadius = useTransform(
    scrollY,
    [0, 200, 200],
    ['0rem', '0rem', '3rem']
  )
  const top = useTransform(scrollY, [0, 200, 200], ['0rem', '0rem', '1rem'])
  const width = useTransform(scrollY, [0, 200, 200], ['100%', '100%', '95%'])
  const borderWidth = useTransform(
    scrollY,
    [0, 200, 200],
    ['0px', '0px', '1px']
  )

  const height = useMotionValue<'0' | '1000px'>('0')
  const opacity = useMotionValue<'0' | '1'>('0')

  const toggleNav =() => {
    if (height.get() === '1000px') {
      height.set('0')
      opacity.set('0')
    } else {
      height.set('1000px')
      opacity.set('1')
    }
  }

  return {
    containerStyle: {
      top,
      width,
      borderRadius,
      borderWidth
    },
    mobileContainerStyle: {
      opacity,
      maxHeight: height,
    },
    toggleNav

  }
}