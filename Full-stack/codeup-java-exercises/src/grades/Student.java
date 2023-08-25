package grades;

import java.util.ArrayList;

public class Student {

//    Create a class named Student. It should have private properties
//    for the student's name, and grades.
//
//    The grades property should
//    be an ArrayList of integers.
//
//    The student class should have a
//    constructor that sets name property, and initializes the
//    grades property as an empty ArrayList. The Student class should
//    have the following methods:

    //Private property with the name, "name" and "grade."
    //Grade has an array list of integers
    private String name;
    private ArrayList<Integer> grades;

    //Student class as a constructor:
    public Student(String name) {
         //name as a property
        this.name = name;
        //Grade as an empty array
        this.grades = new ArrayList<Integer>();
    }



    public ArrayList<Integer> getGrades() {
        return grades;
    }
    public String getName() {
        return name;
    }
    public void addGrade(int grade) {
        grades.add(grade);
    }
    public double averageGrade() {
        double sum = 0;
        for (int grade : grades) {
            sum += grade;
        }
        return sum / grades.size();
    }
}

