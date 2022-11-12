var canvas = new fabric.Canvas("mycanvas");
ctx = canvas.getContext("2d");
var bloque_objeto = "";
block_image_width = 200;
block_image_height = 300;
block_x = 10;
block_y = 10;

function New_Objeto(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        bloque_objeto = Img;
        bloque_objeto.scaleToWidth(block_image_width);
        bloque_objeto.scaleToHeight(block_image_height);
        bloque_objeto.set({
            top:block_y, 
            left:block_x
        });
        canvas.add(bloque_objeto);
    })
};

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '82')
    {
        New_Objeto('prr.jpg');
        console.log("Ranger Rojo");
        block_x = 10;
        block_y = 100;
    }
    if(keyPressed == '71')
    {
        New_Objeto('prd.jpg');
        console.log("Ranger Dorado");
        block_x = 170;
        block_y = 100;
    }
    if(keyPressed == '89')
    {
        New_Objeto('pry.jpg');
        console.log("Ranger Amarillo");
        block_x = 330;
        block_y = 100;
    }
    if(keyPressed == '80')
    {
        New_Objeto('prro.jpg');
        console.log("Ranger Rosa");
        block_x = 500;
        block_y = 100;
    }
    if(keyPressed == '66')
    {
        New_Objeto('pra.jpg');
        console.log("Ranger Azul");
        block_x = 770;
        block_y = 100;
    }
    if(keyPressed == '67')
    {
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }
}