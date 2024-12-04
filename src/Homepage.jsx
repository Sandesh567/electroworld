import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main>
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
        <Link to="/Product">View Products</Link>
      </section>
    </main>
  );
}

export default Homepage;
