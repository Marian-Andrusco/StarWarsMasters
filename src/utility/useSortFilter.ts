import { useEffect, useState } from "react";
import { TMasters } from "./Types";

export const useFiterByName = (
  setFiteredMasters: React.Dispatch<
    React.SetStateAction<TMasters[] | undefined>
  >,
  masters: TMasters[] | undefined
): {
  filterByName: string | undefined;
  setFilterByName: React.Dispatch<React.SetStateAction<string>>;
} => {
  const [filterByName, setFilterByName] = useState<string>("");
  useEffect(() => {
    filterByName
      ? setFiteredMasters(() =>
          masters?.filter(
            (m: TMasters) =>
              m.name.toLowerCase().includes(filterByName.toLowerCase()) && m
          )
        )
      : setFiteredMasters(masters);
  }, [filterByName]);
  return { filterByName, setFilterByName };
};

// ---------------------------------------

export const useShowMasters = (
  setFiteredMasters: React.Dispatch<
    React.SetStateAction<TMasters[] | undefined>
  >,
  masters: TMasters[] | undefined
): {
  fiterOption: string | undefined;
  setFiterOption: React.Dispatch<React.SetStateAction<string>>;
} => {
  const [fiterOption, setFiterOption] = useState<string>("all");
  useEffect(() => {
    if (fiterOption === "all") {
      setFiteredMasters(masters);
    } else {
      setFiteredMasters(() =>
        masters?.filter((m: TMasters) => m.eye_color === fiterOption)
      );
    }
  }, [fiterOption]);

  return { fiterOption, setFiterOption };
};

// ---------------------------------------

export const useSortMasters = (
  setFiteredMasters: React.Dispatch<
    React.SetStateAction<TMasters[] | undefined>
  >,
  fiteredMasters: TMasters[] | undefined,
  masters: TMasters[] | undefined
): {
  sortOption: string | undefined;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
} => {
  const [sortOption, setSortOption] = useState<string>("all");
  useEffect(() => {
    switch (sortOption) {
      case "all":
        setFiteredMasters(masters);
        break;
      case "nameUp":
        fiteredMasters &&
          fiteredMasters.sort((a: TMasters, b: TMasters) =>
            a.name.localeCompare(b.name)
          );
        break;
      case "nameDown":
        fiteredMasters &&
          fiteredMasters.sort((a: TMasters, b: TMasters) =>
            b.name.localeCompare(a.name)
          );
        break;
      case "eyesUp":
        fiteredMasters &&
          fiteredMasters.sort((a: TMasters, b: TMasters) =>
            a.eye_color.localeCompare(b.eye_color)
          );
        break;
      case "eyesDown":
        fiteredMasters &&
          fiteredMasters.sort((a: TMasters, b: TMasters) =>
            b.eye_color.localeCompare(a.eye_color)
          );
        break;

      default:
        break;
    }
  }, [sortOption]);

  return { sortOption, setSortOption };
};
