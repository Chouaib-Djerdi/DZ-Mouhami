import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { stats } from "../../utils";

const Overview = () => {
  return (
    <div className="flex gap-5">
      {stats.map((stat, index) => (
        <Card key={index} className="flex-1">
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
