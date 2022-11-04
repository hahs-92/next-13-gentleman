import { TeamList } from "./components";
import { TeamResponse } from "./models";
import { getTeams } from "./services";

export default async function Page() {
  const data: TeamResponse = await getTeams();

  return (
    <main>
      <TeamList teams={data.teams} />
    </main>
  );
}
