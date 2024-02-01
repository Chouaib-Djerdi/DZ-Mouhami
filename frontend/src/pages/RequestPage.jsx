import { useParams } from "react-router-dom";

import { Avocat } from "../utils";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RequestPage = () => {
  const { id } = useParams();

  return (
    <div className="md:p-10 p-5">
      <h1 className="text-2xl font-bold mb-5">Avocat ID : {id}</h1>
      <Separator />
      <Card>
        <CardHeader className="md:flex-row gap-5">
          <img src={Avocat.pfp} alt="avocat-pfp" className="w-40  rounded-lg" />
          <div className="flex flex-col gap-2">
            <CardTitle>
              {Avocat.lastName} {Avocat.firstName}
            </CardTitle>
            <CardDescription>January 27, 2024</CardDescription>
            <p>
              <span className="text-muted-foreground font-semibold uppercase">
                Location :
              </span>{" "}
              {Avocat.positionLatLng.address}
            </p>
            <p>
              <span className="text-muted-foreground font-semibold uppercase">
                Categories :
              </span>{" "}
              {Avocat.categories.map((obj) => `${obj.value}, `)}.
            </p>
            {/* <div>
              <p className="text-muted-foreground font-semibold">URLs :</p>
              {Avocat.urls.map((url, index) => (
                <Button variant="link" key={index}>
                  {url}
                </Button>
              ))}
            </div> */}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground font-semibold uppercase">
            Biographie :
          </p>
          <p>{Avocat.description}</p>
        </CardContent>
        {/* <CardFooter className="gap-2">
          <Button variant="">Accepter</Button>
          <Button variant="destructive">Refuser</Button>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default RequestPage;
