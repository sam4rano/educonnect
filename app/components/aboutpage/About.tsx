// Client-side component (About page)
'use client';

import { useQuery } from "@tanstack/react-query";
import { fetchAllUser } from "@/app/data/query/useGetAllProfile";

const About = () => {
  // Using useQuery with the custom hook `fetchAllUser`
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-users'],
    queryFn: fetchAllUser,
  });

  console.log("data", data);

  // Show loading state while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show error state if an error occurred
  if (error) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  return (
    <div className="h-40 w-full bg-pink-400">
      About
    </div>
  );
};

export default About;
