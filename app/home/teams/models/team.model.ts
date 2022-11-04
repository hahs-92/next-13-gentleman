export interface TeamResponse {
  count: number;
  filters: Filters;
  competition: Competition;
  season: Season;
  teams: Team[];
}

export interface Competition {
  id: number;
  name: Name;
  code: Code;
  type: Type;
  emblem: string;
}

export enum Code {
  Wc = "WC",
}

export enum Name {
  FIFAWorldCup = "FIFA World Cup",
}

export enum Type {
  Cup = "CUP",
}

export interface Filters {
  season: string;
}

export interface Season {
  id: number;
  startDate: Date;
  endDate: Date;
  currentMatchday: number;
  winner: null;
  stages: string[];
}

export interface Team {
  area: Area;
  id: number;
  name: string;
  shortName: null | string;
  tla: null | string;
  crestUrl: string;
  address: string;
  website: null | string;
  founded: number | null;
  clubColors: null | string;
  venue: null | string;
  runningCompetitions: Competition[];
  coach: Coach;
  marketValue: null;
  squad: any[];
  staff: any[];
  lastUpdated: Date;
}

export interface Area {
  id: number;
  name: string;
  code: string;
  flag: null | string;
}

export interface Coach {
  id: null;
  firstName: null;
  lastName: null;
  name: null;
  dateOfBirth: null;
  nationality: null;
  contract: Contract;
}

export interface Contract {
  start: null;
  until: null;
}
