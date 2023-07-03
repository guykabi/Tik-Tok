import sanityClient from '@sanity/client';

  const client = sanityClient({
        projectId: "4mg84dtz",
        dataset: "production",
        apiVersion: "2023-05-29",
        useCdn: false,
        token: process.env.NEXT_PUBLIC_API_TOKEN
  });
  
  export default client