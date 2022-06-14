import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { toggleFavorites } from "../store/user/slice";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Pizza Explorer</h1>

      <p>
        Welcome back, <strong>{user.name}</strong>
      </p>
      <p>TODO: the list of pizzas</p>
      <p>
        There are <strong>{pizzas.length}</strong> pizzas
      </p>
      <ul>
        {pizzas.map((p) => {
          return (
            <li
              key={p.id}
              style={{
                border: "1px solid white",
                listStyle: "none",
                marginBottom: "20px",
              }}
            >
              <h4>
                {p.name}
                <button onClick={() => dispatch(toggleFavorites(p.id))}>
                  {user.favorites.includes(p.id) ? "♥" : "♡"}
                </button>
              </h4>
              <img src={p.image} />
              <p>{p.description}</p>
              <p>Times bought: {p.bought}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PizzaList;
