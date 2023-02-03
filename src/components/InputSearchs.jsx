import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterInputProductsThunk } from "../store/slices/product.slice";

const InputSearchs = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="inputSearchs">
      <InputGroup className="mb-3" style={{ width: "90%",border:'1px solid #ff3d00' }}>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => dispatch(filterInputProductsThunk(inputValue))}
          className="btn_search">
          <img src="./image/search.svg" alt="" />
        </button>
      </InputGroup>
    </div>
  );
};

export default InputSearchs;
