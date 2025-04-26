const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3000;
app.use(cors());

app.get('/usuario',function(req,res){
    res.json({
        primernombre:"Rodrigo",
        segundonombre:"Manuel",
        primerapellido:"Maradiaga",
        segundoapellido:"Zarate",
        fechanacimiento:"27/03/03",
        estadofamiliar:"soltero",
        residencia:"San Salvador",
        profesion:"Estudiante",
        estatura: 1.60,
        peso: 145,
        colorpiel:"trigueño",
        colorojos:"cafe oscuro",
        colorcabello:"cafe oscuro",
        ultimosempleos:[{
            empresa: "Tommy Hilfiger",
            departamento:"Ventas",
            direccion:"San Salvador",
            cargo: "Vender y Ordenar los productos",
            desde: "2023/11/25",
            hasta:"2023/12/21"
        },{
            empresa: "Teleperformance",
            departamento:"Bancario",
            direccion:"San Salvador",
            cargo: "Contestar llamadas",
            desde: "2024/11/25",
            hasta:"2024/12/21"
        }]
    });
});
    app.get('/genero',function(req,res){
   req.jso([
    {id:1, genero:'Masculino'},
    {id:2, genero:'Femenino'}
   ]);
});
app.get('/tipo_documento',function(req,res){
    res.json([
        {id:1, tipo_documento:'DUI'},
        {id:2, tipo_documento:'NIT'},
        {id:3, tipo_documento:'ISSS'},
        {id:4, tipo_documento:'PASAPORTE'}
    ]);
});
app.get('/departamento',function(req,res){
    res.json([
        {id:1, departamento:'Ahuachapan'},
        {id:2, departamento:'Santa Ana'},
        {id:3, departamento:'Sonsonate'},
        {id:4, departamento:'La Libertad'},
        {id:5, departamento:'San Salvador'},
        {id:6, departamento:'Chalatenango'},
        {id:7, departamento:'Cuscatlan'},
        {id:8, departamento:'Cabañas'},
        {id:9, departamento:'La Paz'},
        {id:10, departamento:'San Vicente'},
        {id:11, departamento:'Usulutan'},
        {id:12, departamento:'San Miguel'},
        {id:13, departamento:'Morazan'},
        {id:14, departamento:'La Union'}
    ]);
});
app.get('/municipio',function(req,res){
    res.json([
        {id:1, municipio:'Ahuachapan'},
        {id:2, municipio:'Santa Ana'},
        {id:3, municipio:'Izalco'},
        {id:4, municipio:'Santa Tecla'},
        {id:5, municipio:'San Salvador'},
        {id:6, municipio:'Las Pilas'},
        {id:7, municipio:'Cojutepeque'},
        {id:8, municipio:'Ilobasco'},
        {id:9, municipio:'Olocuilta'},
        {id:10, municipio:'Apastepeque'},
        {id:11, municipio:'Jucuapa'},
        {id:12, municipio:'El Triunfo'},
        {id:13, municipio:'Sociedad'},
        {id:14, municipio:'San Alejo'},
    ]);
});
//GET http://www.algo.com/suma?campo1=3.56&campo2=19.13
app.get('/sumar',function(req,res){
    let resultado = parseFloat(req.query.campo1)+parseFloat(req.query.campo2);
    res.json({
        respuesta:resultado
    });
});

app.get('/login',function(req,res){
    console.log(req.query.email);
    console.log(req.query.password);
});

app.listen(puerto,function(req,res){
    console.log("El servidor esta corriendo en el puerto numero 3000");
});
