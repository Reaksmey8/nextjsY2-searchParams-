import ProductDetailDisplayComponent from "@/components/products/detail/ProductDetailDisplayComponent";
import ProductDetailUseSWRComponent from "@/components/products/detail/ProductDetailUseSWRComponent";
import RecommenDationProduct from "@/components/products/RecommandationCategory";
import { Suspense } from "react";

const getSingleProduct = (proId: string | number) =>
  fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`)
    .then((data) => data.json())
    .then((product) => product)
    .catch((error) => error);

export default async function ProductDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  console.log(`ProductId = `, id);

  const productData = await getSingleProduct(id);
  const resolvedSearchParams = await searchParams;
  const category =
    (resolvedSearchParams?.category as string) || productData?.category || "";

  return (
    <section className="container mx-auto p-4 space-y-8">
      {category && (
        <h1 className="text-lg font-medium text-muted-foreground">
          Category: <span className="font-semibold text-foreground capitalize">{category}</span>
        </h1>
      )}
      <Suspense fallback={<p className="text-center p-8">Loading product details...</p>}>
        <ProductDetailDisplayComponent product={Promise.resolve(productData)} />
      </Suspense>

      {/* recommendation of product within category */}
      {category && <RecommenDationProduct category={category} />}
    </section>

    // <ProductDetailUseSWRComponent proId={id}/>
  );
}
