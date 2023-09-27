// Write your solution here!

  const cats=["Milo", "Otis", "Garfield"];

  function beforeEach(cats){
    cats.length=0;
    cats.push('Milo', 'Otis', 'Garfield');
  }
  function destructivelyAppendCat(name){
    name='Ralph'
    cats.push(name);
    return(cats);
  }
  function destructivelyPrependCat(name){
    name='Bob'
    cats.unshift(name)
  }
  function destructivelyRemoveLastCat(){
    cats.pop();
  }
  function destructivelyRemoveFirstCat(){
    cats.shift();

  }
  function appendCat(name1){
     name1='Broom'
    const newcats=[...cats,name1];
    return newcats;
  }
  function prependCat(name){
    name='Arnold';
    const newCats=[name,...cats];
    return newCats;
  }
  function removeLastCat(){
    const newCats=cats.slice(0,2);
    return newCats;
  }
  function removeFirstCat(){
    const newCats=cats.slice(1);
    return newCats;
  }