class Formatter {
  static capitalize(str){
    return str.substring(0,1).toUpperCase() + str.slice(1);
  }


  static sanitize(str){
    return str.replace(/[^a-z0-9-' ]/gi, '');
  }


  static titleize(str){
    const nonCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    let newArr = [];
    let newStr = str.split(' ');
    // console.log(newStr)
    newArr.push(newStr[0].substring(0,1).toUpperCase() + newStr[0].slice(1));
    // console.log(newArr);
    for (const word of newStr){
      if (nonCaps.includes(word)){
          newArr.push(word)
      } else newArr.push(word.substring(0,1).toUpperCase() + word.slice(1));
    } newArr.splice(1,1);
    // console.log(newArr);
    return newArr.join(' ')
  }
}


let str = 'the test is as follows. hello! my an but name is andrew';
Formatter.titleize(str)