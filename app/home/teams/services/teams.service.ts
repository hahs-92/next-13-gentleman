export const getTeams = async () => {
  const res = await fetch("https://api.football-data.org/v2/teams/2061", {
    headers: {
      "X-Auth-token": "8db0cc10dbc84eea919b4ae18574a72b",
    },
  });
  return res.json();
};
