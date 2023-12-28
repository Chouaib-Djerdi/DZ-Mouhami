const About = ({ categories, description }) => {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold underline">À propos de Ibrahim</h1>
      <div>
        <p>
          <span className="font-semibold">Categories</span> :{" "}
          {categories.join(", ")}
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
