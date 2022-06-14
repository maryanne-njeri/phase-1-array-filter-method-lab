// Code your solution here
const findMatching = (names, str) => {
    let myArr = [];
    for(const name of names){
        if(name === str || name.toLowerCase() === str.toLowerCase()){
            myArr.push(name)
        }
    }
    return myArr;
}

const fuzzyMatch = (names, str) => {
    let myArr = [];
    for(const name of names){
        if(name.slice(0, 1) === str.slice(0, 1)){
            myArr.push(name)
        }
    }
    return myArr;
}

const matchName = (myArray, str) => {
    const myArr = [];
    for(const user of myArray){
        if(user.name.toLowerCase() === str.toLowerCase() || user.hometown.toLowerCase() === str.toLowerCase()){
            myArr.push(user)
        }
    }
    return myArr;
}