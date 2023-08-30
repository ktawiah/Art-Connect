import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { FaHeart } from "react-icons/fa";

interface Data {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
  description: string;
  user: {
    first_name: string;
  };
  likes: number;
}

const ArtCards = () => {
  const [artData, setArtData] = useState({});
  const { data, isLoading, error } = useQuery({
    queryKey: ["artData"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.unsplash.com/search/photos?query=art&client_id=ZgIG-YKEQ1D69jiKLiztPyIpYbwvXx5ZOW8ZKwxcSLY"
      );
      return data;
    },
    cacheTime: 1000 * 60 * 60 * 24,
  });

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center p-4">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const cardElement = data.results.map((art: Data) => (
    <Card
      key={art.id}
      className="w-48 h-56 m-2 rounded-lg overflow-hidden shadow-md hover:bg-gray-100 transition duration-300 ease-in-out p-2 flex flex-col items-center hover:scale-105 cursor-pointer"
    >
      <CardContent>
        <Image
          alt={art.alt_description}
          src={art.urls.small}
          width={60}
          height={20}
          className="h-full"
        />
      </CardContent>
      <CardDescription className="text-xs">
        {`${
          art.description &&
          String(art.description || art.alt_description).slice(0, 50)
        }...`}
      </CardDescription>
      <CardFooter className="flex flex-col gap-1">
        <div className="flex text-sm gap-2 whitespace-nowrap">
          Creator: {art.user.first_name}
        </div>
        <div className="text-sm flex whitespace-nowrap items-center gap-1 justify-self-end">
          <FaHeart className="text-red-600" />
          {art.likes}
        </div>
      </CardFooter>
    </Card>
  ));
  return (
    <div className="flex flex-wrap justify-center bg-white">{cardElement}</div>
  );
};

export default ArtCards;
