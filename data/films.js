const films = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        category: [7]
    },
    {
        id: 2,
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        category: [5]
    },
    {
        id: 3,
        title: 'The Godfather: Part II',
        year: 1974,
        director: 'Francis Ford Coppola',
        category: [5]
    },
    {
        id: 4,
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        category: [1]
    },
    {
        id: 5,
        title: '12 Angry',
        year: 1957,
        director: 'Sidney Lumet',
        category: [7]
    },
    {
        id: 6,
        title: 'Schindler\'s List',
        year: 1993,
        director: 'Steven Spielberg',
        category: [7]
    },
    {
        id: 7,
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
        director: 'Peter Jackson',
        category: [1, 9]
    },
    {
        id: 8,
        title: 'Pulp Fiction',
        year: 1994,
        director: 'Quentin Tarantino',
        category: [5]
    },
    {
        id: 9,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
        director: 'Peter Jackson',
        category: [1, 9]
    },
    {
        id: 10,
        title: 'Forrest Gump',
        year: 1994,
        director: 'Robert Zemeckis',
        category: [7]
    },
    {
        id: 11,
        title: 'Inception',
        year: 2010,
        director: 'Christopher Nolan',
        category: [1, 15]
    },
    {
        id: 12,
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
        director: 'Peter Jackson',
        category: [1, 9]
    },
    {
        id: 13,
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
        director: 'Irvin Kershner',
        category: [1, 15]
    },
    {
        id: 14,
        title: 'The Matrix',
        year: 1999,
        director: 'Lana Wachowski, Lilly Wachowski',
        category: [1, 15]
    },
    {
        id: 15,
        title: 'Goodfellas',
        year: 1990,
        director: 'Martin Scorsese',
        category: [5]
    },
    {
        id: 16,
        title: 'One Flew Over the Cuckoo\'s Nest',
        year: 1975,
        director: 'Milos Forman',
        category: [7]
    },
    {
        id: 17,
        title: 'Seven Samurai',
        year: 1954,
        director: 'Akira Kurosawa',
        category: [7]
    },
    {
        id: 18,
        title: 'Se7en',
        year: 1995,
        director: 'David Fincher',
        category: [5]
    },
    {
        id: 19,
        title: 'City of God',
        year: 2002,
        director: 'Fernando Meirelles, Kátia Lund',
        category: [5]
    },
    {
        id: 20,
        title: 'Life Is Beautiful',
        year: 1997,
        director: 'Roberto Benigni',
        category: [7]
    },
    {
        id: 21,
        title: 'The Silence of the Lambs',
        year: 1991,
        director: 'Jonathan Demme',
        category: [5]
    },
    {
        id: 22,
        title: 'It\'s a Wonderful Life',
        year: 1946,
        director: 'Frank Capra',
        category: [7]
    },
    {
        id: 23,
        title: 'The Usual Suspects',
        year: 1995,
        director: 'Bryan Singer',
        category: [5]
    },
    {
        id: 24,
        title: 'Léon: The Professional',
        year: 1994,
        director: 'Luc Besson',
        category: [5]
    },
    {
        id: 25,
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        category: [5]
    },
    {
        id: 26,
        title: 'The Green Mile',
        year: 1999,
        director: 'Frank Darabont',
        category: [7]
    },
    {
        id: 27,
        title: 'Interstellar',
        year: 2014,
        director: 'Christopher Nolan',
        category: [1, 15]
    },
    {
        id: 28,
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        category: [5]
    },
    {
        id: 29,
        title: 'American History X',
        year: 1998,
        director: 'Tony Kaye',
        category: [5]
    },
    {
        id: 30,
        title: 'The Pianist',
        year: 2002,
        director: 'Roman Polanski',
        category: [7]
    },
    {
        id: 31,
        title: 'Gladiator',
        year: 2000,
        director: 'Ridley Scott',
        category: [1, 18]
    },
    {
        id: 32,
        title: 'The Departed',
        year: 2006,
        director: 'Martin Scorsese',
        category: [5]
    },
    {
        id: 33,
        title: 'The Prestige',
        year: 2006,
        director: 'Christopher Nolan',
        category: [1, 15]
    },
    {
        id: 34,
        title: 'The Lion King',
        year: 1994,
        director: 'Roger Allers, Rob Minkoff',
        category: [7]
    },
    {
        id: 35,
        title: 'The Intouchables',
        year: 2011,
        director: 'Olivier Nakache, Éric Toledano',
        category: [7]
    },
    {
        id: 36,
        title: 'Whiplash',
        year: 2014,
        director: 'Damien Chazelle',
        category: [7]
    },
    {
        id: 37,
        title: 'The Lives of Others',
        year: 2006,
        director: 'Florian Henckel von Donnersmarck',
        category: [7]
    },
    {
        id: 38,
        title: 'The Shining',
        year: 1980,
        director: 'Stanley Kubrick',
        category: [5]
    },
    {
        id: 39,
        title: 'The Dark Knight Rises',
        year: 2012,
        director: 'Christopher Nolan',
        category: [1]
    },
    {
        id: 40,
        title: 'Braveheart',
        year: 1995,
        director: 'Mel Gibson',
        category: [1, 18]
    },
    {
        id: 41,
        title: 'Requiem for a Dream',
        year: 2000,
        director: 'Darren Aronofsky',
        category: [5]
    },
    {
        id: 42,
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
        director: 'Michel Gondry',
        category: [5]
    },
    {
        id: 43,
        title: 'A Clockwork Orange',
        year: 1971,
        director: 'Stanley Kubrick',
        category: [5]
    },
    {
        id: 44,
        title: 'Taxi Driver',
        year: 1976,
        director: 'Martin Scorsese',
        category: [5]
    },
    {
        id: 45,
        title: 'Amélie',
        year: 2001,
        director: 'Jean-Pierre Jeunet',
        category: [7]
    }
]

export default films