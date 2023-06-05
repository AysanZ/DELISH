import data from "../menu.json";
import css from "../styles/Menu.module.css";

export default function Menu() {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make you Fall In Love</span>
      </div>

      {/* pizzas */}
      <div className={css.menu}>
        {data.map((card, i) => (
          <div className={css.pizza}>
            <div className={css.imageWrapper}>
              <img src={card.src} alt="" />
            </div>
            <span>{card.name}</span>
            <span>
              <span style={{ color: "var(--themeYellow)" }}>$</span>{" "}
              {card.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
