import { cn } from "cn";
import { Price, PriceValue } from "@/components/products/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export interface ProductResponse {
  num?: number;
  id?: number;
  images: string[];
  title: string;
  description: string;
  price: number;
}

const ProductCardComponent = ({
  id,
  images,
  title,
  description,
  price,
}: ProductResponse) => {
  const PLACEHOLDER =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHQ2QS9U-YKh9fPiHsVWMcXMFKbZXlPQ_BpGCWYDTbjkaaakSgu-PZIJU&s=10";
  const imageSrc =
    images && images.length > 0 && images[0] ? images[0] : PLACEHOLDER;

  const cardContent = (
    <Card className="h-full overflow-hidden p-0 rounded-2xl border bg-card transition-shadow hover:shadow-md">
      <CardHeader className="relative block p-0">
        <AspectRatio ratio={1.268115942} className="overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={500}
            className="block size-full object-cover object-center"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-2 p-4">
        <CardTitle className="text-base font-bold line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
        <div className="mt-auto pt-2">
          <Price onSale={price != null} className="text-sm font-semibold">
            <PriceValue price={price} currency={"USD"} variant="regular" />
            <PriceValue price={price} currency={"USD"} variant="sale" />
          </Price>
        </div>
      </CardContent>
    </Card>
  );

  if (id) {
    return (
      <Link
        href={`/products/${id}`}
        className={cn("block w-full transition-opacity hover:opacity-90")}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cn("block w-full transition-opacity hover:opacity-90")}>
      {cardContent}
    </div>
  );
};

export { ProductCardComponent };
