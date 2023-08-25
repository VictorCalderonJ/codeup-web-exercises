package shapes;

public abstract class Rectangle extends Quadrilateral {

    public Rectangle(double length, double width)
    {
        super(length, width);
    }

    public double getArea() {
        return 0;
    }
    public double getPerimeter() {
        return 0;
    }

    public void setLength(double length) {
        this.length = length;
    }
    public void setWidth(double width) {
        this.width = width;
    }

}
