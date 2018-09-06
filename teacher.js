import Person from './person.js'
class Teacher extends Person  {
  constructor(name,email,city,gender,type,id){
    super(name,email,city,gender,type,id);
  }
  addPerson(name,email,city,gender,type,data){

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



export default Teacher;
