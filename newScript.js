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
        console.log(data[type].id[data[type].id.length - 1]);
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
      var arr = document.querySelectorAll('.radio')
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
          checkRadio = arr[i].value;
        }
     }

      return{
        name : document.querySelector('.name').value,
        email : document.querySelector('.email').value,
        city : document.querySelector('.city').value,
        type : document.querySelector('.select').value,
        gender : checkRadio,
      }
    },
// Showing Entered Data
    showPerson:function(obj){

      var text,newText;
      for (var i = 0; i < obj.length; i++) {
        text = '<div class="header" id="%type%-%id%"><button class="removeBtn">&times</button><table><tr class="same"><td><b>Name:</b></td><td>%name%</td></tr><tr class="same"><td><b>Email:</b></td><td>%email%</td></tr><tr class="same"><td><b>Gender:</b></td><td>%gender%</td></tr><tr class="same"><td><b>City:</b></td><td>%city%</td></tr></table><div class="bottom"></div></div>';
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
  var input,studentObj = [],teacherObj = [],checkStudentObj = checkTeacherObj = true;


  var settingUPEventListeners = function(){

      document.querySelector('.add').addEventListener('click',addingInput)

      document.querySelector('.showStud').addEventListener('click',showStudents)

      document.querySelector('.showTeach').addEventListener('click',showTeachers)

      document.querySelector('.box').addEventListener('click',deleteItemFromUI)

  }





showTeachers = function(){
  if (teacherObj.length > 0) {

    checkTeacherObj = false;
    checkTeacher = true;
    UICtrl.showPerson(teacherObj);
    for (var i = 0; i <= teacherObj.length + 1; i++) {
      teacherObj.shift();
    }
  }

}



showStudents = function(){
  if (studentObj.length > 0) {

    checkStudentObj = false;
    checkStudent = true;
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

  if (check.slice(-4) == '.com') {
    ending = true;
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
  settingUPEventListeners();

})(UIController,dataController);
