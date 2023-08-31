import Button from "./Button";

interface messageProps {
  title: string;
  message: string;
  onClick: () => void;
}

function Card({ title, message, onClick }: messageProps) {
  return (
    <>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <strong>{title}</strong>
          <p>{message}</p>
          <Button title="View details" color="success" onClick={onClick} />
        </div>
      </div>
    </>
  );
}

export default Card;
