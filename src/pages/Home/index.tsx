import cardapio from 'data/cardapio.json'
import styles from './home.module.scss'
import stylesTema from 'styles/tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/prato';

export default function Home(){
    let pratosRecomendados = [...cardapio];

    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

    const navigate = useNavigate();

    function redirectDetails(prato: Prato){
        navigate(`/dish/${prato.id}`, {state: { prato }, replace: true})
    }

    return(
        <section>
            <h3 className={stylesTema.titulo}>
                Recomendações da Cozinha
            </h3>

            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}
                        onClick={() => redirectDetails(item)}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button 
                            className={styles.recomendado__botao}
                            onClick={() => redirectDetails(item)}
                            >Ver mais
                        </button>
                    </div>
                ))}
            </div>

            <h3 className={stylesTema.titulo}> Nossa Casa! </h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa} alt="Casa do Dudu" />
                <div className={styles.nossaCasa__endereco}>
                    Av. Belo Horizonte, 105 <br /> <br /> Betim - MG
                </div>
            </div>
        </section>
    )
}