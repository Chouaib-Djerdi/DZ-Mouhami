import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Overview,
  Commentaires,
  RdvList,
  Settings,
} from "../custom-components";
import { FaUserTie } from "react-icons/fa";

const LawyerDashboard = () => {
  return (
    <div className="md:p-10 p-5 space-y-5">
      <div className="flex items-center gap-2">
        <FaUserTie size={30} />
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
      </div>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Aperçu</TabsTrigger>
          <TabsTrigger value="commentaires">Commentaires</TabsTrigger>
          <TabsTrigger value="rdv">Rendez-vous</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>
        <TabsContent value="commentaires">
          <Commentaires />
        </TabsContent>
        <TabsContent value="rdv">
          <RdvList />
        </TabsContent>
        <TabsContent value="settings">
          <Settings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LawyerDashboard;
