import { FaAngleLeft, FaAngleRight, FaBolt } from "react-icons/fa";
import { TMasters } from "../utility/Types";
import { useGetMasters } from "../api/useGetMasters";
import { Link } from "react-router-dom";
import {
  useFiterByName,
  useShowMasters,
  useSortMasters,
} from "../utility/useSortFilter";

const JediSithPage = () => {
  const {
    masters,
    fiteredMasters,
    error,
    loading,
    page,
    setPage,
    setFiteredMasters,
  } = useGetMasters();

  const { filterByName, setFilterByName } = useFiterByName(
    setFiteredMasters,
    masters
  );
  const { fiterOption, setFiterOption } = useShowMasters(
    setFiteredMasters,
    masters
  );
  const { sortOption, setSortOption } = useSortMasters(
    setFiteredMasters,
    fiteredMasters,
    masters
  );

  const findId = (route: string): string => {
    const reg1 = /\d+/;
    const firstId: RegExpMatchArray | null = route.match(reg1);
    return firstId ? firstId[0] : "0";
  };

  return (
    <>
      {error ? (
        <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-slate-900 to-red-950 text-white p-6">
          <h1 className="text-6xl font-bold mb-6">{error}</h1>
        </div>
      ) : (
        <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-slate-900 to-red-950 text-white p-6">
          {loading ? (
            <h1 className="text-4xl font-bold">
              Youar master is getting ready for you, young padawan!
            </h1>
          ) : (
            <>
              <h1 className="text-6xl font-bold mb-6">
                Choose your master wisely
              </h1>
              <div className="flex w-full justify-around mb-2">
                <select
                  className="text-white px-3 py-2 bg-slate-500 rounded-2xl font-medium hover:bg-blue-500 transition-all duration-500 ease-in "
                  onChange={(e) => setFiterOption(e.target.value)}
                  value={fiterOption}
                >
                  <option value="all">Filter by eyes color: all</option>
                  <option value="blue">Filter by eyes color: blue</option>
                  <option value="yellow">Filter by eyes color: yellow</option>
                  <option value="brown">Filter by eyes color: brown</option>
                  <option value="red">Filter by eyes color: red</option>
                  <option value="blue-gray">
                    Filter by eyes color: blue-gray
                  </option>
                  <option value="green">Filter by eyes color: green</option>
                </select>

                <select
                  className="text-white px-3 py-2 bg-slate-500 rounded-2xl font-medium hover:bg-blue-500 transition-all duration-500 ease-in "
                  onChange={(e) => setSortOption(e.target.value)}
                  value={sortOption}
                >
                  <option value="all">Show all</option>
                  <option value="nameUp">Sort by: name up</option>
                  <option value="nameDown">Sort by: name down</option>
                  <option value="eyesUp">Sort by: eyes up</option>
                  <option value="eyesDown">Sort by: eyes down</option>
                </select>

                <input
                  type="text"
                  placeholder="Search by name..."
                  className="text-white px-3 py-2 bg-slate-500 rounded-2xl font-medium hover:bg-blue-500 transition-all duration-500 ease-in "
                  onChange={(e) => setFilterByName(e.target.value)}
                  value={filterByName}
                />
              </div>

              <div className="w-[1200px] flex flex-wrap mb-6">
                {fiteredMasters &&
                  fiteredMasters.map((master: TMasters) => (
                    <div
                      key={findId(master.url)}
                      className="m-2.5 w-[380px] rounded-2xl bg-white flex text-red-950"
                    >
                      <div className="w-[30%] h-full flex justify-center items-center">
                        <FaBolt className="text-6xl" />
                      </div>
                      <div className="w-[70%] h-full p-3 flex flex-col items-start">
                        <h3>Name: {master.name}</h3>
                        <p>Eyes color:{master.eye_color}</p>
                        <p className="mb-2">Birth year: {master.birth_year}</p>
                        <Link
                          to={`/jediSithPage/${findId(master.url)}`}
                          className="text-white px-3 py-2 bg-red-500 rounded-2xl font-medium hover:bg-red-700 transition-all duration-500 ease-in hover:px-5"
                        >
                          Your master
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="w-48 flex justify-between">
                <button
                  onClick={() =>
                    setPage((prev: number): number => {
                      if (page >= 1) {
                        return prev - 1;
                      } else {
                        return 1;
                      }
                    })
                  }
                >
                  <FaAngleLeft className="text-4xl hover:text-blue-500" />
                </button>
                <span className="p-2 border-2 border-white border-solid rounded-md">
                  {page}
                </span>
                <button
                  onClick={() => setPage((prev: number): number => prev + 1)}
                >
                  <FaAngleRight className="text-4xl hover:text-red-700" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default JediSithPage;
