import { userIcon } from "../assets/icons";

const About = ({ categories, description }) => {
  return (
    <div className="space-y-5" id="apropos">
      <div className="flex gap-2 border-l-4 border-primary pl-2">
        <img src={userIcon} alt="about-icon" />
        <h1 className="text-xl font-semibold">À propos de Ibrahim</h1>
      </div>
      <div>
        <p>
          <span className="font-semibold">Categories</span> :{" "}
          {categories.map((obj) => `${obj.value},`)}
        </p>
      </div>
      <div>
        <h1 className="font-semibold">Bio :</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default About;
