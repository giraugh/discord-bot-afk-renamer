const words = require('an-array-of-english-words')

const capitalise = (word) => word.charAt(0).toUpperCase() + word.slice(1)

module.exports = () => {
  const shortWords = words.filter(word => word.length < 8)
  const aWords = shortWords.filter(word => !!word.match(/^(a|A)(.*)/i))
  const fWords = shortWords.filter(word => !!word.match(/^(f|F)(.*)/i))
  const kWords = shortWords.filter(word => !!word.match(/^(k|K)(.*)/i))
  const aWord = capitalise(aWords[Math.floor(Math.random() * aWords.length)])
  const fWord = capitalise(fWords[Math.floor(Math.random() * fWords.length)])
  const kWord = capitalise(kWords[Math.floor(Math.random() * kWords.length)])

  if (aWord && fWord && kWord) {
    return `${aWord} ${fWord} ${kWord}`
  } else {
    return 'Away From Keyboard'
  }
}
