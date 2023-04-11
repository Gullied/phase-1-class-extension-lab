// Your code here
class Polygon {
  constructor(sides){
    
    this.sides = sides
  }

  get countSides (){
    return this.sides.length;
  }
  get perimeter (){
    return this.sides.reduce((acc, cur) => 
      acc + cur,0)
  }
}

class Triangle extends Polygon {
  get isValid (){

    if(this.countSides  !== 3){
      return false
    }
    const [a, b, c] = this.sides;
     return a + b > c && a + c > b && b + c > a;
  }

}
class Square extends Polygon{
     get isValid (){
      if(this.countSides  !==4){
        return false
      }
      let[a,b,c,d] = this.sides;
      return a === b && b === c && c === d;
     }
     get area (){
      if(!this.isValid){
        return undefined;
      }
      let [a, b , c ,d] = this.sides;
      return a * a

     }


}