import java.util.Scanner;

public class ControlFlowExercises {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

//        int a = 5;
//        while (a <= 15) {
//            System.out.println("a is " + a);
//            a++;
//        }

//        int b = 0;
//        do {
//            System.out.println(b);
//            b += 2;
//        } while (b <= 100);

//        int c = 100;
//        do {
//            System.out.println(c);
//            c -= 5;
//        } while (c >= -10);

//        long d = 2;
//        do {
//            System.out.println(d);
//            d *= d;
//        } while (d < 1000000);

//        for (int b = 0; b <= 100; b += 2) {
//            System.out.println("b is " + b);
//        }

//        for (int c = 100; c >= -10; c -= 5) {
//            System.out.println("c is " + c);
//        }

//        for (long d = 2; d < 1000000; d *= d) {
//            System.out.println("d is " + d);
//        }

//        for(int i = 1; i <= 100; i++){
//            if(i % 3 == 0 && i % 5 == 0){
//                System.out.println("FizzBuzz");
//            }else if(i % 3 == 0){
//                System.out.println("Fizz");
//            }else if(i % 5 == 0){
//                System.out.println("Buzz");
//            }else{
//                System.out.println(i);
//            }
//        }

        while (true) {
            System.out.print("\nEnter an number: ");
            int userInt = sc.nextInt();
            System.out.println("\nHere is your table!\n");
            System.out.println("number | squared | cubed");
            System.out.println("------ | ------- | -----");
            for (int i = 1; i <= userInt; i++) {
                System.out.printf("%-7d| %-8d| %-6d%n", i, i * i, i * i * i);
            }
            System.out.print("\nDo you want to continue? [y/n]: ");
            String userContinue = sc.next();
            if (!userContinue.equalsIgnoreCase("y")) {
                break;
            }
        }

    }



}

