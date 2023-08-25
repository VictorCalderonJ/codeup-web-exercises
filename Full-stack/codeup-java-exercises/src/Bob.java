import java.util.Scanner;


public class Bob {


    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//
//        System.out.print("\nHi i'm Bob go ahead and ask me anything: ");
//        String userString = sc.nextLine();
//
//        if (userString.endsWith("?")) {
//            System.out.println("Sure.");
//        } else if (userString.endsWith("!")){
//            System.out.println("Whoa, chill out!");
//        } else if (userString.equals("")) {
//            System.out.println("Fine, be that way!");
//        } else {
//            System.out.println("whatever");;
//        }

        Person person1 = new Person("John");
        Person person2 = new Person("John");
        System.out.println(person1.getName().equals(person2.getName()));
        System.out.println(person1 == person2);

    }
}





