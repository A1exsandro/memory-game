import './styles.css';

export interface CardProps {
  id: string;
  flipped?: boolean;
  back: string;
  handleClick?: (id: string) => void;
}

export function Card({ flipped = false, back, handleClick, id }: CardProps) {
  const cardContentClassName = ['card_content'];
  flipped && cardContentClassName.push('card_content--flipped');

  const handleClickfn = (id: string) => {
    if(handleClick) {
      handleClick(id);
    }
  }

  return(
    <div className="card" onClick={() => handleClickfn(id)}>
      <div className={cardContentClassName.join(' ')}>
        <div className="card_face card_face--front">Front</div>
        <div className="card_face card_face--back">{back}</div>
      </div>
    </div>
  );
}