/* eslint-disable no-unreachable */
import { Link } from "react-router-dom";
import styles from "./dog.module.css";

export default function Dog({ name, image, temperament, weight, id }) {
  return (
    <div className={styles.container}>
      <Link to={`/dogs/${id}`}>
        <div className={styles.card}>
          <img alt="breed" className={styles.img} src={image} />
          <div className={styles.info}>
            <h1 className={styles.title}>
              {name[0].toUpperCase() + name.slice(1)}
            </h1>
            <p className={styles.weight}>Weight: {weight} kg</p>
            <p className={styles.temperaments}>Temperaments: {temperament}</p>

            {/* <ul className={styles.unl}>
              {temperament ? (
                temperament.map((tp) => (
                  <li className={styles.element} key={tp}>
                    {tp}
                  </li>
                ))
              ) : (
                <li className={styles.element} key="none">
                  None
                </li>
              )}
            </ul> */}
          </div>
        </div>
      </Link>
      {/* <div>
        <Link to={`/dogs/${id}`}>
        <button className={card.button}>Ver Detalles</button>
        </Link>
      </div> */}
    </div>
  );

  // eslint-disable-next-line no-lone-blocks
}

/* <p className={card.title}>Peso:</p>
<p className={card.title}>Temperamento:</p>
<p className={card.descriptions}>{temperament}</p>
<p className={card.descriptions}>{weight}</p> */
//<button className={card.button}>Ver Detalles</button>
