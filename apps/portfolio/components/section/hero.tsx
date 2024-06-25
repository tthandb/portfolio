'use client';
import React from 'react';
import { Boxes } from '../background-boxes';
import { cn } from '@repo/ui';
import { FlipWords } from '../flip-words';

export function Hero() {
  const words = ['Ryan', 'Nguyen'];

  return (
    <div
      className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
      />
      <Boxes />
      <h1 className={cn('md:text-4xl text-xl text-white relative z-20')}>
        I am {' '}
        <FlipWords words={words} duration={1000} className="text-6xl" /> <br />
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        a software developer with a passion for technology and innovation
      </p>
    </div>
  );
}
