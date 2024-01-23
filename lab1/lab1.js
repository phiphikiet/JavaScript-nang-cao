// Bai 1
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
      'Neuer', 'Pavard', 'Lucas', 'Hernandez', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'
    ],
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5
    }
  };
//1
const [players1, players2] = game.players;
console.log([players1, players2]);

//2
const [gk, filePlayers] = game.players;
console.log([gk, filePlayers]);

//3
const allPlayers = [players1, players2];
console.log(allPlayers);

//4
const players1Final = [players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5
const {odds: team1, x : draw, team2} = game;
console.log(game.odds);

//6
const printGoals = function (players){
    console.log(`${players} goals`)
}
printGoals(game.scored);

//7
team1 < team2 && console.log("team1 win");
team2 < team1 && console.log("team2 win");

// Bai 2
// 1. In ra cầu thủ cùng với số bàn thắng đã ghi
game.scored.forEach((player, index) => console.log(`Goal ${index + 1}: ${player}`));

// 2. Tính tỉ lệ kết quả trận đấu
const averageOdds = (game.odds.team1 + game.odds.team2) / 2;
console.log(`Tỉ lệ kết quả trận đấu: ${averageOdds}`);

// 3. In ra tỉ lệ cược theo định dạng
console.log(`Tỉ lệ thắng của ${game.team1}: ${game.odds.team1}`);
console.log(`Tỉ lệ hòa: ${game.odds.x}`);
console.log(`Tỉ lệ thắng của ${game.team2}: ${game.odds.team2}`);

// Thêm: Tạo đối tượng 'scorers'
const scorers = game.scored.reduce((accumulator, player) => {
  accumulator[player] = (accumulator[player] || 0) + 1;
  return accumulator;
}, {});

console.log('Danh sách cầu thủ và số bàn thắng:');
for (const [player, goals] of Object.entries(scorers)) {
  console.log(`${player}: ${goals} bàn`);
}