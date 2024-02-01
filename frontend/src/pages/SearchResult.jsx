import { useParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avocats, wilayas } from "../utils";
import { ResultCard } from "../custom-components";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const SearchResult = () => {
  const { input } = useParams();
  const [result, setResult] = useState([]);
  const [rating, setRating] = useState(null);
  const [location, setLocation] = useState(null);
  const [category, setCategory] = useState(null);
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleLocationChange = (event) => {
    console.log(event.target);
    setLocation(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    let filteredResults = Avocats;

    if (rating !== null) {
      filteredResults = filteredResults.filter(
        (avocat) => avocat.rating >= parseInt(rating.replace("stars", ""))
      );
    }

    if (location !== null) {
      filteredResults = filteredResults.filter(
        (avocat) => avocat.location === location
      );
    }

    if (category !== null) {
      filteredResults = filteredResults.filter((avocat) =>
        avocat.categories.includes(category)
      );
    }

    setResult(filteredResults);
  }, [rating, location, category]);

  return (
    <div className="py-10 lg:px-40 md:px-20 px-5 space-y-10">
      <h1 className="text-4xl font-semibold">Avocats nommés {input}</h1>
      <div className="flex gap-5">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder="Évaluation"
              onChange={handleRatingChange}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4stars">4 Stars & Above</SelectItem>
            <SelectItem value="3stars">3 Stars & Above</SelectItem>
            <SelectItem value="2stars">2 Stars & Above</SelectItem>
            <SelectItem value="1star">1 Star & Above</SelectItem>
            <SelectItem value="0star">0 Star & Above</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleLocationChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Wilaya" />
          </SelectTrigger>
          <SelectContent>
            {wilayas.map((wilaya) => {
              return (
                <SelectItem key={wilaya.code} value={wilaya.nom}>
                  {wilaya.nom}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder="Catégories"
              onChange={handleCategoryChange}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Droit Civil</SelectItem>
            <SelectItem value="dark">Droit Penal</SelectItem>
            <SelectItem value="system">Droit Judiciaire</SelectItem>
          </SelectContent>
        </Select>
        {/* <Button>Filtrer</Button> */}
      </div>
      <h1 className="text-lg font-semibold">Il y a 1 avocats avec 0 avis</h1>
      {result.map((avocat, index) => (
        <div key={index}>
          <ResultCard {...avocat} />
          <Separator />
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
