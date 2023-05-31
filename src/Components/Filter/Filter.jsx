import React from "react";

import "./Filter.css";

import Label from "../Label/Label";

const Filter = (props) => {
  const handleFilterChange = (event) => {
    props.onFilterChange(event); // Call the onFilterChange function passed from the parent component
  };

  return (
    <>
      <div className="container-filter">
        <form>
          <p>Produto:</p>
          {/* Add value and onChange props to the input element */}
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
            value={props.filterValues.price}
            onChange={handleFilterChange}
          />
          <br />
          <span>R$0 - R$1000</span>

          <label htmlFor="type">Tipo:</label>
          <br />
          {/* Add value and onChange props to the select element */}
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