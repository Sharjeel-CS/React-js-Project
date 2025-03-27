import { useMemo, useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState(""); // Separate search state
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value.trim();
    if (value === "") return;

    setItems((prev) => [...prev, value]); // Fix prev typo and use correct update method
    inputRef.current.value = "";
  }

  function onChange(e) {
    setQuery(e.target.value);
  }

  // Filter items based on search query without modifying original list
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  return (
    <>
      <label>Search:</label>
      <input onChange={onChange} type="search" value={query} />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        <label>New Item:</label> <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
}

export default App;
//Yi Shi Du Zun (Ancient Supremacy)