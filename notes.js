db.movies.insert({"title": "Star Wars", "writer": "George Lucas", "year": 1997, "actors": ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing", "James Earl Jones"]});

// query the movies collection to:

// get all documents
db.movies.find({});

// get all documents with writer set to "Quentin Tarantino"
db.movies.find({"writer":"Quentin Tarantino"});

// get all documents where actors include "Brad Pitt"
db.movies.find({"actors":"Bradd Pitt"});

// get all documents with franchise set to "The Hobbit"
db.movies.find({"franchise":"The Hobbit"});

// get all movies released in the '90s
db.movies.find({"year": {$gte: 1990, $lte: 1999} })

// get all movies released before the year 2000 or after 2010
db.movies.find({ $or: [{"year": {$lt: 2000}}, {"year": {$gt: 2010}}]})

// Update Documents

// add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
db.movies.updateOne({"title":"The Hobbit: An Unexpected Journey"}, {$set: {"synopsis":"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})

// add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
db.movies.updateOne({"title":"The Hobbit: The Desolation of Smaug"}, {$set: {"synopsis":"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})

// add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.movies.updateOne({ "title":"Pulp Fiction" },{ $push: {"actors": "Samuel L. Jackson"} })


// Text Search

// find all movies that have a synopsis that contains the word "Bilbo"

db.movies.find({"synopsis" : {$regex : "Bilbo"}});


// find all movies that have a synopsis that contains the word "Gandalf"

db.movies.find({"synopsis": {$regex : "Gandalf"}})


// find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"

db.movies.find({$and: [{"synopsis": {$regex : "Bilbo"}},{"synopsis": {$not: {$regex: "Gandalf"}}}]})


// find all movies that have a synopsis that contains the word "dwarves" or "hobbit"

db.movies.find({$or: [{"synopsis": {$regex:"dwarves"}},{"synopsis": {$regex:"hobbit"}}]})


// find all movies that have a synopsis that contains the word "gold" and "dragon"







