import React, { useState } from "react";

const Order = (props) => {
  return (
    <div>
      <form onsubmit="myfunc(event)" />
      <h3>Enter Details</h3>
      <div>
        <label>Order Name</label>
        <input type="text" name="name" id="amount" />
      </div>
      <div>
        <label>Order Cost</label>
        <input type="number" name="cost" id="amount" />
      </div>
      <div>
        <label>Menu</label>
        <select name="menu" id="etype">
          <option value="biryani">Biryani</option>
          <option value="Mmndi">Mandi</option>
          <option value="tea">Tea</option>
          <option value="coffee">Coffee</option>
          <option value="friedRice">FriedRice</option>
          <option value="noodles">Noodles</option>
          <option value="salad">Salad</option>
          <option value="curry">Curry</option>
        </select>
      </div>
      <div>
        <label>Select Table</label>
        <select name="table" id="table_id">
          <option value="table1">Table1</option>
          <option value="table2">Table2</option>
          <option value="table3">Table3</option>
        </select>
      </div>
    </div>
  );
};

export default Order;
