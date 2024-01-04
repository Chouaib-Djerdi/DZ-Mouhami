import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import RatingStar from "./RatingStar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
const RatingComment = ({
  title,
  rating,
  username,
  comment,
  timestamp,
  reply,
}) => {
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
        <CardContent className="space-y-3">
          <p>{comment}</p>
          {reply && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Répondre</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Répondez à l&apos;avis de votre client
                  </DialogTitle>
                  <DialogDescription>
                    Veuillez écrire votre réponse à votre client ci-dessous
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Votre Réponse" />
                </div>
              </DialogContent>
            </Dialog>
          )}
        </CardContent>
      </Card>
      <Separator />
    </div>
  );
};

export default RatingComment;
