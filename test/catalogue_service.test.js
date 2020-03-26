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

const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks(catalogue)).toBe(20);
    });
  });

 
    describe("catalogueService.checkBook", () => {
      test("returns true if the book exists in the list", () => {
        expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
      });
  
      test("returns false if the book not exists in the list", () => {
        expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
      });
    });

    describe("catalogueService.countBooksByFirstLetter", () => {
      test("returns the number of books beginning with the given letter", () => {
        expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      });
      test("returns the number of books beginning with the given letter", () => {
        expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
      });
    });

    describe("catalogueService", () => {
      describe("catalogueService.countBooks", () => {
        test("returns the number of books in the list", () => {
          expect(catalogueService.countBooksByKeyword("normal")).toBe(2);
        });
        test("returns the number of books in the list", () => {
          expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
        });
        test("returns the number of books in the list", () => {
          expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
        });
        
      });
    });

    describe("catalogueService", () => {
      describe("catalogueService.countBooks", () => {
        test("return the books by auther in the list", () => {
          expect(catalogueService.getBooksByAuthor("Charles")).toEqual(["A Tale of Two Cities by Charles Dickens", "Oliver Twist by Charles Dickens","Great Expectations by Charles Dickens","The Origin of Species by Charles Darwin"
          ]);
        });
        
    });
  });
  

  

 




});
