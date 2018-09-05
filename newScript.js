var ID;
var dataController = (function(){

// Person Class
  var Person = function(name,email,city,gender,type,id){
    this.name = name;
    this.email = email;
    this.city = city;
    this.gender = gender;
    this.type = type;
    this.id = id;
  }

//Data Structure

  data = {
    student:{
      name: [],
      email: [],
      city: [],
      id:[]

    },
    teacher:{
      name: [],
      email: [],
      city: [],
      id:[]

    }
  }

  return{

// Adding Person in Data Structure

    addPerson:function(name,email,city,gender,type){

      if (data[type].name.length > 0) {
        ID = data[type].id[data[type].id.length - 1] + 1
      }else {
        ID = 0;
      }

      newPerson = new Person(name,email,city,gender,type,ID);

      if (type == 'student') {
        data.student.name.push(newPerson.name);
        data.student.email.push(newPerson.email);
        data.student.city.push(newPerson.city);
        data.student.id.push(newPerson.id);
      }else {
        data.teacher.name.push(newPerson.name);
        data.teacher.email.push(newPerson.email);
        data.teacher.city.push(newPerson.city);
        data.teacher.id.push(newPerson.id);
      }

      document.querySelector('.name').value = '';
      document.querySelector('.email').value = '';
      document.querySelector('.name').focus();
      return newPerson;

    },
    deleteItem:function(type,id){
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
    },
    updateStructure:function(type,id,str,val){
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
  },

    testing: function(){
      console.log(data);
    }
  }
})();

var UIController = (function(){
  return{

// Getting Input From User
    getInput:function(){
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
    },
    updateUI : function(e,type,id){
      var str;
      if (e.target.className == 'name-') {
        var name = prompt("Enter new Name.")
        console.log(e.target.parentNode.parentNode.childNodes[1]);
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
    },

// Showing Entered Data
    showPerson:function(obj){

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
})()

var backControl = (function(UICtrl,Ctrl){
  var input,studentObj = [],teacherObj = [];


  var settingUPEventListeners = function(){

      document.querySelector('.add').addEventListener('click',addingInput)

      document.querySelector('.showStud').addEventListener('click',showStudents)

      document.querySelector('.showTeach').addEventListener('click',showTeachers)

      document.querySelector('.box').addEventListener('click',deleteItemFromUI)

    document.querySelector('.box').addEventListener('dblclick',letSee)
  }





showTeachers = function(){
  if (teacherObj.length > 0) {

    UICtrl.showPerson(teacherObj);
    for (var i = 0; i <= teacherObj.length + 1; i++) {
      teacherObj.shift();
    }
  }

}



showStudents = function(){
  if (studentObj.length > 0) {

    UICtrl.showPerson(studentObj);
    for (var i = 0; i <= studentObj.length + 1; i++) {
      studentObj.shift();
    }
  }

}



addingInput = function(){
  var check,sign,ending;
  input  =  UICtrl.getInput();
  check = input.email;

  for (var i = 0; i < check.length; i++) {
    if (check[i] == '@') {
      sign = true;
    }
  }





  for(var i = 0;i<check.length; i++){
  	if(check.slice(i,4+i)=='.com'){
      ending = true
    }
  }


  if (input.name == '' || input. email == '' || input.gender == undefined || (!sign) || (!ending)) {
    null
  }
  else {
    if (input.type == 'student') {
      studentObj.push(Ctrl.addPerson(input.name,input.email,input.city,input.gender,input.type));

    }else if(input.type == 'teacher'){
      teacherObj.push(Ctrl.addPerson(input.name,input.email,input.city,input.gender,input.type));
    }

  }

}



  deleteItemFromUI = function(e){
    var itemId,splitId,type,id;
    itemId = e.target.parentNode.id;
    if (itemId) {
      splitId = itemId.split('-');
      type = splitId[0]
      id = splitId[1];
      Ctrl.deleteItem(type,id);
      e.target.parentNode.remove();
    }
}

letSee = function(e){
  var checking;
//  console.log(nameCheck,emailCheck,cityCheck);
var itemId,splitId,type,id;
itemId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
if (itemId) {
  splitId = itemId.split('-');
  type = splitId[0]
  id = splitId[1];

  checking = UICtrl.updateUI(e,type,id);
  Ctrl.updateStructure(type,id,checking[0],checking[1]);
  }
}
  settingUPEventListeners();

})(UIController,dataController);
