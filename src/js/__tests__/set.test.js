// test("", () => {});
import { Team } from "../set";

describe("Team class tests", () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test("add method adds a character to the team", () => {
    const char1 = {
      name: "Boromir",
    };
    team.add(char1);
    expect(team.toArray()).toContain(char1);
  });

  test("add method throws error when adding duplicate character", () => {
    const char1 = {
      name: "Boromir",
    };
    team.add(char1);
    expect(() => team.add(char1)).toThrow("такой персонаж уже есть");
  });
});
