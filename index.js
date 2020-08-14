import fetch from "node-fetch";
import moment from "moment";



// const myPromise = () => {
//     return new Promise((resolve, reject) => {
    
//     fetch("https://cat-fact.herokuapp.com/facts/random")
//     .then(result =>  result.json())
//     .then(jsonResult => {
        
//         if(moment().subtract(100, 'days') < moment(jsonResult.updatedAt)) {
//             resolve(jsonResult.text) 
//         }
//         else {
//             reject(Error("Data is too old"));
//         }
//     });
    
    
// });

// }

const myPromise = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
    const json = await response.json()

    if(moment().subtract(50, 'days') < moment(json.updatedAt)) {
        return (json.text) 
    }

    console.warn("fact was too old");
    return await myPromise();
    // else {
    //     throw Error("Data is too old");
    // }
  

}

myPromise().then(console.log)
.catch((error) =>console.log(error));






// fetch("https://cat-fact.herokuapp.com/facts/random")
//     .then(result =>  result.json())
//         .then(jsonResult => console.log(jsonResult.text));




// console.log("Hello World");