import Person from './person.js'


class Student extends Person  {
  constructor(name,email,city,gender,type,id){
    super(name,email,city,gender,type,id);
  }
  addPerson(name,email,city,gender,type,data){
    console.log(data+'ajksd');

      data.student.name.push(name);
      data.student.email.push(email);
      data.student.city.push(city);
      data.student.id.push(ID);

    document.querySelector('.name').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.name').focus();

  }
}




export default Student;
