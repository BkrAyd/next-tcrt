import React from "react";
import { DataTable } from "../_components/Datatable/data-table";
import { columns, Payment } from "../_components/Datatable/columns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Hakkımda",
  description: "Bekir Aydağan Hakkımda sayfası",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": 1,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      product: "Product 1",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      code: "123456",
    },
    {
      id: "728ed52f",
      product: "Product 2",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      code: "123456",
    },
    // ...
  ];
}
const AboutPage = async () => {
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Product",
    author: "Bekir Aydağan",
    url: "https://bekiraydagan.com",
    isPublished: true,
    sameAs: [
      "https://www.facebook.com/bekiraydagan",
      "https://twitter.com/bekiraydagan",
      "https://www.instagram.com/bekiraydagan/",
      "https://www.linkedin.com/in/bekiraydagan/",
    ],
    name: "Bekir Aydağan",
    tags: [
      "bekir aydağan",
      "Web Developer",
      "Software Engineer",
      "nextjs",
      "mobile developer",
      "typescript",
      "javascript",
      "reactjs",
      "nodejs",
    ],
  };

  const data = await getData();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />

      <div className="container mx-auto py-10 rounded-md mt-1 border p-1">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default AboutPage;
