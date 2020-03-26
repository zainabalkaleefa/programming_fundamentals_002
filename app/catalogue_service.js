// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks(array) {
  // Your code here
return array.length;
}

function checkBook(book) {
  // Your code here
  if(catalogue.includes(book)) {return true;}
else {return false;}
  }

  
function countBooksByFirstLetter(letter) {

  // Your code here
  let firstLetters = [];
  let num = 0;
  for (let i=0; i<20; i++)
  {
   firstLetters.push(catalogue[i].charAt(0));
  }
for (let i=0; i<20;i++)
{
if (firstLetters[i]===letter){ num++;}
}
return num;
}

function countBooksByKeyword(keyword) {
  // Your code here
  let num= 0;
 let key= keyword.charAt(0).toUpperCase() + keyword.slice(1); ;
  for (let i=0; i<20; i++){
    if (catalogue[i].includes(key)) {num++;}
  }
  return num;
  
}


 let list =[];
 function getBooksByAuthor(author) {
  for (let i=0;i<20;i++)
  {
   if (catalogue[i].indexOf(author) >=0) {list.push(catalogue[i]) ;}
  }
   return list;
 
}


module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
