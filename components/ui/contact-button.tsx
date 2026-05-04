import React from 'react';
import Link from 'next/link';
import s from './contact-button.module.css';

const px = (
  row: number,
  col: number,
  i: number,
  on = false,
) => (
  <span
    key={i}
    className={[s.pixel, s[`r${row}c${col}`], on ? s.pixelOn : ''].filter(Boolean).join(' ')}
    style={{ '--i': i } as React.CSSProperties}
  />
);

export function Button01() {
  return (
    <Link href="/contact" className={s.link}>
      <div className={s.bg}>
        <span className={s.text}>Contact Us</span>
        <div className={s.pixels}>
          {px(0,0, 0)} {px(0,1, 1)} {px(0,2, 2)} {px(0,3, 3)} {px(0,4, 4)}
          {px(1,0, 5)} {px(1,1, 6)} {px(1,2, 7)} {px(1,3, 8)} {px(1,4, 9)}
          {px(2,0,10)} {px(2,1,11)} {px(2,2,12,true)} {px(2,3,13)} {px(2,4,14)}
          {px(3,0,15)} {px(3,1,16)} {px(3,2,17)} {px(3,3,18)} {px(3,4,19)}
          {px(4,0,20)} {px(4,1,21)} {px(4,2,22)} {px(4,3,23)} {px(4,4,24)}
        </div>
      </div>
    </Link>
  );
}
