import Person from './person';
import Student from './student';
import Teacher from './teacher.js'



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




const settingUPEventListeners = () =>{
  document.querySelector('.add').addEventListener('click',ctrl.addingInput)

  document.querySelector('.showStud').addEventListener('click',ctrl.showStudents)

  document.querySelector('.showTeach').addEventListener('click',ctrl.showTeachers)

  document.querySelector('.box').addEventListener('click',ctrl.deleteItemFromUI)


  document.querySelector('.box').addEventListener('dblclick',ctrl.letSee)
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

               student.addPerson(input.name,input.email,input.city,input.gender,input.type,ID,data);

             }else if(input.type == 'teacher'){

               teacherObj.push(teacher = new Teacher(input.name,input.email,input.city,input.gender,input.type,ID));
               teacher.addPerson(input.name,input.email,input.city,input.gender,input.type,ID,data);
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
        personObj.deleteItem(type,id,data);
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
    personObj.updateStructure(type,id,checking[0],checking[1],data);
    }
  }


}

 let studentObj,teacherObj,student,teacher,ctrl;
 ctrl = new Control
let personObj = new Person;
studentObj = teacherObj = []




     settingUPEventListeners();
