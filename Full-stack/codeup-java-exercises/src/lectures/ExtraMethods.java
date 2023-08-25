package lectures;
import java.util.Objects;
import java.util.Scanner;


public class ExtraMethods {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("\nWhat is your name? : ");
        String userString = sc.nextLine();
        String userInput = sayName(userString);

        if (userString.length() > 1) {
            System.out.println(userInput);
        } else {
            System.out.println("That is not a name...");;
        }


    }

    public static String sayName(String string1) {
        return ("Hi, my name is " + string1);
    }

    public static String sayName(String string1, String string2) {
        return String.format("Hi, my name is %s %s", string1, string2);
    }



}
