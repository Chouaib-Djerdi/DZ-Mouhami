import RatingStar from "./RatingStar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ResultCard = ({ pfp, name, rating, location, categories }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <img src={pfp} alt="avocat-pfp" className="rounded-lg" />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Link to={`profile/`}>
              <h1 className="text-xl font-bold">{name}</h1>
            </Link>
            <RatingStar rating={rating} />
          </div>
          <div>
            <p className="uppercase font-semibold tracking-wide text-muted-foreground">
              Location
            </p>
            <p>{location}</p>
            <p className="uppercase font-semibold tracking-wide text-muted-foreground">
              Categories
            </p>
            <p>{categories.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button size="lg" variant="outline">0775-23-45-99</Button>
        <Button size="lg" variant="lightBlue">Prendre un RDV</Button>
        <Button size="lg">Message</Button>
      </div>
    </div>
  );
};

export default ResultCard;
