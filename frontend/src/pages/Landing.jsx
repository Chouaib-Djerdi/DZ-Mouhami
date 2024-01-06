import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "../custom-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { listOfProfiles } from "../utils";

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
    <div className="bg-hero bg-fit bg-no-repeat lg:px-40 md:px-20 px-5">
      <div className="flex flex-col gap-5 h-[570px] justify-center">
        <h1 className="font-bold text-4xl text-primary ">
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
          <Button onClick={handleSubmit}>Chercher</Button>
        </div>
      </div>
      <div className="flex flex-col items-center my-10 gap-10">
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
    </div>
  );
};

export default Landing;
