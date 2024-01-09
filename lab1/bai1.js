const game = {
    team1: "liverpool",
    team2: "MU",
    players: [["Alisson", "Alexander-Arnold", "Konate", "VanDijk", "Tsimikas", "Szoboszlai", "Endo", "Gravenberch", "Salah", "Nunez", "Diaz"]
                ["Onana", "Dalot","Evans", "Varane", "Shaw", "McTominay", "Amrabat", "Mainoo", "Antony", "Hojlund", "Garnacho"]],
    score: "4:0",
    scored: ["Salah", "Szoboszlai", "Salah", "Nunez"],
    date: "Nov 11th, 2023",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
}
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
const players1Final = [players1, "Thiago", "Coutinho", "Elliot"];
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