// 1. Assign the message "Hello, World!" to a variable.
let n = 'Hello, World!'
console.log(n)

// 2. Assign a different string to a different variable.
let y = 'This is JavaScript'
console.log(y)
// 3. Assign a number to a variable.
let x = 5 + 5
console.log(x)
// 4. Use string concatenation to display the number from #3 in a string.
console.log("How many cookies are in the jar? " + x)
// 5. Make an array of at least four of your favorite movies or books or bands.
const books = ["Game of Thrones", "Lord of the Rings", "A Thousand and One Nights", "One Hundred Years of Solitude", "A Land Remembered"]
console.log(books)
// 6. Make a object of information about yourself with at least four properties.
const myself = {
  eyes: 'blue',
  hair: 'blonde',
  age: '28',
  weight: '120'
}
console.log(myself)
// 7. Make an array of objects containing more information about your favorite movies. The objects should have at least three properties.
let movieArray = [
  {
  name: 'Crouching Tiger Hidden Dragon',
  type: 'Action',
  location: 'China',
  language: 'Mandarine'
},
  {
  name: 'Y Tu Mama Tambien',
  type: 'Coming of Age',
  location: 'Mexico',
  language: 'Spanish'
},
 {
  name: 'Oh Brother Where Art Thou',
  type: 'Comedy',
  location: 'Mississippi',
  language: 'English'
}
]
console.log(movieArray[0].name)
// 8. Use `for` to loop through the answer from exercise #7 and print only one property from the object. i.e., given `{ title: "Gone with the Wind" }` you print "Gone with the Wind".
for (var key in movieArray) {
  if (movieArray.hasOwnProperty(key)) {
  }
}
Object.keys(movieArray).forEach(function (key) {
  console.log(movieArray[key]['name']);
});
