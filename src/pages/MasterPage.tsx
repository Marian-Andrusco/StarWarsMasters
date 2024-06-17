import { useState } from "react";
import { TMasters } from "../utility/Types";
import { getMaster } from "../api/getMasters";
import { Link, useParams } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

const MasterPage = () => {
  const [master, setMaster] = useState<TMasters | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  const showMyMaster = () => {
    getMaster(setMaster, setError, setLoading, id);
  };

  return (
    <div>
      <>
        {error && (
          <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-slate-900 to-red-950 text-white p-6">
            <h1 className="text-6xl font-bold mb-6">{error}</h1>
          </div>
        )}

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
                    onClick={() => showMyMaster()}
                  >
                    Choose other master
                  </Link>
                </div>
              )}
              {/* <div className="w-[1200px] flex flex-wrap">
                {master && (
                  <div className="m-2.5 w-[380px] rounded-2xl bg-white flex text-red-950">
                    <div className="w-[30%] h-full flex justify-center items-center">
                      <FaBolt className="text-6xl" />
                    </div>
                    <div className="w-[70%] h-full p-3 flex flex-col items-start">
                      <h3>Name: {master.name}</h3>
                      <p>Eyes color:{master.eye_color}</p>
                      <p className="mb-2">Birth year: {master.birth_year}</p>
                    </div>
                  </div>
                )}
              </div> */}
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default MasterPage;
