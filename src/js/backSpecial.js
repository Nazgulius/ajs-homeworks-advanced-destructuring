export default function backSpecial (character) {
  let newArray = [];
  
  for (let i = 0; i < character.special.length; i++) {
    let {id, name, description, icon} = character.special[i];
    let temp = {};
    if (!description) {
      description = 'Описание недоступно';
    }
    temp.id = id;
    temp.name = name;
    temp.description = description;
    temp.icon = icon;
    
    newArray.push(temp);
  }
  
  return newArray;
}