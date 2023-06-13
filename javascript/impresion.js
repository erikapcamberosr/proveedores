

var imgData = './imagenes/1_intento.png';


function myFunction_impresion(){
    
    var doc = new jsPDF();
    doc.setFontSize(40);
    doc.text(40,20,"primer impresion ... accion");
    //doc.addImage(imgData,'PNG',10,40,180,180);
    doc.save('prueba_impresion.pdf');
    /*
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");*/
}

function hola(){
    console.log('imprimiendo pdf...');

    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    //doc.save("a4.pdf");

    doc.autoPrint();
    doc.output('dataurlnewwindow', {filename: 'comprobante.pdf'});

}
