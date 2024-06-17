import api from "../api/jedi";
import { TMasters } from "../utility/Types";

export const getMasters = async (
  setMasters: React.Dispatch<React.SetStateAction<TMasters[] | undefined>>,
  setFiteredMasters: React.Dispatch<
    React.SetStateAction<TMasters[] | undefined>
  >,
  setError: React.Dispatch<React.SetStateAction<string | undefined>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  page: number
) => {
  try {
    const response = await api.get(`/people?page=${page}`);
    setMasters(response.data.results);
    setFiteredMasters(response.data.results);
  } catch (error) {
    console.log(`Error: ${error}`);
    setError("You are not wothy youg padawan");
  } finally {
    setLoading(false);
  }
};

export const getMaster = async (
  setMaster: React.Dispatch<React.SetStateAction<TMasters | undefined>>,
  setError: React.Dispatch<React.SetStateAction<string | undefined>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  id: string | undefined
) => {
  try {
    const response = await api.get(`/people/${id}`);
    setMaster(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(`Error: ${error}`);
    setError("You are not wothy youg padawan");
  } finally {
    setLoading(false);
  }
};
