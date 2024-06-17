import { Link } from "react-router-dom";

const LostWay = () => {
  return (
    <div className="w-full h-screen bg-red-950 flex flex-col justify-center items-center">
      <p className="text-white mx-6 mb-10 w-[1000px]">
        "Once you lose your way, you embrace the darkness within. It is through
        this darkness that true power is revealed. Do not fear losing your path,
        for it is the way to ultimate strength." - Darth Malgus
      </p>
      <Link
        to="/"
        className="text-white p-8 bg-red-500 rounded-2xl font-medium hover:bg-red-700 transition-all duration-500 ease-in"
      >
        Return to your Master
      </Link>
    </div>
  );
};

export default LostWay;
