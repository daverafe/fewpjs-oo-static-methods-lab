class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'/\s/g]+/g, '')
  }

  static titleize(string) {
    const littleWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let array = string.split(' ')
  let newArray = array.map(word => {
      if(littleWords.includes(word) && word != array[0]) {
        return word 
      } else {
        return this.capitalize(word)
      }
    })
    return newArray.join(' ')
  }

}