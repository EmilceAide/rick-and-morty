import styles from "./cards.module.css";
import Pagination from '../pagination/Pagination'

const Cards = ({ characters, onClose, isLoading}) => {


  if (characters.length === 0) {
    return (
      <div className={styles.container}>
        <div
          style={{
            color: "#fff",
            padding: "20px 50px",
            fontFamily: 'sans-serif',
            textAlign: "center",
            fontSize:'0.8em',
          }}
        >
          <h1>   ¡Bienvenido! </h1>
          <h2>
           Aquí puedes añadir cartas de los personajes que más te gusten. ¿Que estas esperando?
          </h2>
          <h2>Comience a construir su colección personal ahora.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
  <Pagination data={characters} itemsPerPage={8} pagesToShow={5} onClose={onClose} isLoading={isLoading} />

    </div>
  );
};

export default Cards;
