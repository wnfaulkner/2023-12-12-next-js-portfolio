import Image from 'next/image'
import styles from "@/styles/About.module.css" //any class defined i this model will be available with dot notation
import { useState } from "react";

export default function About() {
  const [fontsize, setFontSize] = useState(2)
  return (
    <>
      <h1>About Me</h1>
      <p className={styles.greenColor}>Stuff & things</p> {/* Next.js way of getting the css class*/}

      <style jsx>{`
        .fontSize {
          font-size: 2rem;
        }
      `}
      </style>

      <p className="fontSize">This is my brand statement.</p>

      <button onClick={() => setFontSize(fontSize + 1)}>+ Font Size</button>

      <Image
        src="/about-me-photo.jpg"
        alt="me enjoying the outdoors"
        width={800}
        height={600}
      />
    </>
  )
}