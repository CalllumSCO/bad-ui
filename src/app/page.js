"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Textwall from "./components/textwall";
import ConfirmReadButton from "./components/ConfirmReadButton";

import { useState, useEffect } from 'react';
import GoodForm from "./components/GoodForm";



export default function Home() {

  const [countdown, setCountdown] = useState(60);
  const [checkRead, setCheckread] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);
    return () => clearInterval(interval);
}, [countdown]);


    const action = () => {
      setButtonClicked(true);

      if (countdown <= 0){
        setCheckread(true);
      }
    }

  return (
    <main>
      <h2>play for an enhanced experience</h2>
      <audio controls loop>
            <source className = 'skibidi' src="./skibidi-toilet.mp3" type="audio/ogg"></source>
      </audio>
      <br></br>
      <h1>Welcome to my very important form!!!!</h1>
      <br />
      <h2>Are you ready for the best form experience of your entire life??????</h2>

      <h2>Well first, let's make sure you know what a form is!!!</h2>

     <Textwall />
     {buttonClicked && 
      <h1>YOU HAVE NOT READ THE DISCRIPTION, PLEASE MAKE SURE YOU ARE A FORM EXPERT. YOU HAVE TO WAIT THIS LONG AS PUNISHMENT       {countdown}</h1>
    }
     <button onClick={action}>I have totally read this, and I am now a certfied EXPERT on forms 🔥💯</button>

     {buttonClicked && countdown < 0 && <GoodForm />}
    </main>
  )
}