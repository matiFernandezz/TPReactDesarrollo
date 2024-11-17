import { useState } from "react";
import { Header } from "./Header/Header";
import { FormProduct } from "./FormProduct/FormProduct";
import { ListProduct } from "./ListProduct/ListProduct";


interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

export const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]);

  const handleAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem]);
  };

  return (
    <div>
      <Header />
      <h2 className="text-center m-4">Formulario</h2>
          <FormProduct handleAddProduct={handleAddProduct} />
          <h2 className="text-center">Productos</h2>
          {products.length > 0 ? ( 
            <ListProduct arrItem={products}/>) 
            : ( <h3 className="text-center">No hay productos</h3>)}
  </div>
)}