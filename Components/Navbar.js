import styles from "../styles/Navbar.module.css"


export default function Navbar() {
  return (
   <nav className={styles.nav}>
        <ul className={styles.ul}>
            <li>Home</li>
            <li>Posts</li>
            <li>Users</li>
        </ul>
      </nav>
  )
}