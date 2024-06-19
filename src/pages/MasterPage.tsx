import { useGetMaster } from "../api/useGetMasters";
import { Link, useParams } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

const MasterPage = () => {
  const { id } = useParams();
  const { master, error, loading, showMyMaster } = useGetMaster(id);

  return (
    <div>
      <>
        {error ? (
          <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-slate-900 to-red-950 text-white p-6">
            <h1 className="text-6xl font-bold mb-6">{error}</h1>
          </div>
        ) : (
          <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-slate-900 to-red-950 text-white p-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center">
                <button
                  className="text-white p-8 bg-red-500 rounded-2xl font-medium hover:bg-red-700 transition-all duration-500 ease-in mb-6"
                  onClick={() => showMyMaster()}
                >
                  See your master
                </button>
                <h1 className="text-4xl font-bold">
                  Your master is getting ready for you, young padawan!
                </h1>
              </div>
            ) : (
              <>
                {master && (
                  <div className="w-full flex flex-col items-start">
                    <h2 className=" w-full text-center text-5xl font-bold mb-6">
                      You choosed wisely, your master is {master.name}
                    </h2>
                    <div className="grid grid-cols-2 w-full mb-6">
                      <ul>
                        <li className="text-xl underline mb-2">
                          Physical Features
                        </li>
                        <li>Gender: {master.gender}</li>
                        <li>Hair Color: {master.hair_color}</li>
                        <li>Height: {master.height}</li>
                        <li>Mass: {master.mass}</li>
                        <li>Skin Color: {master.skin_color}</li>
                      </ul>
                      <div className="w-full flex justify-center items-center">
                        <FaBolt className="text-8xl" />
                      </div>
                    </div>
                    <Link
                      to="/jediSithPage"
                      className="text-white px-3 py-2 bg-red-500 rounded-2xl font-medium hover:bg-red-700 transition-all duration-500 ease-in hover:px-5"
                    >
                      Choose other master
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </>
    </div>
  );
};

export default MasterPage;
