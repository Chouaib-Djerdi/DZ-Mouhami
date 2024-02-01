import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "../custom-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Avocat, services } from "../utils";
const listOfProfiles = [Avocat, Avocat, Avocat];
import { FaMagnifyingGlass } from "react-icons/fa6";
import CountUp from "react-countup";
import { Separator } from "@/components/ui/separator";

const Landing = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1) {
      navigate(`/search/${input1}`);
    }
  };

  return (
    <div className="">
      <div className=" flex flex-col gap-5 h-[570px] justify-center bg-hero bg-cover bg-no-repeat lg:px-40 md:px-20 px-5">
        <h1 className="font-bold text-5xl text-primary w-96">
          Des avocats expérimentés sont prêts à vous aider.
        </h1>
        <div className="flex flex-col gap-1 md:flex-row md:w-[50%]   ">
          <Input
            type="text"
            placeholder="Chercher votre avocat"
            onChange={(e) => {
              setInput1(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Ville, etat"
            onChange={(e) => {
              setInput2(e.target.value);
            }}
          />
          <Button onClick={handleSubmit} className="gap-1">
            <FaMagnifyingGlass />
            Chercher
          </Button>
        </div>
      </div>
      <div className="lg:px-40 md:px-20 px-5">
        <div className="flex flex-col items-center my-20 gap-10">
          <h1 className="font-bold text-2xl">
            Les meilleurs avocats près de chez vous
          </h1>
          <div className="flex flex-col md:flex-row gap-3">
            {listOfProfiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </div>
          <Button variant="outline" className="w-[50%]">
            Voir plus D&apos;avocats
          </Button>
        </div>
        <div className="flex justify-evenly my-20">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg">Avocats</h3>
            <h1 className="font-semibold text-2xl md:text-5xl">
              <CountUp
                start={0}
                end={434}
                prefix="+ "
                duration={2.75}
                enableScrollSpy
              ></CountUp>
            </h1>
          </div>
          <Separator orientation="vertical" className="h-20" />
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg">Clients</h3>
            <h1 className="font-semibold text-2xl md:text-5xl">
              <CountUp
                start={0}
                end={1279}
                prefix="+ "
                duration={2.75}
                enableScrollSpy
              ></CountUp>
            </h1>
          </div>
          <Separator orientation="vertical" className="h-20" />
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg">Ratings</h3>
            <h1 className="font-semibold text-2xl md:text-5xl">
              <CountUp
                start={0}
                end={50000}
                prefix="+ "
                duration={2.75}
                enableScrollSpy
              ></CountUp>
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-20 h-full my-10">
          {services.map((service, index) => (
            <div className="flex flex-col md:flex-row gap-10" key={index}>
              <img
                src={service.imgUrl}
                className={`${
                  (index + 1) % 2 == 0 && "order-last"
                } max-sm:order-1 md:w-1/3 rounded-md`}
              />
              <div className="space-y-5">
                <h1 className="font-bold text-4xl capitalize">
                  {service.title}
                </h1>
                <p className="leading-normal">{service.description}</p>
                <Button variant="lightBlue">Explorez-vous</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
