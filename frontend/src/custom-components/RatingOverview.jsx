import { Progress } from "@/components/ui/progress";

const RatingOverview = ({
  rating,
  commentsNumber,
  fivePercentage,
  fourPercentage,
  threePercentage,
  twoPercentage,
  onePercentage,
}) => {
  return (
    <div className="flex justify-center items-center gap-20">
      <div className="">
        <h1 className="text-4xl font-bold">
          {rating} <span className="text-base font-normal ">/5.0</span>
        </h1>
        <p className="text-muted-foreground">{commentsNumber} Commentaires</p>
      </div>
      <div className="flex flex-col gap-3 w-[50%]">
        <div className="flex items-center gap-2">
          <p>5.0</p>
          <Progress className="h-5 rounded-md" value={fivePercentage} />
          <p>{fivePercentage}%</p>
        </div>
        <div className="flex items-center gap-2">
          <p>4.0</p>
          <Progress className="h-5 rounded-md" value={fourPercentage} />
          <p>{fourPercentage}%</p>
        </div>
        <div className="flex items-center gap-2">
          <p>3.0</p>
          <Progress className="h-5 rounded-md" value={threePercentage} />
          <p>{threePercentage}%</p>
        </div>
        <div className="flex items-center gap-2">
          <p>2.0</p>
          <Progress className="h-5 rounded-md" value={twoPercentage} />
          <p>{twoPercentage}%</p>
        </div>
        <div className="flex items-center gap-2">
          <p>1.0</p>
          <Progress className="h-5 rounded-md" value={onePercentage} />
          <p>{onePercentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default RatingOverview;
