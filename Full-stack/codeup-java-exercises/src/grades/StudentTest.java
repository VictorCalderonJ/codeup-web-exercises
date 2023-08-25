package grades;

public class StudentTest {
    public static void main(String[] args) {
        Student testName = new Student("test");
//        System.out.println(testName.getName());

        //methods example
        //[.test]
        //arguments example
        //( inside )
        testName.addGrade(20);
        testName.addGrade(60);
        testName.addGrade(80);

        testName.getGrades();

        System.out.println(testName.averageGrade());
    }
}
