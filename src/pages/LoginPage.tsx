import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="flex flex-col justify-center items-center h-full bg-slate-900">
        <h2 className="text-white text-6xl font-bold mb-6">Jedi</h2>
        <p className="text-white mx-6 mb-10">
          "Patience you must have, my young Padawan. The path of the Jedi is not
          quick, nor easy. Trust in the Force, and in time, wisdom you will
          find." - Yoda
        </p>
        <Link
          to="/jediSithPage"
          className="text-white p-8 bg-slate-500 rounded-2xl font-medium hover:bg-blue-500 transition-all duration-500 ease-in"
        >
          Choose your Jedi Master
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center h-full bg-red-950">
        <h2 className="text-white text-6xl font-bold mb-6">Sith</h2>
        <p className="text-white mx-6 mb-10">
          "Peace is a lie, there is only passion. Through passion, I gain
          strength. Through strength, I gain power. Through power, I gain
          victory. Through victory, my chains are broken. The Force shall free
          me." - Sith Code
        </p>
        <Link
          to="/jediSithPage"
          className="text-white p-8 bg-red-500 rounded-2xl font-medium hover:bg-red-700 transition-all duration-500 ease-in"
        >
          Choose your Sith Master
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
