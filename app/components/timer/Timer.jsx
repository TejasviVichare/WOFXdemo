'use client'
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Timer.module.css";

const Home = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/12/2024 23:59:59");


    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {partyTime ? (
        <>
          <h1>Happy new year!</h1>
          <video autoPlay loop muted>
            <source src="/party.mp4" />
          </video>
        </>
      ) : (
        <>
          <div className="timer-wrapper flex">
            <div className="timer-inner flex gap-10 md:flex flex-wrap justify-center">
              <div className={styles.timersegment}>
                <span className={styles.time}>{days}</span>
                <span className={styles.lebel}>Days</span>
              </div>
              
              <div className={styles.timersegment}>
                <span className={styles.time}>{hours}</span>
                <span className={styles.lebel}>Hours</span>
              </div>
              
              <div className={styles.timersegment}>
                <span className={styles.time}>{minutes}</span>
                <span className={styles.lebel}>Minutes</span>
              </div>
              
              <div className={styles.timersegment}>
                <span className={styles.time}>{seconds}</span>
                <span className={styles.lebel}>Seconds</span>
              </div>
            </div>
          </div>
          {/* <Image
            alt="background image"
            src="/image.webp"
            layout="fill"
            quality={100}
          /> */}
        </>
      )}
    </div>
  );
};

export default Home;
