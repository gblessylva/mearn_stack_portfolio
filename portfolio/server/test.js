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

models.Profile.findOrCreate({name:"sylva2"}, (err, profile) =>{
  if (err) {
    console.log("there was an error", err)
  } else if (profile){
    profile.email = 'newmail@sly.com';
    profile.save((eu, updated) =>{
      console.log('updated', updated);
    }) 
  }
  
})