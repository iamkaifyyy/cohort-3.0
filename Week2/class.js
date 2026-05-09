// **** classes ******



// instead of creating classes like this- 

const rect1 = {
    width: 2,
    height: 4,
    color: "red"
}

function area(rect){
    return rect.width * rect.height;
}

area(rect1);


// we do this instead of it---



class Rectangle {
    constructor(width , height, color){
        this.width = width; 
        this.height = height;
        this.color = color;
    }

    area(){
    const area = this.width * this.height;
    console.log(area);
    }

    paint(){
        console.log("color is " + this.color);
    }
}

const rect = new Rectangle(2, 4) 
const areas = rect.area();
rect.paint();
console.log(areas);

