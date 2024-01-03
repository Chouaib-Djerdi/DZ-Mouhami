import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RatingStar from "./RatingStar";
import { Link } from "react-router-dom";

const ProfileCard = ({
  name,
  location,
  rating,
  pfp,
  categories,
  description,
}) => {
  return (
    <Card>
      <CardHeader className="flex-row gap-5 p-3">
        <img src={pfp} alt="avocat-pfp" className="rounded-lg" />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Link to={`profile/`}>
              <CardTitle>{name}</CardTitle>
            </Link>
            <RatingStar rating={rating} />
          </div>
          <div>
            <CardDescription className="uppercase font-semibold tracking-wide">
              Location
            </CardDescription>
            <CardDescription>{location}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3 ">
        <p className="text-gray-500 uppercase font-semibold tracking-wide">
          Categories
        </p>
        <p>{categories.join(", ")}</p>
      </CardContent>
      <CardFooter className="p-3 flex-col items-start">
        <p className="text-muted-foreground uppercase font-semibold tracking-wide">
          Description
        </p>
        <p className="line-clamp-3">{description}</p>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
