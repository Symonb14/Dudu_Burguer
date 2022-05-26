import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './footer.module.scss'

export default function Footer(){
    return (
        <footer className={styles.footer}>
                <Logo />
        </footer>
    )
}