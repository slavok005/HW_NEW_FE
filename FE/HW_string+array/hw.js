//_________HW-1____________
// let elems = [
//     '<div><p class="text">Home</p></div>',
//     '<div><p class="text">About</p></div>',
//     '<div><p class="text">FAQ</p></div>',
//     '<div><p class="text">Contacts</p></div>'
//   ];
  
//   let result = elems.map(html => html.match(/<p[^>]*>([^<]+)<\/p>/)[1]);
  
//   console.log(result);

//____________HW-2_____________
// function initCap(array) {
//     return array.map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//   }
  
//   let words = ['стакан', 'молоко', 'табуретка', 'вода'];
//   let result = initCap(words);
//   console.log(result); // ['Cтакан', 'Молоко', 'Табуретка', 'Вода']
//____________________HW-3________________
// let names = [
//     'Steven King',
//     'Jonh Snow',
//     'Oliver',
//     'Neena Stich',
//     'Grant Laster',
//     'Persius Master',
//     'Lest'
//   ];
  
//   let full_names = names.map(function(name) {
//     let parts = name.split(' ');
//     if (parts.length === 2) {
//       return [parts[0], parts[1]];
//     } else {
//       return [parts[0], undefined];
//     }
//   });
  
//   console.log(full_names);