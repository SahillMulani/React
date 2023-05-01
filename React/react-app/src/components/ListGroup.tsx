function ListGroup() {
  let items = ["New York", "Delhi", "Chennai", "Kolkata"];
  items = [];

  return (
    <>
      <h1>List of Elements</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group ">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
