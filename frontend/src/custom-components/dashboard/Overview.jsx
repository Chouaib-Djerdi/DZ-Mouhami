import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { stats } from "../../utils";

const Overview = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {stats.map((stat, index) => (
        <Card key={index} className="">
          <CardHeader>
            <div className="flex justify-between items-center">
              <p>{stat.title}</p>
              {stat.icon}
            </div>
            <CardTitle>+{stat.nombre}</CardTitle>
            <CardDescription>{stat.report}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default Overview;
