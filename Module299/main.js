var programingLanguage=['Real Madrid', 'AC Milan', 'Bayern Munchen', 'FC Barcelona']

console.log(programingLanguage[0])
console.log(programingLanguage[1])
console.log(programingLanguage[2])  
console.log(programingLanguage[3])

programingLanguage.push('MAN CITY')
console.log(programingLanguage)  

programingLanguage.pop()
console.log(programingLanguage)

programingLanguage.shift()
console.log(programingLanguage)

programingLanguage.unshift('Liverpool')
console.log(programingLanguage)

programingLanguage.splice(1,2, 'Bayern Munchen')
console.log(programingLanguage)

console.log(Math.random()*5)

console.log(Math.floor(Math.random()*5))

var students=['JON', 'DIAR']
var [s1,s2]=students
console.log(s1)
console.log(s2)


var places = ['LONDON', 'paris', 'france', 'berlin', 'new york']
var[firstPlace,  ,secondPlace]=places
console.log(secondPlace)