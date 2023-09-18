import styles from "@styles/Header.module.css"
import Image from "next/image"
import Logo from "../assets/Untitled.jpg"

export default function Header() {
    return (
        <div className={styles.main}>
            <Image 
            src={Logo}
            width={70}
            height={70} /** these values are placeholders, real style for measurements are in the css */
            className={styles.check}
            alt="logo"/>
            <button>Casual</button>
            <button>Career</button>
            <button>Competitive</button>
        </div>
    )
}