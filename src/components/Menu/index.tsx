import { ReactComponent as Logo } from 'assets/logo.svg';
import {Link} from 'react-router-dom'
import styles from './menu.module.scss'


export default function Menu(){

    const rotas =[{
        label: 'Home',
        to: '/'
    }, {
        label: 'Menu',
        to: '/cardapio'
    }, {
        label: 'About',
        to: '/sobre'
    }]

    return(
        <nav className={styles.menu}>
                <Logo />

                <ul className={styles.menu__list}>
                    {rotas.map((rota, index) => (
                        <li key={index} className={styles.menu__link}>
                            <Link to={rota.to}>{rota.label}</Link>
                        </li>
                        )
                    )}
                </ul>
            </nav>
    )
}