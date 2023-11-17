// /*
//  * The function should return the names of those entries whose date is the current date. The names should be separated by a comma.
//  *
//  * For example, here's an array of three entries and assume the date now is 2022-04-01.
//  *
//  * [{ name: "Harry" , date: "2022-04-01T02:53:42+05:30" }, { name: "Hermione" , date: "2022-04-02T02:53:42+05:30" }, { name: "Ron" , date: "2022-04-01T03:53:42+05:30" }]
//  *
//  * The function should return: ``` Harry,Ron ```. Please note that the names are separated by a comma without space.
//  */

// function todaysEntries(entries) {
// 	let todayDate = new Date();

// 	let todayyear = todayDate.getFullYear();
// 	let todaymonth = todayDate.getMonth();
// 	let todayday = todayDate.getDate();

// 	// todayDate = todayDate.split("-")
// 	// let dateNumber = item => Number(item);

// 	// todayDate = todayDate.map(dateNumber);
// 	// let todayyear = todayDate[0];
// 	// let todaymonth = todayDate[1];
// 	// let CurrentDate = todayDate[2];

// 	let today = item => {
// 		let name = item.name;
// 		let date = item.date;
// 		date = date.split("-");

// 		let year = Number(date[0]);
// 		let month = Number(date[1]);
// 		let Namedate = Number(date[2][1]);

// 		if( (todayyear == year) && (todaymonth == month) && (Namedate == todayday) ){
// 			return name;
// 		}
// 		else{
// 			return " ";
// 		}

// 	}

// 	let result = entries.map(today);

// 	let ans = item => item != " ";

// 	result = result.filter(ans);
// 	//console.log(result.join(","));
// 	return result.join(",");
// }
function todaysEntries(entries) {
  const CD = new Date().toISOString().slice(0, 10);
  console.log(CD);
  let mN = [];
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (entry.date.slice(0, 10) === CD) {
      mN.push(entry.name);
    }
  }
  return mN.join(",");
}
let entry = [
  { name: "Harry", date: "2023-03-13T02:53:42+05:30" },
  { name: "Hermione", date: "2022-04-02T02:53:42+05:30" },
  { name: "Ron", date: "2022-04-01T03:53:42+05:30" },
];
console.log(todaysEntries(entry));

module.exports = todaysEntries;
