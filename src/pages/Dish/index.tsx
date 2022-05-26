import styles from "./dish.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import cardapio from "data/cardapio.json";
import Tags from "components/Tags";
import NotFound from "pages/NotFound";
import Base from "components/Base";

export default function Dish() {
  const { id } = useParams();
  const prato = cardapio.find((item) => item.id === Number(id));
  if (!prato) {
    return <NotFound />;
  }

  const navigate = useNavigate();

  return (
    <Base>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {"< Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
          <Tags {...prato} />
        </div>
      </section>
    </Base>
  );
}
