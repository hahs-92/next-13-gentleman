import { TeamResponse } from "../models";

export const getTeams = async (): Promise<TeamResponse> => {
  const res = await fetch("https://api.football-data.org/v2/teams", {
    headers: {
      "X-Auth-token": "8db0cc10dbc84eea919b4ae18574a72b",
    },
  });
  return res.json();
};
