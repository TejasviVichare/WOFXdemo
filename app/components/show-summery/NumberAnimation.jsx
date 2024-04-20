'use client'
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function NumberAnimation({ n }) {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <span>{counterOn && <CountUp start={0} end={n} duration={3} delay={0} />}</span>
        </ScrollTrigger>
    )
}

export default NumberAnimation