'use client';

import styles from './AnimatedGradient.module.css';

export default function AnimatedGradient() {
  return (
    <div className={`${styles.gradientBackground} absolute inset-0 bg-black z-999`}>
      <div />
      <span />
    </div>
  );
} 