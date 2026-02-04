// /lib/storage.ts

import { generateShortId } from "./generateId";

// ---------------------------
// Types
// ---------------------------
export type Challenge = {
  id: string;
  title: string;
  description: string;
  duration: number;
  task: string;
  joinCode: string;
  createdAt: string;
  team: TeamMember[];
};

export type TeamMember = {
  name: string;
  score: number;
};

// ---------------------------
// Helpers
// ---------------------------
function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
}

function save<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

// ---------------------------
// Challenge Storage
// ---------------------------
export function getChallenges(): Challenge[] {
  return load<Challenge[]>("challenges", []);
}

export function saveChallenges(challenges: Challenge[]) {
  save("challenges", challenges);
}

export function addChallenge(challenge: Challenge) {
  const challenges = getChallenges();
  challenges.push(challenge);
  saveChallenges(challenges);
}

export function getChallengeById(id: string): Challenge | null {
  const challenges = getChallenges();
  return challenges.find((c) => c.id === id) || null;
}

export function getChallengeByJoinCode(code: string): Challenge | null {
  const challenges = getChallenges();
  return challenges.find((c) => c.joinCode === code) || null;
}

// ---------------------------
// Streaks & Check-ins
// ---------------------------
export function getStreak(id: string): number {
  return load<number>(`streak_${id}`, 0);
}

export function getLastCheckIn(id: string): string | null {
  return load<string | null>(`lastCheckIn_${id}`, null);
}

export function checkIn(id: string): number {
  const today = new Date().toDateString();
  const lastCheck = getLastCheckIn(id);
  let streak = getStreak(id);

  if (lastCheck !== today) {
    streak += 1;
    save(`streak_${id}`, streak);
    save(`lastCheckIn_${id}`, today);
  }

  return streak;
}

// ---------------------------
// Team Auto-Assign
// ---------------------------
export function autoAssignTeam(challenge: Challenge, userName: string): Challenge {
  const team = challenge.team || [];

  // Add user if not already present
  if (!team.find((m) => m.name === userName)) {
    team.push({ name: userName, score: 0 });
  }

  challenge.team = team;
  return challenge;
}
