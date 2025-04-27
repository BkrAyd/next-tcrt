import { categories } from "@/constans";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = categories.find((product) =>
    product.href.includes(params.slug)
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ShopDetailPage({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}