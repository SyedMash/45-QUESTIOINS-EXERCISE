// Question 2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("I solved this question by using my knowledge of Python and Javascript, I was not very familiar with the TypeScript syntax\n so I took help in some questions, (I mentioned the help I took with the Quesiton in comments)")

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 2")
let yourname: string = "mashHood huSsain";
console.log(
  `Hello ${yourname}, would you like to learn some TypeScript today?”`
);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 3")
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let upr: string = yourname.toUpperCase();
let lwr: string = yourname.toLowerCase();
let tle: string = yourname[0].toLowerCase()
  ? yourname[0].toUpperCase() + yourname.slice(1)
  : yourname;
console.log(`Original Name: ${yourname} \nUpperCase: ${upr} \nLowerCase: ${lwr}\nTitleCase: ${tle}`);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 4")
// Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log(
  `Andrew Tate once said, "You’ve been given another day of life. How will you use it? Will you wait until tomorrow as you’ve done for years or decide today is the day you commit to excellence?" `
);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 5")
// Question 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_Person: string = "Andrew Tate";
let message: string =
  "Your future is the result of your daily actions. You’re defined by what you do today. Lazy now, loser later. Get to work.";
console.log(`${famous_Person} once said, "${message}"`);

console.log("---------------------------------------------------------------------------------------------------------------------------")


console.log("QUESTION 6")
// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//  \t give one tab spaces \n start next line
let namews: string = "\t Mashhood \n";
console.log(namews);
// trim removes whitespaces from the string
let namwws: string = namews.trim();
console.log(namwws);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 7 and 8")
// Question 7 and 8 : Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this: console.log(5+3)
console.log(5 + 3);
console.log(5 - 3);
console.log(6 / 3);
console.log(6 * 3);
console.log(6 % 3);

console.log("---------------------------------------------------------------------------------------------------------------------------")


console.log("QUESTION 9")
// Question 9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favNum: number = 18;
let favNumMsg: string = `My favourite number is ${favNum}`;
console.log(favNumMsg);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 11")
// Question 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendNames: string[] = ["Ali", "Ronaldo", "AT", "Messi"];
for (let i = 0; i < friendNames.length; i++) {
  console.log(friendNames[i]);
}

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 12")
// Question 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (let i = 0; i < friendNames.length; i++) {
  console.log(`Hello ${friendNames[i]}, How are you doin'? `);
}

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 13")
// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let Transport: string[] = [
  "Kawasaki Ninja H2R",
  "Suzuki Hayabusa",
  "Kawasaki Z650",
  "Ducati Panigle v4",
];
for (let i = 0; i < Transport.length; i++) {
  console.log(`I would like to own a ${Transport[i]}`);
}

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 14")
// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest: string[] = ["Ronaldo", "Andrew Tate", "Messi", "EM"];
Guest.forEach((g) => {
  console.log(
    `Hey ${g}, Would you like to join me at the dinner tonight, that would be so nice of you`
  );
});

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 15")
// Question 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.


console.log("QUESTION 15 Not invited part")

let notguest: string = "EM";
console.log(
  `${notguest} is unaable to come due to personal reason, so below is the updated list`
  );
  console.log("************ UPDATE LIST ***************");

  let newguest: string = "Bill Gates";
  for (let m = 0; m < Guest.length; m++) {
    if (Guest[m] === notguest) {
      Guest[m] = newguest;
    }
    console.log(
      `Hey ${Guest[m]}, lets have some real talk at the dinner tonight. `
      );
    }

    console.log("---------------------------------------------------------------------------------------------------------------------------")
    
console.log("QUESTION 16 and 17")
// Question 16 17: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("******* MORE GUEST ***********");
Guest.push("Jess Bezos", "Tristain Tate", "Mbappe");
Guest.forEach((gu) => {
  console.log(
    `Hey ${gu}, We've got a bigger table now as other pals are joining too`
  );
});
console.log("QUESTION 16")
// Question 16
Guest.unshift("Jeff");
console.log(Guest);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 17")
// Question 17
Guest.splice(3, 0, "Dua Lipa");
Guest.forEach((ug) => {
  console.log(
    `Hey ${ug}! We got two more friends, this dinner is goining to be very fun and informative`
  );
});

console.log("---------------------------------------------------------------------------------------------------------------------------")


console.log("QUESTION 17 Parts")
// Question 17 parts
while (Guest.length > 2) {
  let remove = Guest.pop();
  if (remove) {
    console.log(`Hey ${remove} i am really sorry i cant invite you`);
  }
}
console.log("**********other 2*******");
Guest.forEach((gues) => {
  console.log(`HELLO ${gues} You are still invited`);
});

while (Guest.length > 0) {
  Guest.pop();
}
console.log(Guest);

console.log("---------------------------------------------------------------------------------------------------------------------------")


console.log("QUESTION 18")
// Quesiton 18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places: string[] = [
  "The bean",
  "Eifel Tower",
  "River Walk",
  "chicago mueseum",
  "berlin",
];
let Placescopy: string[] = [...places];
console.log("Sorted ARRAY", Placescopy.sort());
console.log("Original array", places);
console.log("Reverse alphabetical order", Placescopy.reverse());
console.log("Original Array", places);
console.log("Orinial array reversed", places.reverse());
console.log("orinial array revered again to original form", places.reverse());
console.log("original array sorted", places.sort());
console.log("orinial sorted array revered", places.reverse());

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESITON 19")
// Question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
Guest = ["Ronaldo", "Andrew Tate", "Messi", "EM"]; //array of guest from question 14
console.log(`Total ${Guest.length} peoples are invited`);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 20")
// Question 20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let cities: string[] = [
  "chicago",
  "karachi",
  "dubai",
  "berlin",
  "tokyo",
  "paris",
  "london",
];
cities.forEach((city) => {
  console.log(city);
});

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 21")
// Question 21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// I DIDN'T KNEW HOW TO CREATE TYPESCRIPT OBJECT SO I TOOK HELP FROM CHAT GPT, (BUT NOW I KNOW :)  )
interface countryobj {
  name: string;
  capital: string;
  population: number;
}
let countries: countryobj[] = [
  { name: "USA", capital: "Washington, DC", population: 331002651 },
  { name: "Germany", capital: "Berlin", population: 583518632 },
  { name: "Pakistan", capital: "Islamabad", population: 4565343835 },
];

interface citiesinobj {
  nameofcity: string;
  cityof: string;
}
let citisfromobj: citiesinobj[] = [
  { nameofcity: "Chicago", cityof: "USA" },
  { nameofcity: "Berlin", cityof: "Germany" },
];
console.log(countries);
console.log(citisfromobj);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 22")
// Question 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let somenumbers: number[] = [4, 8, 7, 9, , 8, 5, 8, 1, 7];
let index = somenumbers[somenumbers.length + 1];
// console . logging the index will output undefined becuase the index value in index is greater than the length of somenumbers array
console.log(index);
if (index == undefined) {
  console.log("the index value in not present");
} else {
  console.log(index);
}

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 23")
// Question 23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car: string = "Bugatti";

console.log("Is car == 'Bugatti'?."); // i predict its neither false nor true, it will print string as it is because its a string not comparision

console.log(car == "Bugatti"); // i predict true because its a right way to do comparision

let bike: string = "H2R";
console.log(bike == "H2R"); // True

let city: string = "Karachi";
console.log(city == "Karachi"); // True

let cntry: string = "Pakistan";
console.log(cntry == "Pakistan"); // True

let sports: string = "football";
console.log(sports == "football"); // True

let movie: string = "interstellar";
console.log(movie == "interstellar"); // True

console.log(bike == "125"); // False
console.log(movie == "batman"); // False
console.log(sports == "cricket"); // False
console.log(city == "chicago"); // False
console.log(cntry == "USA"); // False

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 25")
// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color: string = "red";
if (alien_color === "red") {
  console.log("Player just earned 5 points");
}
if (alien_color === "green") {
}

console.log("---------------------------------------------------------------------------------------------------------------------------")


console.log("QUESTION 26")
// Question 26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color2: string = "yellow";
if (alien_color2 === "green") {
  console.log("player just earned 5 points for shooting the alien");
} else {
  console.log("player just earned 10 points");
}

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 27")
// Question 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color3: string = "green";
if (alien_color3 === "green") {
  console.log(`player just earned 5 points`);
} else if (alien_color3 === "yellow") {
  console.log(`player just earned 10 points`);
} else if (alien_color3 === "red") {
  console.log(`player just earned 15 points`);
}

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 28")
// Question 28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age: number = 25;
if (age < 2) {
  console.log(`person is a baby`);
} else if (age >= 2 && age < 4) {
  console.log(`person is a toddler`);
} else if (age >= 4 && age < 13) {
  console.log(`person is a kid`);
} else if (age >= 13 && age < 20) {
  console.log(`person is a teenager`);
} else if (age >= 20 && age < 65) {
  console.log(`person is an adult`);
} else if (age >= 65) {
  console.log(`person is an elder`);
}

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESITON 29")
// Question 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favourite_fruits: string[] = ["apple", "banana", "orange", "mango"];
favourite_fruits.forEach((ff) => {
  if (ff === "apple") {
    console.log("I really like apple");
  }
  if (ff === "orange") {
    console.log("I really like orange");
  }
  if (ff === "banana") {
    console.log("I really like banana");
  }
  if (ff === "mango") {
    console.log("I really like mango");
  }
});

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 30")
// Question 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames: string[] = [
  "mashhood",
  "hussain",
  "talha123",
  "admin",
  "ali",
  "yazan",
  "wajeeh",
];
usernames.forEach((unames) => {
  if (unames === "admin") {
    console.log("Hello admin, would you like to see a status report");
  } else {
    console.log(`Hello ${unames}, thank you for logging in again`);
  }
});

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 31 ")
// Quesiton 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
while (usernames.length > 0) {
  usernames.pop();
}
if (usernames.length !== 0) {
  console.log(`list is not empty`);
} else {
  console.log("we need to find some users");
}

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 32")
// Quesiton 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users: string[] = [
  "ronldo7",
  "messi10",
  "syedmash",
  "zen1",
  "gamer47",
];
let new_users: string[] = [
  "ronadlo",
  "messi10001",
  "syedmash",
  "zen1457",
  "gamer47",
];
for (let i = 0; i < new_users.length; i++) {
  let exist: boolean = false;
  let alreadyex: string = "";
  for (let j = 0; j < current_users.length; j++) {
    if (current_users[j].toLowerCase() === new_users[i].toLowerCase()) {
      exist = true;
      alreadyex = new_users[i];
    }
  }
  if (exist === true) {
    console.log(
      `user name ${alreadyex} already exist, please type new username`
    );
  } else {
    console.log("usrenams is available");
  }
}

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 33")
// Question 33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] === 1) {
    console.log(`${arrayOfNumbers[i]}st`);
  } else if (arrayOfNumbers[i] === 2) {
    console.log(`${arrayOfNumbers[i]}nd`);
  } else if (arrayOfNumbers[i] === 3) {
    console.log(`${arrayOfNumbers[i]}rd`);
  } else if (arrayOfNumbers[i] === 4) {
    console.log(`${arrayOfNumbers[i]}th`);
  } else if (arrayOfNumbers[i] === 5) {
    console.log(`${arrayOfNumbers[i]}th`);
  } else if (arrayOfNumbers[i] === 6) {
    console.log(`${arrayOfNumbers[i]}th`);
  } else if (arrayOfNumbers[i] === 7) {
    console.log(`${arrayOfNumbers[i]}th`);
  } else if (arrayOfNumbers[i] === 8) {
    console.log(`${arrayOfNumbers[i]}th`);
  } else if (arrayOfNumbers[i] === 9) {
    console.log(`${arrayOfNumbers[i]}th`);
  }
}

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QEUSTION 34")
// Question 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizzas: string[] = ["fajita", "pepperoni", "tikka"];
for (let i = 0; i < pizzas.length; i++) {
  console.log(`i really love ${pizzas[i]} pizza`);
}
console.log(`I really love pizza`);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 35")
// Question 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals: string[] = ["cat", "dog", "cow"];
for (let i = 0; i < animals.length; i++) {
  if (animals[i] === "cat") {
    console.log(`Cat is very human friendly animal`);
  } else if (animals[i] === "dog") {
    console.log(`dog is very wafadaat pet`);
  } else console.log(`Cow is also very human friendly animal`);
}
console.log("Common thing about them is: They all are good pet animals ");

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 36")
// Question 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: string, textmessage: string) {
  return `Your size is ${size} and you want this message to be printed on t-shirt -- (${textmessage})`;
}
let customer1 = make_shirt(
  "small",
  "I want a image of Eiffel tower to be printed on my shirt"
);
console.log(customer1);
let customer2 = make_shirt(
  "medium",
  "I just wanted is simple black color shirt with text written 'white' on it"
);
console.log(customer2);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QEUSTION 37")
// Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt_modified(
  size: string = "large",
  textmessage: string = "I love TypeScript"
) {
  return `Your size is ${size} and you want this message to be printed on t-shirt -- (${textmessage})`;
}
let largecustomer = make_shirt_modified();
console.log(largecustomer);
let mediumcustomer = make_shirt_modified("medium");
console.log(mediumcustomer);
let smallcustomer = make_shirt_modified(
  "small",
  "I want a football to be printed on my shirt"
);
console.log(smallcustomer);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 38")
// Quesiton 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
let citiesFunc = (cityname: String, countryname: string = "Pakistan") => {
  console.log(`${cityname} is in ${countryname}`);
};
citiesFunc("Karachi");
citiesFunc("Islamabad");
citiesFunc("Chicago", "USA");

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 39")
// Question 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan"
function city_country(citykaname: string, countrykaname: string) {
  console.log(`${citykaname}, ${countrykaname}`);
}
city_country("Karachi", "Pakistan");
city_country("Lahore", "Pakistan");
city_country("Berlin", "Germany");
city_country("Chicago", "USA");

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 40")
// Quesiton 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function without number of tracks
function make_album(ArtistName: string, AlbumTitle: string) {
  interface describingMusicAlbum {
    name: string;
    title: string;
  }
  let albuma: describingMusicAlbum = {
    name: ArtistName,
    title: AlbumTitle,
  };
  return albuma;
}
let album1 = make_album("Ali Zafar", "PSL");
console.log(album1);
let album2 = make_album("Young Stunner", "YS");
console.log(album2);
let album3 = make_album("Ed Sheeran", "SOYOU");
console.log(album3);

console.log("--------------------------------------------------------------------------------------------------------------------------------")

// function with number of tracks
console.log("make_album function with number of tracks")
function make_album_with_tracks(
  ArtistNameT: string,
  AlbumTitleT: string,
  NumerOfTrack: number
) {
  interface describingMusicAlbumWithTracks {
    nameT: string;
    titleT: string;
    tracks: number;
  }
  let albumT: describingMusicAlbumWithTracks = {
    nameT: ArtistNameT,
    titleT: AlbumTitleT,
    tracks: NumerOfTrack,
  };
  return albumT;
}
let alumtack1 = make_album_with_tracks("ALi ZAFAR", "PSL SONGS", 10);
console.log(alumtack1);
let alumtack2 = make_album_with_tracks("SM", "Sarkar", 5);
console.log(alumtack2);
let alumtack3 = make_album_with_tracks("ATIF ASLAM", "1968", 21);
console.log(alumtack3);

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QEUSTION 41")
// Question 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician: string[] = [
  "Roger Lapin",
  "Paul Daniels",
  "Harry Houdini",
  "Penn & Teller",
];
function show_magicians() {
  magician.forEach((mag) => {
    console.log(mag);
  });
}
show_magicians();

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QEUSTION 42")
// Question 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great() {
  let copyOfMagicians: string[] = [...magician];
  for (let i = 0; i < magician.length; i++) {
    copyOfMagicians[i] = `THE GREAT MAGICIAN ${copyOfMagicians[i]}`;
  }
  console.log(copyOfMagicians);
}
make_great();

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 43")
// Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log(`Original Array of Magician ${magician}`);
console.log("Modified array of magicians")
make_great();

console.log("---------------------------------------------------------------------------------------------------------------------------")

console.log("QUESTION 44")
// Question 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// I DIDN'T KNEW THAT TO RECIEVE INFINITE ARGUMENTS WE NEED TO PASS ...(varibalName) in this case (...items) and also I DIDN'T KNEW WHAT VOID IS, (BUT NOW I DO :) )
function orderSandwich(...items: string[]): void {
  console.log("You chose these items");
  if (items.length === 0) {
  } else {
    items.forEach((sanitems) => {
      console.log(`-- ${sanitems}`);
    });
  }
}
orderSandwich("ketchup", "masala", "chicken", "chatni", "mayo");
orderSandwich();

console.log("---------------------------------------------------------------------------------------------------------------------------")
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log("QUESTION 45")
// I SOLVED THIS QUESTION WITH THE HELP OF CHAT GPT

interface Car {
  manufacturer: string,
  model:string,
  [key:string]:any
}
function createCar(manufacturer:string, model:string, ...rest:any[]):Car{
  const car: Car = {manufacturer,model}
  rest.forEach(e => {
    for(const key in e){
      if(e.hasOwnProperty){
        car[key] = e[key]
      }
    }
  })
  return car
}
const myCar  = createCar('honda','civic',{color: 'red',year: 2024, horsepower: 451})
console.log(myCar)

















