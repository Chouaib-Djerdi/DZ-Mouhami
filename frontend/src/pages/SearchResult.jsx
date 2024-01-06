import { useParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { profile, wilayas } from "../utils";
import { ResultCard } from "../custom-components";
import { Separator } from "@/components/ui/separator";

const SearchResult = () => {
  const { input } = useParams();

  return (
    <div className="py-10 lg:px-40 md:px-20 px-5 space-y-10">
      <h1 className="text-4xl font-semibold">Avocats nommés {input}</h1>
      <div className="flex gap-5">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Évaluation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4stars">4 Stars & Above</SelectItem>
            <SelectItem value="3stars">3 Stars & Above</SelectItem>
            <SelectItem value="2stars">2 Stars & Above</SelectItem>
            <SelectItem value="1star">1 Star & Above</SelectItem>
          </SelectContent>
        </Select>
        <Select>
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
            <SelectValue placeholder="Catégories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Droit Civil</SelectItem>
            <SelectItem value="dark">Droit Penal</SelectItem>
            <SelectItem value="system">Droit Judiciaire</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <h1 className="text-lg font-semibold">
        Il y a 825 avocats avec 7060 avis
      </h1>
      <ResultCard {...profile} />
      <Separator />
      <ResultCard {...profile} />
    </div>
  );
};

export default SearchResult;
