import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { comments } from "../../utils";
import RatingComment from "../RatingComment";

const Commentaires = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Commentaires</CardTitle>
          <CardDescription>
            Consultez et répondez aux avis de vos clients
          </CardDescription>
        </CardHeader>
        <CardContent>
          {comments.map((comment, index) => (
            <RatingComment key={index} {...comment} reply />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Commentaires;
