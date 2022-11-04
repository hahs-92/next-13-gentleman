import { getTeams } from "./services";

export default async function Page() {
  const teams = await getTeams();

  return <div>teams: {JSON.stringify(teams)}</div>;
}
