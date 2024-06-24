'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button, Card } from '@repo/ui'
import { MenuIcon } from 'lucide-react'
import { useHeader } from '../hooks';

const navLinks = [
  {
    id: '0',
    name: 'Toi',
    link: '/',
  },
  {
    id: '1',
    name: 'ten',
    link: '/',
  },
  {
    id: '2',
    name: 'la',
    link: '/',
  },
  {
    id: '3',
    name: 'Tao',
    link: '/',
  },
]

function Header() {
  const {containerStyle, mobileContainerStyle, toggleNav} = useHeader();

  return (
    <motion.div
      className="bg-[var(--nav)] shadow-sm mx-auto  fixed z-50 left-0 right-0 transition-all"
      style={containerStyle}
    >
      <div className="wrapper px-10 py-5 w-full relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="#home">
            <header className="flex items-center gap-1">
              <span>{'< '}</span>
              <h1 className="text-2xl font-medium">
                Ryan
              </h1>
              <span>{' />'}</span>
            </header>
          </Link>
          <nav className="text-muted gap-8 hidden items-center  lg:flex">
            {navLinks.map(({id, name, link}) => {
              return (
                <Link
                  className="hover:text-foreground hover:scale-110 transition-all"
                  href={link}
                  key={id}
                >
                  {name}
                </Link>
              )
            })}
          </nav>
          <Button
            className="lg:hidden"
            onClick={toggleNav}
            variant="ghost"
          >
            <MenuIcon />
            <div className="sr-only">Menu Button</div>
          </Button>
        </div>
        <motion.div
          className="mobile-nav absolute lg:hidden top-[120%] mx-auto w-[95vw] left-0 right-0 transition-all overflow-hidden"
          style={mobileContainerStyle}
        >
          <Card className="p-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map(({id, name, link}) => {
                return (
                  <Link
                    className="text-lg"
                    href={link}
                    key={id}
                  >
                    {name}
                  </Link>
                )
              })}
            </nav>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Header