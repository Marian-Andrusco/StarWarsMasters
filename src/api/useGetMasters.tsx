import api from "./jedi";
import { TMasters } from "../utility/Types";
import { useEffect, useState } from "react";

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

export const useGetMasters = (): {
  masters: TMasters[] | undefined;
  fiteredMasters: TMasters[] | undefined;
  error: string | undefined;
  loading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setFiteredMasters: React.Dispatch<
    React.SetStateAction<TMasters[] | undefined>
  >;
} => {
  const [masters, setMasters] = useState<TMasters[] | undefined>();
  const [fiteredMasters, setFiteredMasters] = useState<
    TMasters[] | undefined
  >();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    try {
      api.get(`/people?page=${page}`).then((response) => {
        console.log(response);
        setMasters(response.data.results);
        setFiteredMasters(response.data.results);
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      setError("You are not wothy youg padawan");
    } finally {
      setLoading(false);
    }
  }, [page]);

  return {
    masters,
    fiteredMasters,
    error,
    loading,
    page,
    setPage,
    setFiteredMasters,
  };
};

export const useGetMaster = (
  id: string | undefined
): {
  master: TMasters | undefined;
  error: string | undefined;
  loading: boolean;
  showMyMaster: () => void;
} => {
  const [master, setMaster] = useState<TMasters | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  const showMyMaster = () => {
    try {
      api.get(`/people/${id}`).then((response) => {
        setMaster(response.data);
        //  console.log(response.data);
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      setError("You are not wothy youg padawan");
    } finally {
      setLoading(false);
    }
  };

  return { master, error, loading, showMyMaster };
};
