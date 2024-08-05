 import {MouseEvent} from "react"
 function ListGroup() {
  let items = ["islamabad", "karachi", "lahore", "peshawar", "pindi"];
  const handleClick=(event) =>console.log(event)
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
