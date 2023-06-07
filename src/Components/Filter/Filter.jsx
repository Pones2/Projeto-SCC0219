import React, {useState} from "react";

import "./Filter.css";

const Filter = (props) => {
    const [maxPrice, setMaxPrice] = useState(1000);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    // Update the filter value
    props.onFilterChange(event);

    // Update the maxPrice if the price input changes
    if (name === "price") {
      setMaxPrice(value);
    }
  };

  // the input can be changed to the Label component, but to avoid errors it will stay this way for now
  return (
    <>
      <div className="container-filter">
        <form id="class">
          <p>Produto:</p>
          <input
            type="text"
            id="name"
            name="name"
            value={props.filterValues.name}
            onChange={handleFilterChange}
          />
          <p>Preço:</p>
          <input
            type="range"
            id="price"
            name="price"
            min="0"
            max="1000"
            step = "10"
            value={props.filterValues.price || maxPrice}
            onChange={handleFilterChange}
          />
          <br />
          <span>R$0 - R${maxPrice}</span> <br></br>

          <label htmlFor="type">Tipo:</label>
          <br />
          <select
            id="type"
            name="type"
            value={props.filterValues.type}
            onChange={handleFilterChange}
          >
            <option value="todos">Todos</option>
            <option value="alimento">Alimentos</option>
            <option value="acessorio">Acessorios</option>
            <option value="brinquedo">Brinquedos</option>
            <option value="medicamento">Medicamentos</option>
          </select>

          <button type="submit">Filtrar</button>
        </form>
      </div>
    </>
  );
};

export default Filter;