import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Overview,
  Commentaires,
  RdvList,
  Settings,
} from "../custom-components";

const LawyerDashboard = () => {
  return (
    <div className="p-10 space-y-5">
      <h1 className="text-2xl font-bold">Tableau de bord</h1>
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
