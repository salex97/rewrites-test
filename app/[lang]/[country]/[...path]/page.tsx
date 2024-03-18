interface PageProps {
  params: {
    lang: string;
    country: string;
    path: string[];
  };
}

export async function generateStaticParams() {
  return [
    {
      params: {
        slug: ["de", "DE", "static"],
      },
    },
  ];
}

// Generate a page for each slug
export default async function PageSlugRoute({ params }: PageProps) {
  return (
    <div className="">
      <h1>Page Slug Route</h1>
      <p>Language: {params.lang}</p>
      <p>Country: {params.country}</p>
      <p>Path: {JSON.stringify(params.path)}</p>
    </div>
  );
}
