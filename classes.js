class Student
{
    setDetails()
    {
        this.sid=101;
        this.sname="John";
        this.grade="A";
    }

    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }
}

    let stu=new Student();
    stu.setDetails();
    stu.display();
