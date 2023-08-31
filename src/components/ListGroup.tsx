import { useState } from "react";

interface ListGroupProps {
  items: string[];
  headings: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, headings, onSelectedItem }: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <ul className="list-group list-group-flush mt-3">
        <strong>{headings}</strong>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            aria-current="true"
            onClick={() => {
              setSelectedItem(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
