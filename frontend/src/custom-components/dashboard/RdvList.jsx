import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { list_rdvs } from "../../utils";

const RdvList = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {list_rdvs.map((rdv, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{rdv.title}</CardTitle>
            <CardDescription>{`0${rdv.date.getDate()}-0${
              rdv.date.getMonth() + 1
            }-${rdv.date.getFullYear()} à ${rdv.time}`}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{rdv.description}</p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button>Approuver</Button>
            <Button variant="destructive">Refuser</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default RdvList;
