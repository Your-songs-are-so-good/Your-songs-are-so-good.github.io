var stu1 = new Object();
stu1.name = '张三';
stu1.sex = '男';

for (var i in stu1) {
    console.log(i);
}

var stu2 = {
    name: '李四',
    sex: '男'
}

for (var k in stu2) {
    console.log(k + ':' +stu2[k]); 
}

function student(name, sex) {
    this.name = name;
    this.sex = sex;
}

var stu3 = new student('王五', '男');
console.log(stu3.name);
console.log(stu3.sex);