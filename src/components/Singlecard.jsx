import "./Singlecard.css";

export default function SingleCard({ card, handleChoice, flipped }) {

const handleClick = () => {
    handleChoice(card)
}


  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          src="/img/cardBack.png"
          alt="card back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
