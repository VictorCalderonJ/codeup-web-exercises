package shapes;

import java.awt.Rectangle;

public class ShapeTest {
    public static void main(String[] args) {
        Measurable myShape;

        myShape = new Square(2.0);
        System.out.println(myShape.getArea());
        System.out.println(myShape.getPerimeter());
//        myShape = new Rectangle(2.0, 4.0);
    }

}
