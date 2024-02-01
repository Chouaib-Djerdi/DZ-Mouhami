import RatingStar from "./RatingStar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ResultCard = ({
  pfp,
  firstName,
  lastName,
  rating,
  positionLatLng,
  categories,
  phoneNumber,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <div className="flex gap-3">
        <img src={pfp} alt="avocat-pfp" className="rounded-lg" />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Link to={`/profile/`}>
              <h1 className="text-xl font-bold">
                {lastName} {firstName}
              </h1>
            </Link>
            <RatingStar rating={rating} />
          </div>
          <div>
            <p className="uppercase font-semibold tracking-wide text-muted-foreground">
              Location
            </p>
            <p>{positionLatLng.address}</p>
            <p className="uppercase font-semibold tracking-wide text-muted-foreground">
              Categories
            </p>
            <p>{categories.map((obj) => `${obj.value}, `)}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button size="lg" variant="outline">
          {phoneNumber}
        </Button>
        <Button size="lg" variant="lightBlue">
          Prendre un RDV
        </Button>
        <Button size="lg">Message</Button>
      </div>
    </div>
  );
};

export default ResultCard;
