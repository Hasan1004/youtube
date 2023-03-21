const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Learning Journey        ");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("Enter your link:~$ ", (value) => {
  console.log(value);
  fs.writeFile(
    "link.js",
    `const offerLink = "vnd.youtube://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbVVOWkFmWFF0WWIxd0NoX3R6V2h6UVBPYjNDZ3xBQ3Jtc0tualFLMVkxUUo2V2VxVTVOek9pRWMxcXVBSjJDb1FmV2hWVldZaEt4UVNrRGV3LUlPN2txN2ZYMm5JUXVSR1NTdFlzUnJQaDVhVF9KeVZQUDNGalMyZnF3WlZSSTZzTDE1S1NLb2Y3Y0tJQ3pqLWg0SQ&q=${ytLink}=${value}&html_redirect=1";`,
    function (err) {
      console.log("Link set seccussful.");
 
      process.exit();
    }
  );
  //
  fs.writeFile("./st/link.js", `const offerLink = "${value}";`, function (err) {
    console.log("Link set seccussful.");
    process.exit();
  });
});
