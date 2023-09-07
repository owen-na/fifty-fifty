import styles from "@styles/Header.module.css"

export default function Header() {
    return (
        <div className={styles.main}>
            <button>Casual</button>
            <button>Career</button>
            <button>Competitive</button>
        </div>
    )
}