sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

summer_sports = sports.slice(5, 7).concat(sports.slice(9, sports.lenght));
winter_sports = sports.slice(0, 2).concat(sports.slice(3, 5));

fruits = sports.slice(2, 3).concat(sports.slice(7, 9));

console.log('*** Winter Sports ***');
for(i = 0; i < winter_sports.length; i++) {
    console.log(winter_sports[i].join(': '));
}

console.log('*** Summer Sports ***');
for(i = 0; i < summer_sports.length; i++) {
    console.log(summer_sports[i].join(': '));
}

console.log('*** Fruits ***');
for(i = 0; i < fruits.length; i++) {
    console.log(fruits[i].join(': '));
}
