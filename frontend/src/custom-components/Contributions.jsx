import { messagesIcon, teacherIcon } from "../assets/icons";
import { Separator } from "@/components/ui/separator";

const Contributions = () => {
  return (
    <div className="flex flex-col items-center gap-5 bg-gray-50 rounded-md shadow-sm p-5">
      <h1 className="text-lg font-semibold">DZ-MOUHAMI Contributions</h1>
      <div className="grid grid-cols-2 justify-items-center">
        <div className="text-2xl text-normalblue font-semibold">15</div>
        <div className="text-2xl font-semibold">0</div>
        <div className="text-muted-foreground">Réponses juridiques</div>
        <div className="text-muted-foreground">Guides juridiques</div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <img src={messagesIcon} alt="answer-icon" />
          <div>
            <p className="text-normalblue">Réponse juridique</p>
            <p className="text-graydark">
              Investir dans les terres agricoles et l’immobilier agricole dans
              Setif
            </p>
            <p className="text-graydark">22 février 2022</p>
          </div>
        </div>
        <Separator />
        <div className="flex gap-5">
          <img src={teacherIcon} alt="answer-icon" />
          <div>
            <p>Guide juridique</p>
            <p className="text-graydark">
              Si les parties sont mariées dans un pays étranger, peut-il y avoir
              un divorce valide en Algérie
            </p>
            <p className="text-graydark">12 Juin 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
