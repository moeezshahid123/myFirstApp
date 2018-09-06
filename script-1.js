


const settingUPEventListeners = () =>{
  document.querySelector('.add').addEventListener('click',ctrl.addingInput)

  document.querySelector('.showStud').addEventListener('click',ctrl.showStudents)

  document.querySelector('.showTeach').addEventListener('click',ctrl.showTeachers)

  document.querySelector('.box').addEventListener('click',ctrl.deleteItemFromUI)


  document.querySelector('.box').addEventListener('dblclick',ctrl.letSee)
}




let ID;
const  data = {
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
  updateStructure(type,id,str,val){
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

  deleteItem(type,id){
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
  updateStructure(type,id,str,val){
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


  class Student extends Person  {
    constructor(name,email,city,gender,type,id){
      super(name,email,city,gender,type,id);
    }
    addPerson(name,email,city,gender,type){


        data.student.name.push(name);
        data.student.email.push(email);
        data.student.city.push(city);
        data.student.id.push(ID);

      document.querySelector('.name').value = '';
      document.querySelector('.email').value = '';
      document.querySelector('.name').focus();

    }
  }


    class Teacher extends Person  {
      constructor(name,email,city,gender,type,id){
        super(name,email,city,gender,type,id);
      }
      addPerson(name,email,city,gender,type){

        if (data[type].name.length > 0) {
          ID = data[type].id[data[type].id.length - 1] + 1
        }else {
          ID = 0;
        }
          data.teacher.name.push(name);
          data.teacher.email.push(email);
          data.teacher.city.push(city);
          data.teacher.id.push(ID);

        document.querySelector('.name').value = '';
        document.querySelector('.email').value = '';
        document.querySelector('.name').focus();

      }
    }

    class Control{
       addingInput (){
               let input,check,sign,ending;
               input  =  personObj.getInput();
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


                 if (data[input.type].name.length > 0) {
                   ID = data[input.type].id[data[input.type].id.length - 1] + 1
                 }else {
                   ID = 0;
                 }


                 if (input.type == 'student') {
                   studentObj.push(student = new Student(input.name,input.email,input.city,input.gender,input.type,ID));

                   student.addPerson(input.name,input.email,input.city,input.gender,input.type,ID);

                 }else if(input.type == 'teacher'){

                   teacherObj.push(teacher = new Teacher(input.name,input.email,input.city,input.gender,input.type,ID));
                   teacher.addPerson(input.name,input.email,input.city,input.gender,input.type,ID);
                 }
               }
             }

                    showStudents (){
                      if (studentObj.length > 0) {

                        student.showPerson(studentObj);
                        for (var i = 0; i <= studentObj.length + 1; i++) {
                          studentObj.shift();
                        }
                      }

                    }

                    showTeachers (){
                      if (teacherObj.length > 0) {

                        teacher.showPerson(teacherObj);
                        for (var i = 0; i <= teacherObj.length + 1; i++) {
                          teacherObj.shift();
                        }
                      }

                    }
                    deleteItemFromUI (e){
                      var itemId,splitId,type,id;
                      itemId = e.target.parentNode.id;
                      if (itemId) {
                        splitId = itemId.split('-');

                        type = splitId[0]
                        id = splitId[1];
                        personObj.deleteItem(type,id);
                        e.target.parentNode.remove();
                      }
                  }


                  letSee (e){
                    var checking;

                  var itemId,splitId,type,id;
                  itemId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                  if (itemId) {
                    splitId = itemId.split('-');
                    type = splitId[0]
                    id = splitId[1];

                    checking = personObj.updateUI(e,type,id);
                    personObj.updateStructure(type,id,checking[0],checking[1]);
                    }
                  }




           }




     let studentObj,teacherObj,student,teacher,ctrl;
     ctrl = new Control
    let personObj = new Person;
    studentObj = teacherObj = []




     settingUPEventListeners();
