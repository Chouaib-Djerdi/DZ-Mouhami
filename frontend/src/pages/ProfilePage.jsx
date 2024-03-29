import { avocatPfp } from "../assets/images";

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import {
  About,
  Contributions,
  ProfileCard,
  ProfileOverview,
  RatingComment,
  RatingOverview,
} from "../custom-components";
import Contact from "../custom-components/Contact";
import { dollarIcon, medalStarIcon } from "../assets/icons";
import { comments, ratings } from "../utils";

const profile = {
  name: "Ibrahim Hechmann",
  location: "Hechama, Setif",
  rating: 4,
  pfp: avocatPfp,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt dolore natus quibusdam laudantium hic nemo, soluta sequi architecto rem impedit repudiandae et corporis eos nihil beatae, maxime velit. Libero.",
  categories: ["Droit administratif", "Droit Affaires", "Droit civil"],
  commentsNumber: 39,
  phoneNumber: "(206) 717-8680",
};

const ProfilePage = () => {
  return (
    <div className="py-10 lg:px-40 md:px-20 px-5">
      <ProfileOverview {...profile} />
      <nav className="flex justify-evenly p-3 border shadow-sm rounded-lg my-3 sticky top-0 z-50 bg-white">
        <Button variant="ghost">
          <a href="#apropos">À propos</a>
        </Button>
        <Button variant="ghost">
          <a href="#contact">Contact</a>
        </Button>
        <Button variant="ghost">
          <a href="#commentaires">Commentaires</a>
        </Button>
        <Button variant="ghost">
          <a href="#cout">Coût</a>
        </Button>
        <Button variant="ghost">
          <a href="#cv">CV</a>
        </Button>
      </nav>
      <div className="flex justify-between gap-10 my-10">
        <div className="flex flex-col gap-20">
          <About
            categories={profile.categories}
            description={profile.description}
          />
          <Separator />
          <Contact
            phoneNumber={profile.phoneNumber}
            location={profile.location}
          />
          <Separator />
          <div className="space-y-5" id="commentaires">
            <div className="flex justify-between">
              <div className="flex items-center gap-2 border-l-4 border-primary pl-2">
                <img src={medalStarIcon} alt="comments-icon" />
                <h1 className="text-xl font-semibold">Commentaires</h1>
              </div>
              <Button variant="outline">
                <Link to="/review">Écrire une critique</Link>
              </Button>
            </div>
            <RatingOverview {...ratings} />
            <div>
              {comments.map((comment, index) => (
                <RatingComment key={index} {...comment} />
              ))}
            </div>
          </div>
          <Separator />
          <div className="space-y-3" id="cout">
            <div className="flex gap-2 border-l-4 border-primary pl-2">
              <img src={dollarIcon} alt="cost-icon" />
              <h1 className="text-xl font-semibold">Coût</h1>
            </div>
            <p>
              Nous n&apos;avons trouvé aucune information sur les coûts pour cet
              avocat
            </p>
            <Button variant="outline">Contacter pour plus de détails</Button>
          </div>
        </div>

        {/* Aside Section */}
        <div className="hidden xl:flex flex-col gap-10 w-2/3">
          <Contributions />
          <ProfileCard {...profile} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
