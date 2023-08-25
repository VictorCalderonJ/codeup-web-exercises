public class ExceptionExercises {


    public static void main(String[] args) {
        divideNums(4, 2);
    }

//    Create a static divideNums method that takes in two integer arguments.
//    If the second argument is 0, the method should throw an IllegalArgumentException
//    with the message "Cannot divide be 0!" If the second argument is not 0,
//    return the result of dividing the first input integer by the second input integer.
    public static int divideNums(int x, int y){
        if (x == 0) {
            throw new IllegalArgumentException("Cannot divide be 0!");
        } else if (y == 0) {
            throw new IllegalArgumentException("Cannot divide be 0!");
        } else {
            System.out.println(x / y);
            return x / y;
        }
    }




}


