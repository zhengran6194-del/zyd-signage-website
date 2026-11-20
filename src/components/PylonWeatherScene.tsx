'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './PylonWeatherScene.module.css';

type Weather = 'sun' | 'rain' | 'frost';
type Props = { placement?: 'home' | 'product' };

const weatherOptions: { id: Weather; label: string; icon: string }[] = [
  { id: 'sun', label: 'Sunshine', icon: '☼' },
  { id: 'rain', label: 'Heavy rain', icon: '☂' },
  { id: 'frost', label: 'Heavy snow', icon: '❄' },
];

export default function PylonWeatherScene({ placement = 'product' }: Props) {
  const [weather, setWeather] = useState<Weather>('sun');
  const currentIndex = weatherOptions.findIndex((option) => option.id === weather);
  const isHome = placement === 'home';
  const advanceWeather = () => setWeather(weatherOptions[(currentIndex + 1) % weatherOptions.length].id);

  return (
    <section className={styles.section} aria-labelledby={`pylon-weather-title-${placement}`}>
      <div className={styles.scene} data-weather={weather}>
        <div className={styles.copy}>
          <p className={styles.kicker}>ON THE SITE</p>
          <h2 id={`pylon-weather-title-${placement}`} className={styles.title}>
            BUILT TO STAND OUT <span>IN EVERY CLIMATE</span>
          </h2>
          <p className={styles.description}>
            Preview the pylon in heavy rain and snow. Structure, materials and finish are specified against the conditions at each project site.
          </p>
          <div className={styles.controls} role="group" aria-label="Preview outdoor conditions">
            <p className={styles.controlHint}>SELECT A WEATHER CONDITION</p>
            <div className={styles.weatherDial} data-step={currentIndex}>
              <svg className={styles.dialArc} viewBox="0 0 240 140" aria-hidden="true">
                <path d="M22 112 A98 98 0 0 1 218 112" />
                <path className={styles.dialArcGlow} d="M22 112 A98 98 0 0 1 218 112" />
              </svg>
              {weatherOptions.map((option, index) => (
                <button
                  key={option.id}
                  type="button"
                  className={`${styles.weatherChoice} ${styles[`weatherChoice${index}`]} ${weather === option.id ? styles.weatherChoiceActive : ''}`}
                  aria-pressed={weather === option.id}
                  onClick={() => setWeather(option.id)}
                >
                  <span className={styles.choiceIcon} aria-hidden="true">{option.icon}</span>
                  <span>{option.label}</span>
                </button>
              ))}
              <button
                type="button"
                className={`${styles.dialKnob} ${styles[`dialKnob${currentIndex}`]}`}
                aria-label={`Next weather condition. Current: ${weatherOptions[currentIndex].label}`}
                onClick={advanceWeather}
              ><span aria-hidden="true" /></button>
            </div>
          </div>
          <Link href={isHome ? '/products/outdoor-pylon-monument-sign' : '/contact?product=pylon'} className={styles.cta}>
            {isHome ? 'EXPLORE PYLON SIGNS' : 'PLAN YOUR PYLON SIGN'} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={styles.visual} role="img" aria-label={`Installed multi-tenant pylon sign shown in ${weatherOptions[currentIndex].label.toLowerCase()} conditions`}>
          <div className={styles.frame}>
            <div className={styles.image} />
            <div className={styles.atmosphere} aria-hidden="true" />
            <div className={styles.snow} aria-hidden="true" />
            <div className={styles.caption}>
              <span>WEATHER SCENE PREVIEW</span>
              <span>BASED ON A DALIAN PROJECT PHOTO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
