import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "../custom-components";
import { avocatPfp } from "../assets/images";

const profile = {
  name: "Ibrahim Hechmann",
  location: "Hechama, Setif",
  rating: 4,
  pfp: avocatPfp,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt dolore natus quibusdam laudantium hic nemo, soluta sequi architecto rem impedit repudiandae et corporis eos nihil beatae, maxime velit. Libero.",
  categories: ["Droit administratif", "Droit Affaires", "Droit civil"],
};

const listOfProfiles = [profile, profile, profile];

const Landing = () => {
  return (
    <div className="bg-hero bg-fit bg-no-repeat px-60">
      <div className="flex flex-col gap-5 h-[570px] justify-center">
        <h1 className="font-bold text-4xl text-primary w-[50%]">
          Des avocats expérimentés sont prêts à vous aider.
        </h1>
        <div className="flex w-[50%] gap-1">
          <Input type="text" placeholder="Chercher votre avocat" />
          <Input type="text" placeholder="Ville, etat" />
          <Button>Chercher</Button>
        </div>
      </div>
      <div className="flex flex-col items-center my-10 gap-10">
        <h1 className="font-bold text-2xl">
          Les meilleurs avocats près de chez vous
        </h1>
        <div className="flex gap-3">
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
