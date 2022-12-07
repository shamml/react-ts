import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!value.trim().length) {
      setError("Please enter valid title");
      return;
    }

    productData.title = value;

    const { data } = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(data);
  };

  const changeHandler = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title"
      />
      {error && <div>{error}</div>}
      <button type="submit" className="py-2 px-4 border bg-yellow-400">
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
