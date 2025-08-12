
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/api";
import ProductClient from "@/components/shared/ProductClient/ProductClient";
type Props = {
    params: {
        slug: string;
    };
};

export default async function ProductDetailPage({ params }: Props) {
    const { slug } = await params; 
    const product = await getProductBySlug(slug);

    if (!product) {
        return notFound();
    }

    return <ProductClient product={product} />;
}
