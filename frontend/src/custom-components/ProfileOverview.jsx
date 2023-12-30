import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import RatingStar from "./RatingStar";
import {
  calendarTickIcon,
  locationTickIcon,
  verifyIcon,
} from "../assets/icons";

const ProfileOverview = ({ name, pfp, location, rating, commentsNumber }) => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-3">
            <img src={pfp} alt="avocat-pfp" className="w-48 rounded-lg" />
            <Button>Prendre un RDV</Button>
          </div>
          <div className="flex flex-col gap-2">
            <CardTitle className="text-4xl">{name}</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Avocat de la famille à {location}
            </CardDescription>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <RatingStar rating={rating} />
                <p className="font-semibold">{rating}</p>
              </div>
              <p className="text-primary">{commentsNumber} Commentaires</p>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <Card>
            <CardHeader className="gap-3">
              <CardTitle>Licence depuis 15 ans</CardTitle>
              <Separator />
              <div className="flex flex-col gap-2 text-graydark">
                <div className="flex gap-3 items-center">
                  <img src={locationTickIcon} alt="location-icon" />
                  <p>Wilaya</p>
                  <p>Setif</p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={calendarTickIcon} alt="calendar-icon" />
                  <p>Acquis</p>
                  <p>Acquis</p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={verifyIcon} alt="verify-icon" />
                  <p>Status</p>
                  <p>Actif et autorisé à exercer le droit</p>
                </div>
              </div>
            </CardHeader>
            {/* <CardContent>
                <p>Card Content</p>
              </CardContent> */}
            <CardFooter>
              <p>
                We have not found any instances of professional misconduct for
                this lawyer.
              </p>
            </CardFooter>
          </Card>
        </div>
      </CardHeader>
      {/* <CardContent></CardContent>

      <CardFooter></CardFooter> */}
    </Card>
  );
};

export default ProfileOverview;
