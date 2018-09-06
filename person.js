class Person  {
  constructor(name,email,city,gender,type,id){
    this.name = name;
    this.email = email;
    this.city = city;
    this.gender = gender;
    this.type = type;
    this.id = id;
  }
  updateUI(e,type,id){
    var str;
    if (e.target.className == 'name-') {
      var name = prompt("Enter new Name.")
      e.target.parentNode.parentNode.childNodes[1].textContent = name
       return [str = 'name',name];
    }else if (e.target.className == 'email-') {
      var email = prompt("Enter new Name.")
      e.target.parentNode.parentNode.childNodes[1].textContent = email
      return [str = 'email',email];
    }else if (e.target.className == 'city-') {
      var city = prompt("Enter new Name.")
      e.target.parentNode.parentNode.childNodes[1].textContent = city
      return [str = 'city',city];
    }
  }
  updateStructure(type,id,str,val,data){
    var ids,index;
    ids = data[type].id;
    index = ids.indexOf(+id);
    if (str == 'name') {
      data[type].name[index] = val;
    }else if(str == 'email'){
      data[type].email[index] = val;
    }else if (str == 'city') {
      data[type].city[index] = val;
  }
}

  deleteItem(type,id,data){
    var ids,index;
    ids = data[type].id;
    index = ids.indexOf(+id);
    if (index != -1) {
      data[type].name.splice(index,1);
      data[type].email.splice(index,1);
      data[type].city.splice(index,1);
      data[type].id.splice(index,1);
      /* if (data[type].id[index] != undefined) {
        var loopinArr = data[type].id.slice(index);
       if (index == data[type].id.length - 1) {
          data[type].id.shift();
        }
        for (var i = 0,j = 0; i < loopinArr.length; i++,j++) {
          data[type].id[index + j] = loopinArr[i] - 1
        }

      }*/



    }
  }


testing(){
  console.log(data);
  }

  getInput(){
  var checkRadio;
  var arr = document.querySelectorAll('.radio');
  arr.forEach((cur)=>{
    cur.checked ? checkRadio = cur.value:null
  })
 //  for (var i = 0; i < arr.length; i++) {
 //    if (arr[i].checked) {
 //      checkRadio = arr[i].value;
 //    }
 // }

  return{
    name : document.querySelector('.name').value,
    email : document.querySelector('.email').value,
    city : document.querySelector('.city').value,
    type : document.querySelector('.select').value,
    gender : checkRadio,
    }
  }
  updateUI (e,type,id){
    var str;
    if (e.target.className == 'name-') {
      var name = prompt("Enter new Name.")
      e.target.parentNode.parentNode.childNodes[1].textContent = name
      return [str = 'name',name];
   }else if (e.target.className == 'email-') {
      var email = prompt("Enter new Name.")
      e.target.parentNode.parentNode.childNodes[1].textContent = email
      return [str = 'email',email];
    }else if (e.target.className == 'city-') {
      var city = prompt("Enter new Name.")
      e.target.parentNode.parentNode.childNodes[1].textContent = city
      return [str = 'city',city];
    }
  }

// Showing Entered Data
  showPerson(obj){
    var text,newText;
    for (var i = 0; i < obj.length; i++) {
      text = '<div class="header" id="%type%-%id%"><button class="removeBtn">&times</button><table><tr class="same"><td><b class = "name-">Name:</b></td><td class = "name-text">%name%</td></tr><tr class="same"><td><b class = "email-">Email:</b></td><td class = "email-text">%email%</td></tr><tr class="same"><td><b>Gender:</b></td><td>%gender%</td></tr><tr class="same"><td><b class = "city-">City:</b></td><td class = "city-text">%city%</td></tr></table><div class="bottom"></div></div>';
      newText = text.replace('%name%',obj[i].name);
      newText = newText.replace('%email%',obj[i].email);
      newText = newText.replace('%gender%',obj[i].gender);
      newText = newText.replace('%city%',obj[i].city);
      newText = newText.replace('%id%',obj[i].id);
      newText = newText.replace('%type%',obj[i].type);
      if(obj[i].type == 'student'){
        document.querySelector('.stdRemove').insertAdjacentHTML('beforeend',newText);
      }else{
        document.querySelector('.teaRemove').insertAdjacentHTML('beforeend',newText);
      }

    }

  }

}

export default Person;
