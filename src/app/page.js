import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/product-card";

export default async function Home() {
  try {
    const getAllProducts = await fetchAllProducts();
    
    if (!getAllProducts?.data?.length) {
      return (
        <div className="min-h-[80vh] flex items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-600">No products available</h2>
        </div>
      );
    }

    return (
      <div>
        <h1 className="text-3xl font-bold text-center my-8">Shopping Cart</h1>
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
          {getAllProducts.data.map((productItem) => (
            <ProductCard key={productItem.id} item={productItem} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600">Error loading products</h2>
      </div>
    );
  }
}