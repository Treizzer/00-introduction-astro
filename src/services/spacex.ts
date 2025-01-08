import { type Doc, type APISpaceXResponse } from "../types/api";

export const getLaunchById = async ({ id }: { id: string }) => {
  const result = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

  const launch = (await result.json()) as Doc;
  return launch;
};

export const getLatestLaunches = async () => {
  const result = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });

  const { docs: launches } = (await result.json()) as APISpaceXResponse;
  return launches;
};
