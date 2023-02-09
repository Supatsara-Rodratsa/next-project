import products from "@/content/products.json";
import Link from "next/link";

const AllProductsPage = () => (
  <div>
    {products.map((x) => (
      <Link key={x.id} href={`/products/${x.id}`}>
        {x.name}
      </Link>
    ))}
  </div>
);

export default AllProductsPage;
