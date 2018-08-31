var dataController = (function(){
  var Person = function(name,email,city,type){
    this.name = name;
    this.email = email;
    this.city = city;
    this.type = type;
  }

  data = {
    student:{
      type: [],
      name: [],
      email: [],
      city: []
    },
    teacher:{
      type: [],
      name: [],
      email: [],
      city: []
    }
  }

  return{

    addPerson:function(name,email,city,type){
      newPerson = new Person(name,email,city,type);
      if (type == 'student') {
        data.student.name.push(newPerson.name);
        data.student.email.push(newPerson.email);
        data.student.city.push(newPerson.city);
        data.student.type.push(newPerson.type);
      }else {
        data.teacher.name.push(newPerson.name);
        data.teacher.email.push(newPerson.email);
        data.teacher.city.push(newPerson.city);
        data.teacher.type.push(newPerson.type);
      }
      document.querySelector('.name').value = '';
      document.querySelector('.email').value = '';
      document.querySelector('.name').focus();
      return newPerson;

    },
    testing: function(){
      console.log(data);
    }
  }
})();

var UIController = (function(){
  return{
    getInput:function(){
      return{
        name : document.querySelector('.name').value,
        email : document.querySelector('.email').value,
        city : document.querySelector('.city').value,
        type : document.querySelector('.select').value
      }
    },
    showPerson:function(obj){
      var text,newText;

      for (var i = 0; i < obj.length; i++) {
        text = '<div class="header"><div class="same"><b>Name:</b><span>%name%</span></div><div class="same"><b>Email:</b><span>%email%</span></div><div class="same"><b>City:</b><span>%city%</span></div></div><div class="bottom"></div>';
        newText = text.replace('%name%',obj[i].name);
        newText = newText.replace('%email%',obj[i].email);
        newText = newText.replace('%city%',obj[i].city);

        if(obj[i].type == 'student'){
          document.querySelector('#student').insertAdjacentHTML('beforeend',newText);
        }else{
          document.querySelector('#teacher').insertAdjacentHTML('beforeend',newText);
        }

      }
    }
  }
})()

var backControl = (function(UICtrl,Ctrl){
  var input,studentObj = [],teacherObj = [],item;
  document.querySelector('.add').addEventListener('click',function(){
    input  =  UICtrl.getInput();
    if (input.name == '' || input. email == '') {
      null
    }else {
      if (input.type == 'student') {
        studentObj.push(Ctrl.addPerson(input.name,input.email,input.city,input.type));
      }else if(input.type == 'teacher'){
        teacherObj.push(Ctrl.addPerson(input.name,input.email,input.city,input.type));
      }
    }

  })


  document.querySelector('.showStud').addEventListener('click',function(){
    if (studentObj.length > 0) {
      console.log(studentObj.length);
      UICtrl.showPerson(studentObj);
      for (var i = 0; i <= studentObj.length + 1; i++) {
        studentObj.shift();
      }
    }


    })
  document.querySelector('.showTeach').addEventListener('click',function(){
    if (teacherObj.length > 0) {
      console.log(teacherObj.length);
      UICtrl.showPerson(teacherObj);

      for (var i = 0; i <= teacherObj.length + 1; i++) {
        teacherObj.shift();
      }
    }


  })


})(UIController,dataController);























/*let data;
data = {
  name : [],
  email : [],
  city : []
};
var Person = function(name,email,city){
  this.name = name;
  this.email = email;
  this.city = city;
}
document.querySelector('.add').addEventListener('click',function(){
  let person,text,newText;

  console.log(data);

  person = new Person(data.name,data.email,data.city);
  data.name.push(person.name);
  data.email.push(person.email);
  data.city.push(person.city);

  text = '<div id="header"><div class="same"><b>Name:</b><span>%name%</span></div><div class="same"><b>Email:</b><span>%email%</span></div><div class="same"><b>City:</b><span>%city%</span></div></div>';
  newText = text.replace('%name%',person.name);
  newText = newText.replace('%email%',person.email);
  newText = newText.replace('%city%',person.city);
  document.querySelector('#head').insertAdjacentHTML('beforeend',newText)
})



/*
var header = document.createElement('div');
header.setAttribute('id','header');
same1 = document.createElement('div');
same1.setAttribute('class','same');

same2 = document.createElement('div');
same2.setAttribute('class','same');
same3 = document.createElement('div');
same3.setAttribute('class','same');


bold1 = document.createElement('b');
bold2 = document.createElement('b');
bold3 = document.createElement('b');
nameText = document.createTextNode('Name:')
emailText = document.createTextNode('Email:')
cityText = document.createTextNode('City:')
span1 = document.createElement('span');
span2 = document.createElement('span');
span3 = document.createElement('span');
spanNameText = document.createTextNode('%name%');
spanEmailText = document.createTextNode('%email%');
spanCityText = document.createTextNode('%city%');




bold1.appendChild(nameText);
span1.appendChild(spanNameText);
bold1.appendChild(span1);
console.log(bold1);
bold2.appendChild(emailText);
span2.appendChild(spanEmailText);
bold2.appendChild(span2);
console.log(bold2);

bold3.appendChild(cityText);
span3.appendChild(spanCityText);
bold3.appendChild(span3);
console.log(bold3);

same1.appendChild(bold1);
same2.appendChild(bold2);
same3.appendChild(bold3);
header.appendChild(same1);
header.appendChild(same2);
header.appendChild(same3);
console.log(header);
*/
