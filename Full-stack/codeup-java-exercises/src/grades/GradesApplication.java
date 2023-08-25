package grades;

import javax.swing.text.SimpleAttributeSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;


public class GradesApplication {

    public static void main(String[] args) {

        Student UserName1 = new Student("UserName1");
        Student UserName2 = new Student("UserName2");
        Student UserName3 = new Student("UserName3");
        Student UserName4 = new Student("UserName4");

        UserName1.addGrade(100);
        UserName1.addGrade(80);
        UserName1.addGrade(90);

        UserName2.addGrade(20);
        UserName2.addGrade(30);
        UserName2.addGrade(40);

        UserName3.addGrade(60);
        UserName3.addGrade(80);
        UserName3.addGrade(90);

        UserName4.addGrade(100);
        UserName4.addGrade(80);
        UserName4.addGrade(100);

        HashMap<String, Student> students = new HashMap<>();
        students.put("UserName1", UserName1);
        students.put("UserName2", UserName2);
        students.put("UserName3", UserName3);
        students.put("UserName4", UserName4);

        ArrayList<Student> studentlist = new ArrayList<>();
        studentlist.add(UserName1);
        studentlist.add(UserName2);
        studentlist.add(UserName3);
        studentlist.add(UserName4);

//        for (int i = 0; i < studentlist.size(); i++) {
//            System.out.println(studentlist.get(i).getName());
//        }

        while (true) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Welcome! \nHere are the GitHub usernames of our students:");
            for (Student student : studentlist) {
                System.out.print("|" + student.getName() + "|" );
            }
            System.out.println("\nWhat student would you like to see more information on?");
            String usersInput = sc.next();
//            System.out.println(students.get(usersInput));
            if (students.get(usersInput) != null) {
                System.out.println(students.get(usersInput).getName() + ", Overall Grades: ");
                System.out.println(students.get(usersInput).getGrades());
            } else {
                System.out.println("Sorry, no student found with the GitHub username of " + usersInput);
            }
            System.out.print("\nDo you want to continue? [y/n]: ");
            String userContinue = sc.next();
            if (!userContinue.equalsIgnoreCase("y")) {
                break;
            }
        }

//        ╔═.✵.════════════════════════════════╗ ╚════════════════════════════════.✵.═╝

    }
}
