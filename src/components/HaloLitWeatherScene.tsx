'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './HaloLitWeatherScene.module.css';

const conditions = [
  { id: 'sun', label: 'Sunshine', icon: '☼', image: '/assets/images/halo-weather-sun.webp' },
  { id: 'rain', label: 'Heavy rain', icon: '☂', image: '/assets/images/halo-weather-rain.webp' },
  { id: 'snow', label: 'Heavy snow', icon: '❄', image: '/assets/images/halo-weather-snow.webp' },
] as const;

export default function HaloLitWeatherScene() {
  const [active, setActive] = useState(0);
  const current = conditions[active];

  return (
    <section className={styles.section} aria-labelledby="halo-weather-title">
      <div className={styles.scene}>
        <div className={styles.copy}>
          <p className={styles.kicker}>REAR-GLOW ON SITE</p>
          <h2 id="halo-weather-title" className={styles.title}>HALO-LIT LETTERS <span>IN EVERY CLIMATE</span></h2>
          <p className={styles.description}>
            Preview the sign in sunshine, rain and snow. Letter construction, finish and fixing details are specified for each project site.
          </p>
          <div className={styles.controls} role="group" aria-label="Preview halo-lit letters in different weather">
            <p className={styles.controlHint}>SELECT A WEATHER CONDITION</p>
            <div className={styles.weatherDial}>
              <svg className={styles.dialArc} viewBox="0 0 240 140" aria-hidden="true">
                <path d="M22 112 A98 98 0 0 1 218 112" />
                <path className={styles.dialArcGlow} style={{ strokeDashoffset: `${-active * 110}px` }} d="M22 112 A98 98 0 0 1 218 112" />
              </svg>
              {conditions.map((condition, index) => (
                <button
                  key={condition.id}
                  type="button"
                  className={`${styles.weatherChoice} ${styles[`weatherChoice${index}`]} ${active === index ? styles.weatherChoiceActive : ''}`}
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                >
                  <span className={styles.choiceIcon} aria-hidden="true">{condition.icon}</span>
                  <span>{condition.label}</span>
                </button>
              ))}
              <button type="button" className={styles.dialKnob} aria-label={`Next weather condition. Current: ${current.label}`} onClick={() => setActive((active + 1) % conditions.length)}>
                <span style={{ transform: `rotate(${(active - 1) * 58}deg)` }} aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link href="/contact?product=halo" className={styles.cta}>PLAN YOUR HALO-LIT LETTERS <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.visual} role="img" aria-label={`Halo-lit parking sign shown in ${current.label.toLowerCase()} conditions`}>
          <div className={styles.frame}>
            {conditions.map((condition, index) => (
              <div key={condition.id} className={`${styles.image} ${active === index ? styles.imageActive : ''}`} style={{ backgroundImage: `url("${condition.image}")` }} aria-hidden="true" />
            ))}
            <div className={styles.caption} aria-live="polite">
              <span>{current.label.toUpperCase()} SCENE PREVIEW</span>
              <span>ILLUSTRATIVE WEATHER VISUALIZATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
