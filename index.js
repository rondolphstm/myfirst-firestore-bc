import { initializeApp, cert } from 'firebase-admin/app'
import {getFirestore} from "firebase-admin/firestore"
import { credentials } from './credentials.js'

initializeApp({
    credential: cert(credentials)
})

const db = getFirestore()

// const car = { make:'Ferrari', model: 'GTO', year: 2008, color: 'red'}

// db.collection('car')
//     .add(car)
//     .then(doc => {
//         console.log('Doc added:', doc.id)
//     })
//     .catch(err => console.log(err))

// db.collection('Cars').doc('lambo')
//     .set({make: 'lamborghini', model: 'diablo', year: 2020, color: 'yellow' })

// db.collection('car').doc('lambo')
//     .set({make: 'lamborghini', year: 2020, color: 'red' })

// db.collection('car').doc('lambo')
//     .update({model: 'diablo', color: 'hot pink'})

//  db.collection('car').doc('lambo').get()
//  .then(doc =>{
//     console.log(doc.data())
//     console.log(doc.id)
//  })
//  .catch(console.log.error)

// Get a whole collection:
// db.collection('car').get()
// .then(collection => {
//     collection.docs.forEach(doc => console.log(doc.data()))
// })
// .catch(console.err)

// db.collection('car').get()
// .then(collection => {
//    collection.docs.forEach(doc => console.log(doc.id, doc.data()))
// })
// .catch(console.err)

//query docs from collection
// db.collection('car')
// .where('year', '>=', 2015)
// .get()
//     .then(collection => {
//         const cars = collection.docs.map(doc => doc.data())
//         console.log(cars)
//     })
//     .catch(console.error)

db.collection('car')
.where('year', '>=', 2015)
.get()
    .then(collection => {
        const cars = collection.docs.map(doc => {
            let car = doc.data() // {make, model, color, year}
            car.id = doc.id // {make, model, color, year, id}
            return car
            
        })
        console.log(cars)
    })
    .catch(console.error)