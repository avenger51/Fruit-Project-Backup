const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
//guess not...: const suggestions = document.querySelector('.suggestions ul');
//is this to select the fruit for mouse hover?


//ORG PLACEMENT:  Let's keep this and then search it and put into a new array each time?
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 
'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 
'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen',
  'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 
  'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum',
   'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 
   'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {

return fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase()));  //need to ensure lower case for searching strings
}

//ORG: let results = [];  //EDIT:  NOT SURE WHY THIS IS HERE..DID THEY INTEND TO HAVE YOU SPREAD THE ARRAY?

//const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 
//'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 
//'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
// 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen',
//  'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 
//  'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum',
//   'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 
//   'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
// 
//PREVIOUS: const results = fruit.filter(fruitName => fruitName.includes(str));
//
//	
//PREVIOUS: return results;  
//	//working in console only: console.log(fruitName);  
//	//working in console only:  results.push(fruitName);

//console.log('testing') runs when showSuggestions is called in searchHandler.


function searchHandler(e) {
const inputValue = e.target.value;  
const filteredFruits = search(inputValue);
showSuggestions(filteredFruits);
}
//was working: search(inputValue); 
//WORKING: showSuggestions(fruit, inputValue)  but this calls fruit directly...



//This needs to either 'create' the drop down OR the 'drop down' is actually an li?
//SEE ORG WITH FILTER AT BOTTOM*******************************************
function showSuggestions(results) {
	const suggestions = document.querySelector('.suggestions ul');
	suggestions.innerHTML = '';  //THIS IS WHAT WAS A KILLER
	results.forEach((result) => {  //FILTER AND REDUCE WORKED BUT...WONKY
		  const li = document.createElement('li');
		  li.textContent = result;
		  suggestions.appendChild(li);
		
		});
	}


//THIS HAS TO BE CALLED:  //const suggestions = suggestions.addEventListener('click', useSuggestion);
function useSuggestion(e) {
const targetLi = e.target.textContent;
const input = document.getElementById('fruit');
input.value = targetLi;
//const thisLi = document.querySelector('.suggestions ul li') //ON CLICK FOCUS ON THIS?
}
 //SO ON EACH UL LI??
//add into input box the innerHTML of value? 



////have to add a hover in CSS
////when click => enter into input box
//the hover location is:  document.querySelector('.suggestions')
//<div class=​"suggestions">​<ul>​<li>​::marker​"Yuzu"</li>​</ul>​</div>​

suggestions.addEventListener('click', useSuggestion);
//EVENT LISTENERS SHOULD THERE BE MORE??
input.addEventListener('keyup', searchHandler); //every time this is called it needs to do a search??
//guess not...: suggestions.addEventListener('click', useSuggestion);
//edit: input.addEventListener('input', searchHandler);  //for on input but keyup is fine w/e




////ORG SHOWSUGGESTIONS:
//
//
//function showSuggestions(results, inputVal) {
//	const suggestions = document.querySelector('.suggestions ul');
////results = search() lol
//	results.forEach(result => {
//		if (result.includes(inputVal)) {
//		  const li = document.createElement('li');
//		  //should I create a box for this?
//		  li.textContent = result;
//		  suggestions.appendChild(li);
//	
//		}
//	  });
//	}
//ORG SEARCH():
////I think the empty array that was put here is so that the event listener has to:
////1.  search the fruit array, 2.  update the fruit array with the previous letter(s) included...not sure if it has to be in order like
////a p only sellects apply
//function search(str) {
//	//This isn't finding 'apple' when 'a' is input
//	//let results = [];  //THIS WAS COMMENTED OUT IN THE ORG
//	const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 
//	'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 
//	'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
//	 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen',
//	  'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 
//	  'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum',
//	   'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 
//	   'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
//			
//		const results = fruit.filter(fruitName => fruitName.includes(str));
//		
//		return results;  
//		//working in console only: console.log(fruitName);  
//		//working in console only:  results.push(fruitName);
//		};