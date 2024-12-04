import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>
          ElectroWorld
          <br />
          ElectroWorld everything at one place
        </h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
          dicta illum vero culpa cum quaerat architecto sapiente eius non
          soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
          perspiciatis?
        </h2>
        <Link to="/Product" className="cta">
          View Products
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
