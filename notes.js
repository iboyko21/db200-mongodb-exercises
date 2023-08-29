// ---------------------- MongoDB Exercises --------------------------------------

                        
// ------------------------- Insert Documents -----------------------------------

// Insert the following documents into a movies collection.

db.movies.insert({"title": "Star Wars", "writer": "George Lucas", "year": 1997, "actors": ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing", "James Earl Jones"]})


// --------------------------- Query / Find Documents -------------------------------

// query the movies collection to:
// get all documents

db.movies.find({})


// get all documents with writer set to "Quentin Tarantino"

db.movies.find({"writer":"Quentin Tarantino"})


// get all documents where actors include "Brad Pitt"

db.movies.find({"actors":"Bradd Pitt"})


// get all documents with franchise set to "The Hobbit"

db.movies.find({"franchise":"The Hobbit"})


// get all movies released in the '90s

db.movies.find({"year": {$gte: 1990, $lte: 1999} })


// get all movies released before the year 2000 or after 2010

db.movies.find({ $or: [{"year": {$lt: 2000}}, {"year": {$gt: 2010}}]})


// ----------------- Update Documents -------------------------------------------------

// add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."

db.movies.updateOne({"title":"The Hobbit: An Unexpected Journey"}, {$set: {"synopsis":"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})


// add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."

db.movies.updateOne({"title":"The Hobbit: The Desolation of Smaug"}, {$set: {"synopsis":"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})


// add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"

db.movies.updateOne({ "title":"Pulp Fiction" },{ $push: {"actors": "Samuel L. Jackson"} })


// -------------------------- Text Search --------------------------------------------

// find all movies that have a synopsis that contains the word "Bilbo"

db.movies.find({"synopsis" : {$regex : "Bilbo"}});


// find all movies that have a synopsis that contains the word "Gandalf"

db.movies.find({"synopsis": {$regex : "Gandalf"}})


// find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"

db.movies.find({"synopsis": {$regex:"Bilbo", $not: {$regex:"Gandalf"}}})


// find all movies that have a synopsis that contains the word "dwarves" or "hobbit"

db.movies.find({$or: [{"synopsis": {$regex:"dwarves"}},{"synopsis": {$regex:"hobbit"}}]})
db.movies.find({})


// find all movies that have a synopsis that contains the word "gold" and "dragon"

db.movies.find({"synopsis": {$regex: "gold", $regex: "dragon"}})



// ------------------ Delete Documents -----------------------

// delete the movie "Pee Wee Herman's Big Adventure"

db.movies.deleteOne({"title":"Pee Wee Herman's Big Adventure"})


// delete the movie "Avatar"

db.movies.deleteOne({"title":"Avatar"})


// -------------------------- Relationships -----------------------------------------------------

// Insert the following documents into a user's collection:

db.users.update({"username":"SallySmith"},{$set: {"username": SallySmith}})

db.users.insert({"username":"JimmyHagen", "full_name": {"first":"Jimmy", "last":"Hagen"}})


// Insert the following documents into a posts collection:

db.posts.insertOne({"username": "SallySmith", "title":"Passes out at party", "body":"Wakes up early and cleans house"})

// Insert the following documents into a comments collection
// where [post_obj_id] is the ObjectId of the posts document: "Borrows something"

db.comments.insertOne({"username":"SallySmith", "comment":"Hope you got a good deal!", "post": {$ref: "posts", $id: ObjectId("63a0c0b364fdb252d5f13821")}})

db.comments.insertOne({"username":"SallySmith", "comment":"Hope you got a good deal!", "post": ObjectId("63a0c0cb64fdb252d5f13821")})

// where [post_obj_id] is the ObjectId of the posts document: "Borrows everything"

db.comments.insertOne({"username":"SallySmith", "comment":"What's mine is yours!", "post": {$ref: "posts", $id: ObjectId("63a0c0b364fdb252d5f13822")}})


// where [post_obj_id] is the ObjectId of the posts document: "Forks your repo on github"

db.comments.insertOne({"username":"SallySmith", "comment":"Don't violate the licensing agreement!", "post": {$ref: "posts", $id: ObjectId("63a0c0e764fdb252d5f13823")}})


// where [post_obj_id] is the ObjectId of the posts document: "Passes out at party"

db.comments.insertOne({"username":"JimmyHagen", "comment":"It still isn't clean", "post": {$ref: "posts", $id: ObjectId("63a0c01b64fdb252d5f1381e")}})


// where [post_obj_id] is the ObjectId of the posts document: "Reports a bug in your code"

db.comments.insertOne({"username":"JimmyHagen", "comment":"Denied your PR cause I found a hack", "post": {$ref: "posts", $id: ObjectId("63a0c08664fdb252d5f13820")}})


// ------------------ Querying related collections --------------------------


// find all users

db.users.find()


// find all posts

db.posts.find()


// find all posts authored by "SallySmith"

db.posts.find({"username":"SallySmith"})


// find all posts authored by "JimmyHagen"

db.posts.find({"username":"JimmyHagen"})


// find all comments
db.comments.find()


// find all comments authored by "SallySmith"

db.comments.find({"username":"SallySmith"})


// find all comments authored by "JimmyHagen"

db.comments.find({"username":"JimmyHagen"})


// find all comments belonging to the post "Reports a bug in your code"

db.comments.find({"title":"Reports a bug in your code"})