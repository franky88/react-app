interface Props {
  title: string;
  color: string;
  onClick: () => void;
}

const Button = ({ title, color, onClick }: Props) => {
  return (
    <>
      <button
        type="button"
        className={"btn btn-sm btn-outline-" + color}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
