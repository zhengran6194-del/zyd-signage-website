'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './PylonWeatherScene.module.css';

type Weather = 'sun' | 'rain' | 'frost';
type Props = { placement?: 'home' | 'product' };

const weatherOptions: { id: Weather; label: string; icon: string }[] = [
  { id: 'sun', label: 'Sunshine', icon: '☼' },
  { id: 'rain', label: 'Rain', icon: '☂' },
  { id: 'frost', label: 'Frost', icon: '❄' },
];

export default function PylonWeatherScene({ placement = 'product' }: Props) {
  const [weather, setWeather] = useState<Weather>('sun');
  const currentIndex = weatherOptions.findIndex((option) => option.id === weather);
  const isHome = placement === 'home';

  return (
    <section className={styles.section} aria-labelledby={`pylon-weather-title-${placement}`}>
      <div className={styles.scene} data-weather={weather}>
        <div className={styles.copy}>
          <p className={styles.kicker}>ON THE SITE</p>
          <h2 id={`pylon-weather-title-${placement}`} className={styles.title}>
            BUILT TO STAND OUT <span>IN EVERY CLIMATE</span>
          </h2>
          <p className={styles.description}>
            Preview how an entrance pylon reads through changing outdoor conditions. Final materials, lighting and structure are confirmed for each project site.
          </p>
          <div className={styles.controls} aria-label="Preview outdoor conditions">
            <p className={styles.controlHint}>TAP A SYMBOL OR TURN THE DIAL</p>
            <div className={styles.weatherButtons}>
              {weatherOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={styles.weatherButton}
                  aria-pressed={weather === option.id}
                  onClick={() => setWeather(option.id)}
                >
                  <span aria-hidden="true">{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
            <div className={styles.dialRow}>
              <span className={styles.dialTrack} aria-hidden="true" />
              <input
                className={styles.dial}
                type="range"
                min="0"
                max="2"
                step="1"
                value={currentIndex}
                aria-label="Change the outdoor condition"
                aria-valuetext={weatherOptions[currentIndex].label}
                onChange={(event) => setWeather(weatherOptions[Number(event.target.value)].id)}
              />
              <span className={styles.dialLabels} aria-hidden="true"><span>☼</span><span>☂</span><span>❄</span></span>
            </div>
          </div>
          <Link href={isHome ? '/products/outdoor-pylon-monument-sign' : '/contact?product=pylon'} className={styles.cta}>
            {isHome ? 'EXPLORE PYLON SIGNS' : 'PLAN YOUR PYLON SIGN'} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={styles.visual} role="img" aria-label={`Installed multi-tenant pylon sign shown in ${weatherOptions[currentIndex].label.toLowerCase()} conditions`}>
          <div className={styles.image} />
          <div className={styles.atmosphere} aria-hidden="true" />
          <div className={styles.rain} aria-hidden="true" />
          <div className={styles.snow} aria-hidden="true" />
          <div className={styles.caption}>
            <span>PYLON &amp; TENANT DIRECTORY</span>
            <span>DALIAN · PROJECT REFERENCE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
