const Team = require('../app/data/team').Team;
const Player = require('../app/data/player').Player;

test('Test getTeamName', () => {
  let Team1 = new Team('Real Madrid CF');
  Team1.teamName = 'Real Madrid CF';
  expect(Team1.getTeamName()).toBe('Real Madrid CF');
});

test('Test getTeamValue', () => {
  let Team1 = new Team('Real Madrid CF');
  Team1.teamValue = 300;
  expect(Team1.getTeamValue()).toBe(300);
});

test('Test getTeamOverallQuality', () => {
  let Team1 = new Team('Real Madrid CF');
  let Player1 = new Player(1);
  let Player2 = new Player(2);
  Player1.overall = 100;
  Player2.overall = 0;
  let listPlayers = [Player1, Player2];
  Team1.addPlayers(listPlayers);
  expect(Team1.getTeamOverallQuality()).toBe(50);
});
