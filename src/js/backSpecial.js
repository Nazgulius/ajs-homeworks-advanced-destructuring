export default function backSpecial (character) {
  let newArray = [];
  
  for (let i = 0; i < character.special.length; i++) {
    let {id, name, description = 'Описание недоступно', icon} = character.special[i];
    let temp = {};
    
    temp.id = id;
    temp.name = name;
    temp.description = description;
    temp.icon = icon;
    
    newArray.push(temp);
  }
  
  return newArray;
}
