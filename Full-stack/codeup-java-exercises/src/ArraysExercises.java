import java.util.Arrays;

public class ArraysExercises {

    public static Person[] addPerson(Person[] people, Person personToAdd) {

        Person[] newArray = Arrays.copyOf(people, people.length + 1);
        newArray[newArray.length - 1] = personToAdd;
        return newArray;
    }

    public static void main(String[] args) {



        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println(numbers);

        //This is how you create an array.
        //inside the [] will allow you how much you want it's a set a number.
        Person[] people = new Person[3];
        people[0] = new Person("John");
        people[1] = new Person("Jane");
        people[2] = new Person("Peter");
        for (Person person : people) {
            System.out.println(person.getName());
        }

        Person newPerson = new Person("Steve");
        addPerson(people, newPerson);

        System.out.println(Arrays.toString(new Person[]{newPerson}));

    }
}
