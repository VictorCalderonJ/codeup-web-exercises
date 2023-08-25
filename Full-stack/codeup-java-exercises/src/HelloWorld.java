//public class HelloWorld {
//
//    public static void main(String[] args) {
////        sout create #5
////        println prints out a line, print in the same line
////        System.out.println("Hello, World!");
////        System.out.print("Hello, World!");
////        System.out.print("Yut");
//
////        special char for quotes. /
////        System.out.println("Java is \"Fun\"");
////        special char for /
////        System.out.println(" /\\");
////
////        String str = "hello";
////        System.out.printf("I will say something here: %s", str);
//
////        declaring Variables
////        long favNum = 12;
////        boolean example = true;
////        String exampleS = "Hello There!";
////        can not be declared
////        final String permExample = "Dont touch me";
//
//
////        CASTING.
//
////        int otherFavNum = (int) favNum;
////
////        int someNum = 12000;
////        byte otherNum = (byte) someNum;
////        System.out.println(otherNum);
//
////        double someNum = 12.80;
////        byte otherNum = (byte) someNum;
////        System.out.println(otherNum);
//
//        int myFavoriteNumber = 23;
//        System.out.println(myFavoriteNumber);
//
//        String myString = "Test this out";
//        System.out.println(myString);
//
//        long myNumber = 123L;
//        System.out.println(myNumber);
//
//        long myNum = (long) 3.12;
//        System.out.println(myNum);
//
//        int x = 5;
//        System.out.println(++x);
//        System.out.println(x);
//
//        int y = 5;
//        System.out.println(y++);
//        System.out.println(y);
//
//    }
//}




        ///////////////////////////////////////////////////////////////////////////////////////
        // Java Intro Exercises
        ///////////////////////////////////////////////////////////////////////////////////////


        // Output "Hello, World!"
//        System.out.println("Hello, World!");

        // Output the same as above, but with two System.out.print statements
//        System.out.print("Hello, ");
//        System.out.print("World!\n");


        ///////////////////////////////////////////////////////////////////////////////////////
        // Java Syntax, Types, and Variables Exercises
        ///////////////////////////////////////////////////////////////////////////////////////


        // Create an int variable named myFavoriteNumber and assign your favorite number to it, then print it out to the console.

//        int myFavoriteNumber = 12;
//        System.out.println(myFavoriteNumber);


        // Create a String variable named myString and assign a string value to it, then print the variable out to the console.

//        String myString = "This is a string value";
//        System.out.println(myString);



        // Change your code to assign a character value to myString. What do you notice?

//        String myString = 'c';
//        System.out.println(myString);
        // We notice that this throws a compilation error, keeping the app from running
        // DON'T DO THIS


        // Change your code to assign the value 3.14159 to myString. What happens?

//        String myString = 3.14159;
//        System.out.println(myString);
        // Same thing as before, we get a compilation error



        // Declare a long variable named myNumber, but do not assign anything to it. Next try to print out myNumber to the console. What happens?

//        long myNumber;
//        System.out.println(myNumber);
        // We get a compilation error saying that myNumber may not have been initialized



        // Change your code to assign the value 3.14 to myNumber. What do you notice?

//        long myNumber = 3.14;
//        System.out.println(myNumber);
        // We get a compilation error as a decimal number does not fit in a long




        // Change your code to assign the value 123L (Note the 'L' at the end) to myNumber.

//        long myNumber = 123L;
//        System.out.println(myNumber);



        // Change your code to assign the value 123 to myNumber.

//        long myNumber = 123;
//        System.out.println(myNumber);
        // Why does assigning the value 3.14 to a variable declared as a long not compile, but assigning an integer value does?
        // long types cannot hold any decimal values





        // Change your code to declare myNumber as a float. Assign the value 3.14 to it. What happens? What are two ways we could fix this?

//        float myNumber = 3.14;
//        System.out.println(myNumber);
        // We get a compilation error stating that there could be lossy conversion from double to float

        // first way to fix
//        float myNumber = 3.14f;
//        System.out.println(myNumber);

        // second way to fix
//        float myNumber = (float) 3.14;
//        System.out.println(myNumber);

        // Copy and paste the following code blocks one at a time and execute them
//        int x = 5;
//        System.out.println(x++);  // output: 5
//        System.out.println(x);  // output: 6

//        int x = 5;
//        System.out.println(++x);  // output: 6
//        System.out.println(x);  // output: 6



        // What is the difference between the above code blocks? Explain why the code outputs what it does.
        // The difference is when x is incremented
        // The first code block is incremented after the statement is complete
        // The second code block is incremented before the statement is complete
        // In both, the value ends up getting incremented before the second sout




        // Try to create a variable named class. What happens?

//        String class = "doesn't matter";
        // We get a compilation error because 'class' is a reserved identifier in Java



        // Object is the most generic type in Java. You can assign any value to a variable of type Object. What do you think will happen when the following code is run?
//        String theNumberThree = "three";
//        System.out.println(theNumberThree);
//        Object o = theNumberThree;
//        System.out.println(o);
//        int three = (int) o;
//        System.out.println(three);
        // We expected to get an error


        // Copy and paste the code above and then run it. Does the result match with your expectation?
        // We did get a RUNTIME error



        // How is the above example different from the code block below?
//        int three = (int) "three";
        // The difference is us using the Object variable as a middleman
        // Java doesn't know that this specific Object cannot be cast to an int
        // Sometimes Object variable CAN be cast to an int


        // What are the two different types of errors we are observing?
        // Runtime and Compilation errors




        // Rewrite the following expressions using the relevant shorthand assignment operators:

//        int x = 4;
////        x = x + 5;
//        x += 5;
//        System.out.println(x);

//        int x = 3;
//        int y = 4;
////        y = y * x;
//        y *= x;
////        System.out.println(y);

//        int x = 10;
//        int y = 2;
////        x = x / y;
//        x /= y;
////        y = y - x;
//        y -= x;
//        System.out.println(x);
//        System.out.println(y);






        // What happens if you assign a value to a numerical variable that is larger (or smaller) than the type can hold? What happens if you increment a numeric variable past the type's capacity?

//        byte exampleByte = -200;
        // This throws a compilation error

//        byte exampleByte = 127;
//        exampleByte += 256;
//        System.out.println(exampleByte);
        // When we increment past the type's capacity, it will loop to the lower (or upper if we're subtracting) bounds of what that data type can hold







        // Can we assign a value of null to an int
//        int cesarsQuestion = null;
//        System.out.println(cesarsQuestion);
        // NO WE CANNOT
        // This works though:
//        String beausQuestion = null;
//        System.out.println(beausQuestion);






