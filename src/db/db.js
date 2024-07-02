import A4Img from "../stationary/A4.jpeg";
import AcrylicImg from "../stationary/acrylic.jpeg";
import crayonsImg from "../stationary/crayons.jpeg";
import glueImg from "../stationary/glue.jpeg";
import penImg from "../stationary/pen.jpg";
import sketchImg from "../stationary/sketch.jpeg";
import eraserImg from "../stationary/eraser.jpeg";
import pencilImg from "../stationary/pencil.jpeg";

export function getData() {
  return [
    { title: "A4 Size Notebook", price: 120, Image: A4Img,id:1 },
    { title: "Acrylic colors", price: 257, Image: AcrylicImg,id:2 },
    { title: "Crayons", price: 40, Image: crayonsImg ,id:3},
    { title: "Fevicol", price: 20, Image: glueImg,id:4 },
    { title: "Pen box", price: 80, Image: penImg,id:5 },
    { title: "Sketch pens", price: 15, Image: sketchImg,id:6 },
    { title: "Eraser box", price: 100, Image: eraserImg,id:7 },
    {title : "Pencil box",price:102,Image: pencilImg ,id:8},

  ];
}