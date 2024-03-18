import { useEffect, useState } from "react";
import { getProducts } from  "./actions/producto.api";
import { Loading, Navbar, TabCategories,  Title, CardProduct } from "./components";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts().then((res) => {
      if (res) {
        setTimeout(() => setLoading(false), 1000);
        setProducts(res);
      }
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <Title title_page="MI TIENDA ONLINE" />
      <TabCategories />
      <section className="py-10 text bg-red-500">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         <CardProduct/>
         <CardProduct/>
         <CardProduct/>
         <CardProduct/>
         <CardProduct/>
         
        </div>
      </section>
      <h1>{JSON.stringify(products)}</h1>
    </div>
  );
};
