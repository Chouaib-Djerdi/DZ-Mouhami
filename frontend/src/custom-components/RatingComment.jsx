import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import RatingStar from "./RatingStar";

const RatingComment = ({ title, rating, username, comment, timestamp }) => {
  return (
    <div>
      <Card className="border-none shadow-none">
        <CardHeader>
          <RatingStar rating={rating} />
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>
            {username} | {timestamp}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{comment}</p>
        </CardContent>
      </Card>
      <Separator />
    </div>
  );
};

export default RatingComment;
