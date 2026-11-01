import { notFound } from "next/navigation";
import {
  categoriesContent,
  getCategoryContent,
} from "@/data/categoriesContent";
import { ServiceCategoryContent } from "./ServiceCategoryContent";

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return categoriesContent.map((cat) => ({ category: cat.id }));
}

export function generateMetadata({ params }: Props) {
  const category = getCategoryContent(params.category);
  if (!category) return { title: "Service Category" };

  return {
    title: `${category.name} | Services`,
    description: category.description,
  };
}

export default function ServiceCategoryPage({ params }: Props) {
  const category = getCategoryContent(params.category);
  if (!category) notFound();

  return <ServiceCategoryContent category={category} />;
}
