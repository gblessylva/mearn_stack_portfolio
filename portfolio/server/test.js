var models = require('./server').models;

//Creates new instance
// models.Profile.create({name: 'Sylva'}, (err, profile) =>{
//   console.log('data?', err, profile);
// }
// )

//modifies an instance

// models.Profile.upsert({id: "5e5519190369ec157c452795", name: "Sylva"}, (err, profile) =>{
//   console.log("data?", err, profile)
// })

//Searches and creates if none is found

// models.Profile.findOrCreate({name:"sylva2"}, (err, profile) =>{
//   if (err) {
//     console.log("there was an error", err)
//   } else if (profile){
//     profile.email = 'newmail@sly.com';
//     profile.save((eu, updated) =>{
//       console.log('updated', updated);
//     }) 
//   }
  
// })

// const movieStars = [
//     {name: "merlin", email: "merlin@merlin.com"},
//     {name: "zedukus", email: "zedukus@lots.com"},
//     {name: "mother superior", email: "ms@lots.com"},
//     {name: "seeker", email: "seeker@lots.com"},
//     {name: "harry porter", email: "harry@harrypotter@obi.com"},
//     {name: "dubledor", email: "prof@harrypotter@obi.com"},
//     {name: "hamione", email: "hamione@harrypotter@obi.com"},
//     {name: "john snow", email: "johnsnow@got.com"},
//     {name: "sirene", email: "sirene@sirene.com"},
//     {name: "monic", email: "monic@mh.com"},
//     {name: "tokyo", email: "tokyo@mh.com"},
//     {name: "the professor", email: "t.prof@mh.com"},
// ];

// movieStars.map(star=>{
//   models.Profile.create(star, (err, created) =>{
//     console.log('star name', err, created)
//   })
// })
// const newUser =[ 
//   {name: 'demola', email: 'demola@gmail.com'},
//   {name: 'ola', email: 'demola@gail.com'},
//   {name: 'mola', email: 'demola@mail.com'},
// ]
// newUser.map(user =>{
//   models.Profile.create(user, (err, created) =>{
//     console.log('more users created', created)
//   })
// })

const filter = {
  where: {
    email: {like: 'ola'}
  },
  order: 'id ASC',
  limit: 10,
}
//Find models
// models.Profile.find(filter, (err, found) => {
//   console.log('found', err, found)
//   if(found) {
//     console.log('found', found.length, 'names')
//   }
// }
// )
//delete users
//Delete by ID
// models.Profile.destroyById('5e562f4ef50fab076c904e1b', (err, destroyed) =>{
//   console.log('deleted', destroyed)
// })

//delete All using filter

// models.Profile.destroyAll(filter.where, (err, destroyed) =>{
//   console.log('deleted all', destroyed)
// })

