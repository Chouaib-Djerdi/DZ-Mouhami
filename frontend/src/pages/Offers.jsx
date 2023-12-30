import { plans } from "../utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { tickIcon } from "../assets/icons";

const Offers = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-5">
      <h1 className="text-4xl font-bold">Nos Plans</h1>
      <div className="flex gap-5">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center p-10 shadow-md rounded-md"
          >
            <h3 className="text-xl font-bold">{plan.title}</h3>
            <h1 className="text-4xl font-bold">
              {plan.price}{" "}
              <span className="text-base font-normal text-muted-foreground">
                / DA par an
              </span>
            </h1>
            <ul className="space-y-3">
              {plan.options.map((option, index) => {
                if (option.value) {
                  return (
                    <li key={index} className="flex gap-2">
                      <img src={tickIcon} alt="tick-icon" />
                      <p>{option.label}</p>
                    </li>
                  );
                }
              })}
            </ul>
            <div className="justify-self-end">
              <Link to="/register">
                <Button variant="">Commander</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
