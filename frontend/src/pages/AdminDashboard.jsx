import { Button } from "@/components/ui/button";

import { profile } from "../utils";
import { RequestsList } from "../custom-components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FaList, FaListCheck } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const requests = [profile, profile, profile, profile];

const AdminDashboard = () => {
  return (
    <div className="md:p-10 p-5 space-y-5">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <MdOutlineAdminPanelSettings size={30} />
          <h1 className="text-2xl font-bold">Admin Tableau de bord</h1>
        </div>

        <Button variant="outline">Log Out</Button>
      </div>
      <Tabs defaultValue="requests">
        <TabsList>
          <TabsTrigger value="requests">Demandes</TabsTrigger>
          <TabsTrigger value="liste-avocats">Liste des avocats</TabsTrigger>
        </TabsList>
        <TabsContent value="requests" className="space-y-3 p-3">
          <div className="flex gap-2 items-center">
            <FaList />
            <h3 className="text-lg font-semibold">Liste des demandes :</h3>
          </div>
          <RequestsList list={requests} />
        </TabsContent>
        <TabsContent value="liste-avocats" className="space-y-3 p-3">
          <div className="flex gap-2 items-center">
            <FaListCheck />
            <h3 className="text-lg font-semibold">Liste des Avocats :</h3>
          </div>
          <RequestsList list={requests} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
