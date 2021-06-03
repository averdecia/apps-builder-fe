import logo from './Logo.svg';
import styles from './Logo.module.css'

const Logo = () => (
    <img src={logo} className={styles.AppLogo} alt="logo" />
)

export default Logo