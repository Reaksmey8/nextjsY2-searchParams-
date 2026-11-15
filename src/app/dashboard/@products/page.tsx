import ProductCardListComponents from "@/components/products/ProductCardListComponents";

export default function ProductPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-emerald-600">Products Section</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Products module active on dashboard. You can also view this individually at{" "}
          <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">/dashboard/products</span>.
        </p>
      </div>
      <ProductCardListComponents />
    </div>
  );
}
