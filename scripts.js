//document.addEventListener("DOMContentLoaded", function() {
//    const projects = [
//        { id: 1, title: "Efecto de Hover en un Botón", description: "Este ejemplo muestra un botón que cambia de color al pasar el ratón por encima." },
//        { id: 2, title: "Modal Interactivo", description: "Este ejemplo muestra cómo hacer un modal emergente utilizando solo HTML, CSS, y JavaScript." },
//       { id: 3, title: "Animación CSS a pantalla completa", description: "Este ejemplo muestra una animación en CSS donde un cuadro se desplaza de izquierda a derecha a través de toda la página." },
//        // Puedes agregar más proyectos aquí
//    ];
//    const accordionContainer = document.getElementById('accordion-container');
//
//    projects.forEach(project => {
//        const accordionItem = `
//            <div class="accordion-item">
//                <div class="accordion-header" data-example="example${project.id}">${project.title}</div>
//                <div class="accordion-content">
//                    <p>${project.description}</p>
//                </div>
//            </div>
//        `;
//        accordionContainer.innerHTML += accordionItem;
//    });
//}); 
var ejemplos = {
    example1: {
        html: `<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<section class="wrapper-full tab-container effectTab-header" id="style_1" style="padding-top:170px;">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper " align="center">
              <a  href="avascript:void(0);">
                <h1 class="ti title">Hover Effect 1</h1></a>
  </div>
  
  <div class="column-12 column-xs-12 column-sm-12 tab">
    <div class="custom-row">
      <div class="column-4 column-md-6 column-xs-12 hide-sm hide-md box-tab">
        <div class="effect effect-one">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-8 column-md-6 hide-xs hide-sm hide-md box-tab">
        <div class="effect grid-width8 effect-one">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2 class="pt-1">grid column 8</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-6 column-md-6 hide-xs hide-sm box-tab">
        <div class="effect grid-width6 effect-one">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2 class="pt-2">column 6 grid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 column-md-6 column-sm-6 hide-xs box-tab">
        <div class="effect grid-width3 effect-one">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2 class="pt-3">column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 column-sm-6 hide-xs hide-md box-tab">
        <div class="effect grid-width3 effect-one">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2 class="pt-3">column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_2">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper" align="center">
     <a href="avascript:void(0);"> <h1 class="ti title">hover effects 2</h1></a>
  </div>
  <div class="column-12 column-sm-12 tab">
    <div class="custom-row">
      <div class="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
        <div class="effect effect-two">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Column 4</h2>
             <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 column-md-6 column-xs-12 column-sm-6 box-tab hide-xs hide visible-sm visible-md">
        <div class="effect effect-two">
          <img src="images/image-1.jpg" class="img-fluid">
          <div class="tab-text">
            <h2>Column 4</h2>
             <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-8 hide-md column-xs-12 hide-xs hide-sm box-tab">
        <div class="effect grid-width8 effect-two">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Column Eight</h2>
             <p class="description col6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-6 hide-md hide-xs hide-sm box-tab">
        <div class="effect grid-width6 effect-two">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Column six</h2>
             <p class="description col6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-md hide-xs hide-sm box-tab">
        <div class="effect grid-width3 effect-two">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text col3">
            <h2 class="col3-head">Column three</h2>
             <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-md hide-sm box-tab">
        <div class="effect grid-width3 effect-two">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text col3">
            <h2 class="col3-head">Column three</h2>
             <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_3">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper " align="center">
      <a  href="avascript:void(0);"><h1 class="ti title">hover effects 3</h1></a>
  </div>
  <div class="column-12 tab column-xs-12">
    <div class="custom-row">
      <div class="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
        <div class="effect effect-three col3-block-height">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Artistic</h2>
          </div>
        </div>
      </div>
      <div class="column-4 column-md-6 column-sm-6 hide-xs box-tab">
        <div class="effect effect-three col3-block-height">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Realistic</h2>
          </div>
        </div>
      </div>
      <div class="column-4 hide-xs hide-sm hide-md box-tab">
        <div class="effect effect-three col3-block-height">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Difficult</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_4">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper" align="center">
   <a  href="avascript:void(0);">   <h1 class="ti title">hover effects 4</h1> </a>
  </div>
  <div class="column-12 tab column-xs-12">
    <div class="custom-row">
      <div class="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
        <div class="effect effect-four">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 column-md-6 column-xs-12 column-sm-6 box-tab hide visible-sm visible-md">
        <div class="effect effect-four">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-8 hide-sm hide-md hide-xs box-tab">
        <div class="effect grid-width8 effect-four">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>grid column 8</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-6 hide-xs hide-md hide-sm box-tab">
        <div class="effect grid-width6 effect-four">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 6 grid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-md hide-sm box-tab">
        <div class="effect grid-width3 effect-four">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-md hide-sm box-tab">
        <div class="effect grid-width3 effect-four">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_5">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper" align="center">
     <a  href="avascript:void(0);"> <h1 class="ti title">hover effects 5</h1></a>
  </div>
  <div class="column-12 column-xs-12 tab">
    <div class="custom-row">
      <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab">
        <div class="effect effect-five col3-block-height">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>customised</h2>
          </div>
        </div>
      </div>
      <div class="column-4 column-sm-6 column-md-6 hide-xs box-tab">
        <div class="effect effect-five col3-block-height">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>amazing</h2>
          </div>
        </div>
      </div>
      <div class="column-4 hide-xs box-tab hide-sm hide-md">
        <div class="effect effect-five col3-block-height">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>portfolio</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_6">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper " align="center">
    <a  href="avascript:void(0);">  <h1 class="ti title">hover effects 6</h1></a>
  </div>
  <div class="column-12 column-xs-12 tab">
    <div class="custom-row">
      <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab">
        <div class="effect effect-six">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab hide visible-sm visible-md">
        <div class="effect effect-six">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-8 hide-xs hide-sm box-tab hide-md">
        <div class="effect grid-width8 effect-six">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>grid column 8</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-6 hide-xs hide-sm box-tab hide-md">
        <div class="effect grid-width6 effect-six">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 6 grid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm box-tab hide-md">
        <div class="effect grid-width3 effect-six">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm box-tab hide-md">
        <div class="effect grid-width3 effect-six">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_7">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper" align="center">
     <a  href="avascript:void(0);"> <h1 class="ti title">hover effects 7</h1></a>
  </div>
  <div class="column-12 column-xs-12 tab">
    <div class="custom-row">
      <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab">
        <div class="effect effect-seven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>pLorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab hide visible-sm visible-md">
        <div class="effect effect-seven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-8 hide-xs box-tab hide-sm hide-md">
        <div class="effect grid-width8 effect-seven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2 class="col8-head">grid column 8</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-6 hide-xs box-tab hide-sm hide-md">
        <div class="effect grid-width6 effect-seven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 6 grid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs box-tab hide-sm hide-md">
        <div class="effect grid-width3 effect-seven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs box-tab hide-sm hide-md">
        <div class="effect grid-width3 effect-seven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_8">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper " align="center">
    <a  href="avascript:void(0);">  <h1 class="ti title">hover effects 8</h1> </a>
  </div>
  <div class="column-12 column-xs-12 tab">
    <div class="custom-row">
      <div class="column-4 column-sm-6 column-xs-12 column-md-6 box-tab">
        <div class="effect effect-eight">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 column-sm-6 column-xs-12 column-md-6 box-tab hide visible-sm visible-md">
        <div class="effect effect-eight">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-8 hide-xs box-tab hide-sm hide-md">
        <div class="effect grid-width8 effect-eight">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2 class="col8-head">grid column 8</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
      <div class="column-6 hide-xs hide-sm box-tab hide-md">
        <div class="effect grid-width6 effect-eight">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 6 grid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm box-tab hide-md">
        <div class="effect grid-width3 effect-eight">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm box-tab hide-md">
        <div class="effect grid-width3 effect-eight">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_9">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper" align="center">
   <a  href="avascript:void(0);">   <h1 class="ti title">hover effects 9</h1> </a>
  </div>
  <div class="column-12 column-xs-12 tab">
    <div class="custom-row">
      <div class="column-4 column-sm-6 column-md-6 column-xs-12 box-tab">
        <div class="effect effect-nine">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 column-sm-6 column-xs-12 column-md-6 box-tab hide visible-sm visible-md">
        <div class="effect effect-nine">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 hide-xs hide-sm box-tab hide-md">
        <div class="effect effect-nine">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 hide-xs hide-sm box-tab hide-md">
        <div class="effect effect-nine">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-6 hide-xs hide-sm box-tab hide-md">
        <div class="effect effect-nine grid-width6">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm box-tab hide-md">
        <div class="effect effect-nine grid-width3">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm box-tab hide-md">
        <div class="effect effect-nine grid-width3">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_10">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper " align="center">
     <a  href="avascript:void(0);"> <h1 class="ti title">hover effects 10</h1></a>
  </div>
  <div class="column-12 column-xs-12 tab">
    <div class="custom-row">
      <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab">
        <div class="effect effect-ten">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab hide visible-sm visible-md">
        <div class="effect effect-ten">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-8 hide-xs hide-sm hide-md box-tab">
        <div class="effect grid-width8 effect-ten">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2 class="col8-head">grid column 8</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-6 hide-xs hide-sm hide-md box-tab">
        <div class="effect grid-width6 effect-ten">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 6 grid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm hide-md box-tab">
        <div class="effect grid-width3 effect-ten">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm hide-md box-tab">
        <div class="effect grid-width3 effect-ten">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_11">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper " align="center">
     <a  href="avascript:void(0);"> <h1 class="ti title">hover effects 11</h1></a>
  </div>
  <div class="column-12 column-xs-12 tab">
    <div class="custom-row">
      <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab">
        <div class="effect effect-eleven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 column-sm-6 column-md-6 hide-xs box-tab">
        <div class="effect effect-eleven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 hide-xs hide-sm hide-md box-tab">
        <div class="effect effect-eleven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm hide-md box-tab">
        <div class="effect effect-eleven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm hide-md box-tab">
        <div class="effect effect-eleven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm hide-md box-tab">
        <div class="effect effect-eleven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm hide-md box-tab">
        <div class="effect effect-eleven">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="wrapper-full tab-container effectTab-header" id="style_12">
<div class="wrapper tab-item">
<div class="custom-row">
  <div class="wrapper " align="center">
     <a  href="avascript:void(0);"> <h1 class="ti title">hover effects 12</h1></a>
  </div>
  <div class="column-12 column-xs-12 tab">
    <div class="custom-row">
      <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab">
        <div class="effect effect-twelve">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-4 column-xs-12 column-sm-6 column-md-6 box-tab hide visible-sm visible-md">
        <div class="effect effect-twelve">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>Three column 4</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-8 hide-xs hide-sm hide-md box-tab">
        <div class="effect grid-width8 effect-twelve">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2 class="col8-head">grid column 8</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-6 hide-xs hide-sm hide-md box-tab">
        <div class="effect grid-width6 effect-twelve">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 6 grid</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm hide-md box-tab">
        <div class="effect grid-width3 effect-twelve">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="column-3 hide-xs hide-sm hide-md box-tab">
        <div class="effect grid-width3 effect-twelve">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid">
          <div class="tab-text">
            <h2>column 3</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
</body>
</html>`,
        css: `.menu,
.nav-icon span {
transition: all .3s ease-in-out
}
a {
      cursor: pointer;
      text-decoration: none; /* Quita el subrayado */
      color: blue;
    }
.menu .nav-menu li a,
.nav-menu li a {
line-height: 56px
}

*,
::after,
::before {
margin: 0;
padding: 0;
box-sizing: border-box
}

.effectTab-header .caption,
.effectTab-header .title {
font-weight: 700;
padding-bottom: 20px;
position: relative;
display: inline-block;
color: #555;
margin: 0 0 20px;
text-align: center;
text-transform: uppercase
}

.effectTab-header .title {
font-size: 36px;
font-family: Oswald, sans-serif
}

.effectTab-header .caption {
font-size: 30px;
font-family: 'Open Sans', sans-serif
}

.column-1,
.column-10,
.column-11,
.column-12,
.column-2,
.column-3,
.column-4,
.column-5,
.column-7,
.column-8,
.column-9 {
float: left;
padding: 15px
}

.effectTab-header .title::after,
.effectTab-header .title::before {
position: absolute;
background: linear-gradient(to right, #ed6ea0 0, #ec8c69 100%);
content: ""
}

.effectTab-header .title::before {
left: 0;
width: 156%;
height: 3px;
margin-left: -28%;
bottom: -1.5px
}

.effectTab-header .title::after {
left: 50%;
width: 25px;
height: 25px;
bottom: -26px;
margin: 0 0 0 -10px;
-webkit-clip-path: polygon(75% 0, 75% 69%, 41% 93%, 0 68%, 0 0);
clip-path: polygon(75% 0, 75% 69%, 41% 93%, 0 68%, 0 0)
}

body {
background-color: #F5F5F5;
}

.column-1 {
width: 8.333333333333333%
}

.column-2 {
width: 16.66666666666667%
}

.column-3 {
width: 25%
}

.column-4 {
width: 33.33333333333333%
}

.column-5 {
width: 41.66666666666667%
}

.column-6 {
width: 50%;
float: left;
padding: 15px
}

.column-7 {
width: 58.33333333333333%
}

.column-8 {
width: 66.66666666666667%
}

.column-9 {
width: 75%
}

.column-10 {
width: 83.33333333333333%
}

.column-11 {
width: 91.66666666666667%
}

.column-12,
.wrapper-full {
width: 100%
}

.nav-icon,
.navigation {
float: right
}

.custom-row::after {
content: "";
display: table;
clear: both
}

.wrapper {
max-width: 1140px;
margin: 0 auto;
position: relative
}

.header {
background-color: #485666;
padding: 8px 0;
position: static;
z-index: 2000
}

.header h1 {
color: #fff;
font-family: Poppins;
font-weight: 400;
font-size: 2.2rem;
padding-left: 40px
}

.rotate {
position: absolute;
transform: rotate(-20deg);
left: 0;
font-size: 2.8rem;
top: 5px
}

.ex_padd {
padding-top: 170px!important
}

.nav-icon-container {
display: block
}

.nav-icon {
width: 50px;
height: 50px;
border: 2px solid #fff;
border-radius: 50%;
position: relative;
cursor: pointer;
z-index: 100
}

.nav-icon span {
width: 60%;
height: 2px;
background-color: #fff;
position: absolute;
left: 50%;
transform: translate(-50%, -50%)
}

.nav-icon-1 {
top: 30%
}

.nav-icon-2 {
top: 50%
}

.nav-icon-3 {
top: 70%
}

.nav-icon.active .nav-icon-1 {
top: 50%;
transform: rotate(45deg);
left: 22%
}

.nav-icon.active .nav-icon-3 {
top: 50%;
transform: rotate(-45deg);
left: 22%
}

.nav-icon.active .nav-icon-2 {
width: 0
}

.nav-menu {
display: flex;
flex-direction: row;
justify-content: space-around
}

.nav-menu li {
list-style: none;
position: relative
}

.nav-menu li a {
color: #fff;
text-decoration: none;
display: inline-block;
padding: 0 20px
}

.nav-menu li:after,
.nav-menu li:before {
content: "";
position: absolute;
height: 3px;
background-color: rgba(255, 255, 255, .2);
bottom: 0;
width: 0;
transition: all .3s ease-in-out
}

.nav-menu li:before {
left: 0
}

.nav-menu li:after {
right: 0
}

.nav-menu li:hover:after,
.nav-menu li:hover:before {
width: 50%
}

.nav-menu li.active:after,
.nav-menu li.active:before {
background-color: rgba(0, 128, 128, 1)
}

.menu {
width: 200px;
background-color: #0B466C;
text-align: center;
padding: 40px;
position: fixed;
top: 96px;
right: -200px;
overflow: scroll;
height: calc(100% - 96px);
z-index: 1000
}

.menu.active {
right: 0
}

.menu .nav-menu {
flex-direction: column;
width: 150px
}

.menu .nav-menu li {
margin: 10px 0;
width: 80%
}

.box-tab {
margin: 10px 0
}

.effect {
margin: auto;
box-shadow: 0 0 15px 5px rgba(0, 0, 0, .07);
background-color: #fff;
border: 5px solid #f5f5f5
}

.tab-container {
padding: 50px 0
}

.tab-head {
text-align: center;
padding-bottom: 10px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto
}

.tab .effect {
position: relative;
overflow: hidden;
max-height: 240px;
max-width: 350px;
background: #3085a3;
text-align: center;
cursor: pointer
}

.grid-width3,
.grid-width6 {
max-height: 270px!important;
max-width: 530px!important
}

.grid-width8 {
max-width: 700px!important
}

.tab .effect img {
position: relative;
display: block;
min-height: 100%;
opacity: .8
}

.tab .effect .tab-text {
padding: 2em;
color: #fff;
text-transform: uppercase;
font-size: 1.25rem;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%
}

.tab-text h2 {
color: #fff;
margin: 0;
font-size: 1.5rem
}

.tab-text p {
color: #fff;
margin: 0;
font-size: 1rem
}

.hide {
display: none
}

@media (max-width:575px) {
.column-xs-1,
.column-xs-10,
.column-xs-11,
.column-xs-12,
.column-xs-2,
.column-xs-3,
.column-xs-4,
.column-xs-5,
.column-xs-7,
.column-xs-8,
.column-xs-9 {
float: left;
padding: 15px
}
.column-xs-1 {
width: 8.333333333333333%
}
.column-xs-2 {
width: 16.66666666666667%
}
.column-xs-3 {
width: 25%
}
.column-xs-4 {
width: 33.33333333333333%
}
.column-xs-5 {
width: 41.66666666666667%
}
.column-xs-6 {
width: 50%;
float: left;
padding: 15px
}
.column-xs-7 {
width: 58.33333333333333%
}
.column-xs-8 {
width: 66.66666666666667%
}
.column-xs-9 {
width: 75%
}
.column-xs-10 {
width: 83.33333333333333%
}
.column-xs-11 {
width: 91.66666666666667%
}
.column-xs-12 {
width: 100%
}
.hide-xs {
display: none
}
.effectTab-header .title::before {
width: 125%;
left: 15%
}
.tab-container {
padding-top: 25px;
padding-bottom: 25px
}
}

@media (min-width:576px) and (max-width:767px) {
.column-sm-1,
.column-sm-10,
.column-sm-11,
.column-sm-12,
.column-sm-2,
.column-sm-3,
.column-sm-4,
.column-sm-5,
.column-sm-7,
.column-sm-8,
.column-sm-9 {
float: left;
padding: 15px
}
.column-sm-1 {
width: 8.333333333333333%
}
.column-sm-2 {
width: 16.66666666666667%
}
.column-sm-3 {
width: 25%
}
.column-sm-4 {
width: 33.33333333333333%
}
.column-sm-5 {
width: 41.66666666666667%
}
.column-sm-6 {
width: 50%;
float: left;
padding: 15px
}
.column-sm-7 {
width: 58.33333333333333%
}
.column-sm-8 {
width: 66.66666666666667%
}
.column-sm-9 {
width: 75%
}
.column-sm-10 {
width: 83.33333333333333%
}
.column-sm-11 {
width: 91.66666666666667%
}
.column-sm-12 {
width: 100%
}
.hide-sm {
display: none
}
.visible-sm {
display: block
}
.tab-container {
padding-top: 25px;
padding-bottom: 25px
}
}

@media (max-width:1000px) {
.header h1 {
padding-left: 70px
}
.rotate {
left: 30px
}
@media (min-width:768px) and (max-width:991px) {
.column-md-1,
.column-md-10,
.column-md-11,
.column-md-12,
.column-md-2,
.column-md-3,
.column-md-4,
.column-md-5,
.column-md-7,
.column-md-8,
.column-md-9 {
    float: left;
    padding: 15px
}
.column-md-1 {
    width: 8.333333333333333%
}
.column-md-2 {
    width: 16.66666666666667%
}
.column-md-3 {
    width: 25%
}
.column-md-4 {
    width: 33.33333333333333%
}
.column-md-5 {
    width: 41.66666666666667%
}
.column-md-6 {
    width: 50%;
    float: left;
    padding: 15px
}
.column-md-7 {
    width: 58.33333333333333%
}
.column-md-8 {
    width: 66.66666666666667%
}
.column-md-9 {
    width: 75%
}
.column-md-10 {
    width: 83.33333333333333%
}
.column-md-11 {
    width: 91.66666666666667%
}
.column-md-12 {
    width: 100%
}
.hide-md {
    display: none
}
.visible-md {
    display: block
}
}
}

.effect.effect-one {
background: #18a367;
position: relative
}

.effect.effect-one .tab-text {
padding: 1em
}

.effect.effect-one .tab-text::after,
.effect.effect-one .tab-text::before {
position: absolute;
content: '';
opacity: 0
}

.effect.effect-one .tab-text::before {
top: 50px;
right: 30px;
bottom: 50px;
left: 30px;
border-top: 2px solid rgba(255, 255, 255, .3);
border-bottom: 2px solid rgba(255, 255, 255, .3);
-webkit-transform: scale(0, 1);
transform: scale(0, 1);
-webkit-transform-origin: 0 0;
transform-origin: 0 0
}

.effect.effect-one .tab-text::after {
top: 30px;
right: 50px;
bottom: 30px;
left: 50px;
border-right: 1px solid #fff;
border-left: 1px solid #fff;
-webkit-transform: scale(1, 0);
transform: scale(1, 0);
-webkit-transform-origin: 100% 0;
transform-origin: 100% 0
}

.effect.effect-one .icons-block {
z-index: 1000;
position: absolute;
bottom: 14px;
width: 100%;
left: 0;
text-align: center
}

.effect.effect-one .icons-block .social-icon-1,
.effect.effect-one .icons-block .social-icon-2,
.effect.effect-one .icons-block .social-icon-3 {
transition: all .5s ease-in-out;
opacity: 0
}

.effect.effect-one:hover .social-icon-1 {
opacity: 1;
transition-delay: .3s;
transition-duration: .5s
}

.effect.effect-one:hover .social-icon-2 {
opacity: 1;
transition-delay: .4s;
transition-duration: .5s
}

.effect.effect-one:hover .social-icon-3 {
opacity: 1;
transition-delay: .5s;
transition-duration: .5s
}

.effect.effect-one .icons-block i {
color: rgba(255, 255, 255, 1);
padding-left: 10px;
font-size: 1.3rem
}

.effect.effect-one h2 {
padding-top: 20%;
-webkit-transition: -webkit-transform .35s;
transition: transform .35s;
font-weight: 600;
font-size: 1.7rem;
font-family: Oswald, sans-serif
}

.effect.effect-one p,
.effect.effect-two h2,
.effect.effect-two p.description {
font-family: Poppins
}

.effect-one .pt-1 {
padding-top: 10%!important
}

.effect-one .pt-2 {
padding-top: 16%!important
}

.effect-one .pt-3 {
padding-top: 28%!important
}

.effect.effect-one p {
padding: .5em 2.7em;
text-transform: none;
opacity: 0;
-webkit-transform: translate3d(0, -10px, 0);
transform: translate3d(0, -10px, 0);
font-size: .92rem;
line-height: 16px;
color: rgba(255, 255, 255, .9)
}

.effect.effect-one h2,
.effect.effect-one img {
-webkit-transform: translate3d(0, -30px, 0);
transform: translate3d(0, -30px, 0)
}

.effect.effect-one .tab-text::after,
.effect.effect-one .tab-text::before,
.effect.effect-one img,
.effect.effect-one p {
-webkit-transition: opacity .35s, -webkit-transform .35s;
transition: opacity .35s, transform .35s
}

.effect.effect-one:hover img {
opacity: .7;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0) scale(1.1, 1.1)
}

.effect.effect-one:hover .tab-text::after,
.effect.effect-one:hover .tab-text::before {
opacity: 1;
-webkit-transform: scale(1);
transform: scale(1)
}

.effect.effect-one:hover h2,
.effect.effect-one:hover p {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0)
}

.effect.effect-one:hover .tab-text::after,
.effect.effect-one:hover h2,
.effect.effect-one:hover img,
.effect.effect-one:hover p {
-webkit-transition-delay: .15s;
transition-delay: .15s
}

.effect.effect-two .tab-text {
top: auto;
bottom: 0;
padding: 1em;
height: 3.75em;
background: rgba(241, 169, 1, .95);
color: #3c4a50;
-webkit-transition: -webkit-transform .35s;
transition: transform .35s;
-webkit-transform: translate3d(0, 100%, 0);
transform: translate3d(0, 100%, 0)
}

.effect.effect-two .col3 {
height: 5.5rem!important
}

.effect.effect-two h2 {
float: left;
font-size: 1.1rem;
font-weight: 600;
word-break: break-all;
width: 50%;
text-align: left;
display: inline-block
}

.effect-two .col3-head {
width: 100%!important;
padding-bottom: 10px
}

.effect-two .icon-links a {
font-size: 1.2rem!important
}

.effect.effect-two p.icon-links a {
float: right;
color: #f1f8ff;
font-size: 1.4em;
line-height: 20px
}

.effect.effect-two:hover p.icon-links a:focus,
.effect.effect-two:hover p.icon-links a:hover {
color: #252d31
}

.effect.effect-two p.description {
position: absolute;
font-size: 1rem!important;
bottom: 7em;
color: #fff;
text-transform: none;
opacity: 0;
-webkit-backface-visibility: hidden;
-webkit-transition: opacity .35s;
transition: opacity .35s;
line-height: 18px;
padding: 15px 50px;
background-color: rgba(0, 0, 0, .5);
right: 30px;
left: 30px;
-webkit-clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
clip-path: polygon(7% 0, 100% 0, 93% 100%, 2% 100%)
}

.effect.effect-two p.col6 {
left: 80px!important;
right: 80px!important;
bottom: 8rem
}

.effect.effect-two h2,
.effect.effect-two p.icon-links a {
-webkit-transition: -webkit-transform .35s;
transition: transform .35s;
-webkit-transform: translate3d(0, 200%, 0);
transform: translate3d(0, 200%, 0)
}

.effect.effect-two:hover p.description {
opacity: 1
}

.effect.effect-two:hover .tab-text,
.effect.effect-two:hover h2,
.effect.effect-two:hover p.icon-links a {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
padding-right: 10px
}

.effect.effect-two:hover h2 {
-webkit-transition-delay: 50ms;
transition-delay: 50ms
}

.effect.effect-two:hover p.icon-links a:nth-child(3) {
-webkit-transition-delay: .1s;
transition-delay: .1s
}

.effect.effect-two:hover p.icon-links a:nth-child(2) {
-webkit-transition-delay: .15s;
transition-delay: .15s
}

.effect.effect-two:hover p.icon-links a:first-child {
-webkit-transition-delay: .2s;
transition-delay: .2s
}

.effect.effect-three {
background: linear-gradient(-45deg, #0C71E9 0, #034B96, 100%);
text-align: left
}

.effect.effect-three h2 {
transform: translate3d(25px, 0, 0);
-webkit-transform: translate3d(25px, 0, 0);
transition: all .35s;
font-family: Oswald;
font-size: 1.6rem
}

.effect.effect-three h2:before {
content: "[ ";
position: absolute;
left: -15px;
bottom: 3px;
font-weight: 400
}

.effect.effect-three:hover h2 {
transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0);
opacity: .5
}

.effect.effect-three .tab-text:before {
content: "";
position: absolute;
bottom: 0;
right: 0;
border: 140px solid red;
border-radius: 50% 0 0 50%;
opacity: 0;
transform: translate3d(50%, 50%, 0) rotate3d(0, 0, 1, 135deg);
transition: all .35s .15s;
border-color: transparent transparent transparent #fff
}

.effect.effect-three:hover .tab-text:before {
transform: translate3d(50%, 50%, 0) rotate3d(0, 0, 1, 45deg);
opacity: .8;
transition-delay: 0s
}

.effect.effect-three p {
position: absolute;
width: 31px;
height: 36px;
bottom: 70px;
right: -31px;
font-size: 120%
}

.effect.effect-three p a {
width: 31px;
height: 36px;
position: absolute;
opacity: 0;
transition: all .35s cubic-bezier(.25, .4, .2, .5) 0s
}

.effect.effect-three p a i {
color: #5d504f;
transition: transform .35s cubic-bezier(.5, .2, .4, .25) 0s
}

.effect.effect-three p a i:hover {
color: #cc6055
}

.effect.effect-three:hover p a {
opacity: 1
}

.effect.effect-three:hover p a:nth-child(1) {
transform: translate3d(0, 60px, 0);
-webkit-transform: translate3d(0, 60px, 0);
transition: all .35s cubic-bezier(.5, .2, .4, .25) .15s;
-webkit-transition: all .35s cubic-bezier(.5, .2, .4, .25) .15s
}

.effect.effect-three:hover p a:nth-child(1) i {
transform: translate3d(-100px, 0, 0);
transition: transform .35s cubic-bezier(.25, .4, .2, .5) .15s;
-webkit-transform: translate3d(-100px, 0, 0);
-webkit-transition: transform .35s cubic-bezier(.25, .4, .2, .5) .15s
}

.effect.effect-three:hover p a:nth-child(2) {
transform: translate3d(0, 30px, 0);
transition: all .35s cubic-bezier(.5, .2, .4, .25) .25s;
-webkit-transform: translate3d(0, 30px, 0);
-webkit-transition: all .35s cubic-bezier(.5, .2, .4, .25) .25s
}

.effect.effect-three:hover p a:nth-child(2) i {
transform: translate3d(-80px, 0, 0);
transition: transform .35s cubic-bezier(.25, .4, .2, .5) .25s;
-webkit-transform: translate3d(-80px, 0, 0);
-webkit-transition: transform .35s cubic-bezier(.25, .4, .2, .5) .25s
}

.effect.effect-three:hover p a:nth-child(3) {
transform: translate3d(0, 0, 0);
transition: all .35s cubic-bezier(.5, .2, .4, .25) .35s;
-webkit-transform: translate3d(0, 0, 0);
-webkit-transition: all .35s cubic-bezier(.5, .2, .4, .25) .35s
}

.effect.effect-three:hover p a:nth-child(3) i {
transform: translate3d(-45px, 0, 0);
transition: transform .35s cubic-bezier(.25, .4, .2, .5) .35s;
-webkit-transform: translate3d(-45px, 0, 0);
-webkit-transition: transform .35s cubic-bezier(.25, .4, .2, .5) .35s
}

.effect.effect-three img {
transform: scale3d(1.1, 1.1, 1) translate3d(15px, 0, 0);
transition: all .35s;
transform-origin: 85% 100%;
-webkit-transform: scale3d(1.1, 1.1, 1) translate3d(15px, 0, 0);
-webkit-transition: all .35s;
-webkit-transform-origin: 85% 100%
}

.effect.effect-three:hover img {
transform: scale3d(1.1, 1.1, 1) translate3d(0, 0, 0);
-webkit-transform: scale3d(1.1, 1.1, 1) translate3d(0, 0, 0);
opacity: .6
}

.effect.effect-four {
background: #2e5d5a
}

.effect-four .tab-text h2 {
position: absolute;
left: 0;
bottom: 0;
padding: 1em 1.2em;
font-family: Oswald
}

.effect-four .tab-text p {
width: 65%;
font-size: 68%;
line-height: 1;
letter-spacing: 1px;
text-align: left;
float: right;
padding-left: 15px;
border-left: 1px solid #fff;
border-bottom: 1px solid #fff;
transform: translate3d(40px, 0, 0);
-webkit-transform: translate3d(40px, 0, 0);
opacity: 0;
transition: all .35s;
font-family: "Open sans";
padding-bottom: 5px
}

.effect-four .tab-text p:after,
.effect-four .tab-text p:before {
width: 10px;
height: 10px;
background-color: rgba(255, 255, 255, 1);
border-radius: 50px;
content: "";
position: absolute
}

.effect.effect-five h2,
.effect.effect-six h2 {
font-family: Oswald
}

.effect-four .tab-text p:after {
top: -5px;
left: -5px;
-webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%)
}

.effect-four .tab-text p:before {
right: 0;
bottom: -6px;
-webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%)
}

.effect.effect-four .icons-block {
z-index: 1000;
position: absolute;
top: 10px;
width: 100%;
left: 0;
text-align: left;
padding-left: 10px;
padding-top: 9px
}

.effect.effect-four .icon-c3 {
padding-left: 5px;
padding-top: 0
}

.effect.effect-four .icons-block .social-icon-1,
.effect.effect-four .icons-block .social-icon-2,
.effect.effect-four .icons-block .social-icon-3 {
transition: all .5s ease-in-out;
opacity: 0
}

.effect.effect-four:hover .social-icon-1 {
opacity: 1;
transition-delay: .3s;
transition-duration: .5s
}

.effect.effect-four:hover .social-icon-2 {
opacity: 1;
transition-delay: .4s;
transition-duration: .5s
}

.effect.effect-four:hover .social-icon-3 {
opacity: 1;
transition-delay: .5s;
transition-duration: .5s
}

.effect.effect-four .icons-block i {
color: rgba(255, 255, 255, .9);
padding-left: 7px;
font-size: 1.2rem
}

.effect-four:hover p {
transform: translate3d(0, 0, 0);
opacity: 1
}

.effect.effect-four img {
max-width: none;
width: calc(100% + 60px);
opacity: 1;
transform: translate3d(0, 0, 0) scale(1.12);
transition: all .35s;
-webkit-transform: translate3d(0, 0, 0) scale(1.12);
-webkit-transition: all .35s
}

.effect.effect-four:hover img {
transform: translate3d(-20px, 0, 0) scale(1);
-webkit-transform: translate3d(-20px, 0, 0) scale(1);
opacity: .5
}

.effect.effect-five {
background: #162633;
text-align: left
}

.col3-block-height {
min-height: 480px!important
}

.effect.effect-five h2 {
transform: translate3d(0, 20px, 0);
transition: all .35s;
-webkit-transform: translate3d(0, 20px, 0);
-webkit-transition: all .35s
}

.effect.effect-five:hover h2 {
transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0);
opacity: .6
}

.effect.effect-five img {
transition: all .35s
}

.effect.effect-five:hover img {
opacity: .6;
transform: translate3d(0, 0, 0) scale(1.16);
-webkit-transform: translate3d(0, 0, 0) scale(1.16)
}

.effect.effect-five .tab-text:before {
content: "";
position: absolute;
bottom: 0;
left: 0;
width: 100vw;
height: 180%;
background-color: #FFF;
opacity: .8;
transform-origin: 0 100%;
transform: rotate(90deg);
transition: all .35s;
-webkit-transform-origin: 0 100%;
-webkit-transform: rotate(90deg);
-webkit-transition: all .35s
}

.effect.effect-seven .tab-text:after,
.effect.effect-six .tab-text:before {
height: 100%;
left: 0;
top: 0;
position: absolute;
width: 100%;
content: ""
}

.effect.effect-five:hover .tab-text:before {
transform: rotate(67deg);
-webkit-transform: rotate(67deg)
}

.effect.effect-five p {
position: absolute;
bottom: 0;
right: 0;
padding: 0 15px 25px 0
}

.effect.effect-five p a {
color: #5d504f;
margin: 0 5px
}

.effect.effect-five p a:hover {
color: #cc6055
}

.effect.effect-five p a i {
opacity: 0;
font-size: 120%;
transform: translate3d(0, 50px, 0);
transition: all .35s;
-webkit-transform: translate3d(0, 50px, 0);
-webkit-transition: all .35s
}

.effect.effect-five:hover p a i {
opacity: 1;
transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0)
}

.effect.effect-five:hover p a:nth-child(1) i {
transition-delay: .15s;
-webkit-transition-delay: .15s
}

.effect.effect-five:hover p a:nth-child(2) i {
transition-delay: .1s;
-webkit-transition-delay: .1s
}

.effect.effect-five:hover p a:nth-child(3) i {
transition-delay: .05s;
-webkit-transition-delay: .05s
}

.effect.effect-six {
background-color: #3498db
}

.effect.effect-six h2 {
text-align: left
}

.effect.effect-six img {
transition: all .35s;
transform: translate3d(0, 0, 0) scale(1.05);
-webkit-transition: all .35s;
-webkit-transform: translate3d(0, 0, 0) scale(1.05)
}

.effect.effect-six:hover img {
opacity: .4;
transform: translate3d(-50px, 0, 0) scale(1);
-webkit-transform: translate3d(-50px, 0, 0) scale(1)
}

.effect.effect-six .icons-block {
z-index: 1000;
position: absolute;
bottom: 25px;
width: 100%;
left: 0;
text-align: left;
padding-left: 15px
}

.effect.effect-six .icons-block .social-icon-1,
.effect.effect-six .icons-block .social-icon-2,
.effect.effect-six .icons-block .social-icon-3 {
transition: all .5s ease-in-out;
opacity: 0
}

.effect.effect-six:hover .social-icon-1 {
opacity: 1;
transition-delay: .3s;
transition-duration: .5s
}

.effect.effect-six:hover .social-icon-2 {
opacity: 1;
transition-delay: .4s;
transition-duration: .5s
}

.effect.effect-six:hover .social-icon-3 {
opacity: 1;
transition-delay: .5s;
transition-duration: .5s
}

.effect.effect-six .icons-block i {
color: rgba(255, 255, 255, 1);
padding-left: 10px;
font-size: 1.3rem
}

.effect.effect-six p {
max-width: 130px;
padding: 0 10px;
margin: 30px;
text-align: right;
font-size: .9rem;
line-height: 1.1;
position: absolute;
bottom: 0;
right: 0;
border-right: 3px solid #fff;
opacity: 0;
transition: all .35s;
font-family: Poppins
}

.effect.effect-six:hover p {
opacity: 1
}

.effect.effect-six .tab-text:before {
background-color: rgba(255, 255, 255, .4);
transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -101%, 0);
transition: all .6s;
-webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -101%, 0);
-webkit-transition: all .6s
}

.effect.effect-six:hover .tab-text:before {
transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 101%, 0);
-webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 101%, 0)
}

.effect.effect-seven {
background: linear-gradient(-45deg, #f3cf3f 0, #f33f58 100%)
}

.effect.effect-eight,
.effect.effect-nine {
background: linear-gradient(-180deg, #fff 10%, #000 100%)
}

.effect.effect-seven img {
transition: all .35s;
transform: translate3d(0, 0, 0) scale(1);
-webkit-transition: all .35s;
-webkit-transform: translate3d(0, 0, 0) scale(1)
}

.effect.effect-seven:hover img {
opacity: .6;
transform: translate3d(-50px, 0, 0) scale(1.1) rotate(3deg);
-webkit-transform: translate3d(-50px, 0, 0) scale(1.1) rotate(3deg)
}

.effect.effect-seven h2 {
padding-top: 20%;
transform: scale3d(.8, .8, 1);
transition: all .35s;
-webkit-transform: scale3d(.8, .8, 1);
-webkit-transition: all .35s;
font-family: Oswald
}

.effect.effect-seven .col8-head {
padding-top: 9%
}

.effect.effect-seven:hover h2 {
transform: scale3d(1, 1, 1);
-webkit-transform: scale3d(1, 1, 1)
}

.effect.effect-seven p {
font-size: .9rem;
padding: 10px 5px;
transform: scale3d(.8, .8, 1);
-webkit-transform: scale3d(.8, .8, 1);
opacity: 0;
transition: all .35s;
-webkit-transition: all .35s;
font-family: Poppins
}

.effect.effect-seven:hover p {
transform: scale3d(1, 1, 1);
-webkit-transform: scale3d(1, 1, 1);
opacity: 1
}

.effect.effect-seven .tab-text:after {
border-top: 1px solid #fff;
border-bottom: 1px solid #fff;
transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1);
-webkit-transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1);
opacity: 0;
transition: all .35s;
-webkit-transition: all .35s
}

.effect.effect-seven:hover .tab-text:after {
transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1);
-webkit-transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1);
opacity: 1
}

.effect.effect-seven .icons-block {
z-index: 1000;
position: absolute;
bottom: 25px;
width: 100%;
left: 0;
text-align: left;
padding-left: 15px
}

.effect.effect-seven .c4 {
right: 0;
text-align: right;
padding-right: 15px
}

.effect.effect-seven .c3 {
bottom: 50%;
margin-bottom: -40px;
left: 23%
}

.effect.effect-seven .icons-block .social-icon-1,
.effect.effect-seven .icons-block .social-icon-2,
.effect.effect-seven .icons-block .social-icon-3 {
transition: all .5s ease-in-out;
opacity: 0
}

.effect.effect-seven:hover .social-icon-1 {
opacity: 1;
transition-delay: .3s;
transition-duration: .5s
}

.effect.effect-seven:hover .social-icon-2 {
opacity: 1;
transition-delay: .4s;
transition-duration: .5s
}

.effect.effect-seven:hover .social-icon-3 {
opacity: 1;
transition-delay: .5s;
transition-duration: .5s
}

.effect.effect-seven .icons-block i {
color: rgba(255, 255, 255, 1);
padding-left: 10px;
font-size: 1.3rem
}

.effect.effect-eight img {
transition: all .3s ease-in-out;
transform: translate3d(0, 0, 0) scale(1, 1);
-webkit-transition: all .3s ease-in-out;
-webkit-transform: translate3d(0, 0, 0) scale(1, 1)
}

.effect.effect-eight:hover img {
opacity: .6;
transform: translate3d(-20px, 0, 0) scale(1.1, 1.1);
-webkit-transform: translate3d(-20px, 0, 0) scale(1.1, 1.1)
}

.effect.effect-eight .tab-text h2 {
font-family: Oswald;
transform: scale3d(.9, .9, 1);
transition: all .5s ease-in-out;
-webkit-transform: scale3d(.9, .9, 1);
-webkit-transition: all .5s ease-in-out
}

.effect.effect-eight .col8-head {
padding-top: 9%
}

.effect.effect-eight:hover h2 {
transform: scale3d(1.1, 1.1, 1);
transition: all .5s ease-in-out;
-webkit-transform: scale3d(1.1, 1.1, 1);
-webkit-transition: all .5s ease-in-out
}

.effect.effect-eight p {
font-size: .9rem;
padding: 10px 5px;
transform: scale3d(.8, .8, 1);
-webkit-transform: scale3d(.8, .8, 1);
opacity: 0;
transition: all .35s;
-transition: all .35s;
font-family: Poppins
}

.effect.effect-eight:hover p {
transform: scale3d(1, 1, 1);
-webkit-transform: scale3d(1, 1, 1);
opacity: 1
}

.effect.effect-eight .tab-text:after {
content: "";
position: absolute;
left: -230px;
top: 0;
border-top: 208px solid rgba(7, 0, 2, .3);
border-left: 140px solid rgba(240, 74, 126, .6);
border-bottom: 188px solid transparent;
border-right: 160px solid transparent;
transition: all .4s ease-in-out;
-webkit-transition: all .4s ease-in-out
}

.effect.effect-eight:hover .tab-text:after {
transform: rotate3d(0, 0, 1, 52deg) scale3d(1, 1, 1);
-webkit-transform: rotate3d(0, 0, 1, 52deg) scale3d(1, 1, 1);
opacity: 1;
top: 103px;
left: -378px;
border-top: 325px solid rgba(240, 74, 126, .8);
border-left: 422px solid rgba(240, 74, 126, .8);
border-bottom: 218px solid transparent;
border-right: 160px solid transparent
}

.effect.effect-eight .icons-block {
z-index: 1000;
position: absolute;
bottom: 15px;
width: 100%;
left: 0;
text-align: left;
padding-left: 5px
}

.effect.effect-eight .icons-block .social-icon-1,
.effect.effect-eight .icons-block .social-icon-2,
.effect.effect-eight .icons-block .social-icon-3 {
transition: all .5s ease-in-out;
opacity: 0
}

.effect.effect-eight:hover .social-icon-1 {
opacity: 1;
transition-delay: .3s;
transition-duration: .5s
}

.effect.effect-eight:hover .social-icon-2 {
opacity: 1;
transition-delay: .4s;
transition-duration: .5s
}

.effect.effect-eight:hover .social-icon-3 {
opacity: 1;
transition-delay: .5s;
transition-duration: .5s
}

.effect.effect-eight .icons-block i {
color: rgba(255, 255, 255, 1);
padding-left: 10px;
font-size: 1.3rem
}

.effect.effect-nine img {
transition: all .3s ease-in-out;
transform: translate3d(0, 0, 0) scale(1, 1);
-webkit-transition: all .3s ease-in-out;
-webkit-transform: translate3d(0, 0, 0) scale(1, 1)
}

.effect.effect-nine:hover img {
opacity: .6;
transform: translate3d(-20px, 0, 0) scale(1.1, 1.1);
-webkit-transform: translate3d(-20px, 0, 0) scale(1.1, 1.1)
}

.effect.effect-nine .tab-text h2 {
font-family: Oswald;
transform: scale3d(.9, .9, 1);
transition: all .5s ease-in-out;
-webkit-transform: scale3d(.9, .9, 1);
-webkit-transition: all .5s ease-in-out;
z-index: 2;
position: relative;
padding-top: 18%
}

.effect.effect-nine:hover h2 {
transform: scale3d(1, 1, 1);
transition: all .5s ease-in-out;
-webkit-transform: scale3d(1, 1, 1);
-webkit-transition: all .5s ease-in-out
}

.effect.effect-nine p {
font-size: .8rem;
padding: 10px 5px;
transform: scale3d(.8, .8, 1);
-webkit-transform: scale3d(.8, .8, 1);
opacity: 0;
-webkit-transition: all .35s;
transition: all .35s;
font-family: Poppins;
z-index: 2;
position: relative
}

.effect.effect-nine:hover p {
transform: scale3d(1, 1, 1);
-webkit-transform: scale3d(1, 1, 1);
opacity: 1
}

.effect.effect-nine .tab-text:after {
content: "";
position: absolute;
left: 0;
top: 0;
width: calc(100% - 0px);
height: inherit;
border-top: 10px solid transparent;
border-left: 10px solid transparent;
border-bottom: 10px solid transparent;
border-right: 10px solid transparent;
transition: all .4s ease-in-out;
-webkit-transition: all .4s ease-in-out
}

.effect.effect-nine:hover .tab-text:after {
opacity: 1;
top: 0;
left: 0;
border-top: 135px solid rgba(0, 0, 0, .5);
border-left: 135px solid rgba(0, 0, 0, .5);
border-bottom: 135px solid rgba(0, 0, 0, .5);
border-right: 135px solid rgba(0, 0, 0, .5)
}

.effect.effect-nine .icons-block {
z-index: 1000;
position: absolute;
top: 10px;
width: 100%;
left: 0;
text-align: left;
padding-left: 15px;
padding-top: 10px
}

.effect.effect-nine .icons-block .social-icon-1,
.effect.effect-nine .icons-block .social-icon-2,
.effect.effect-nine .icons-block .social-icon-3 {
transition: all .5s ease-in-out;
opacity: 0
}

.effect.effect-nine:hover .social-icon-1 {
opacity: 1;
transition-delay: .3s;
transition-duration: .5s
}

.effect.effect-nine:hover .social-icon-2 {
opacity: 1;
transition-delay: .4s;
transition-duration: .5s
}

.effect.effect-nine:hover .social-icon-3 {
opacity: 1;
transition-delay: .5s;
transition-duration: .5s
}

.effect.effect-nine .icons-block i {
color: rgba(255, 255, 255, .9);
padding-left: 7px;
font-size: 1.2rem
}

.effect.effect-ten {
background-color: #162633
}

.effect.effect-ten img {
transition: all .35s;
transform: translate3d(-20px, 0, 0) scale(1.1, 1.1);
-webkit-transition: all .35s;
-webkit-transform: translate3d(-20px, 0, 0) scale(1.1, 1.1)
}

.effect.effect-ten:hover img {
opacity: .85;
transform: translate3d(0, 0, 0) scale(1, 1);
-webkit-transform: translate3d(0, 0, 0) scale(1, 1)
}

.effect.effect-ten h2 {
transform: translate3d(0, 5px, 0);
-webkit-transform: translate3d(0, 5px, 0);
transition: all .35s;
-webkit-transition: all .35s;
font-family: Oswald;
z-index: 2;
position: relative;
padding-top: 10%
}

.effect.effect-ten:hover h2 {
transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0)
}

.effect.effect-ten p {
font-size: .8rem;
line-height: 1.1;
padding-top: 5px;
transform: translate3d(0, 10px, 0);
transition: all .35s;
-webkit-transform: translate3d(0, 10px, 0);
-webkit-transition: all .35s;
font-family: Poppins
}

.effect.effect-ten:hover p {
transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0)
}

.effect.effect-ten .tab-text {
transform-style: preserve-3d;
-webkit-transform-style: preserve-3d;
perspective: 300px
}

.effect.effect-ten .tab-text:after {
content: "";
width: 180%;
height: 180%;
background: linear-gradient(-45deg, rgba(0, 0, 0, 0) 49%, rgba(0, 0, 0, .45) 50%);
position: absolute;
top: 0;
left: 0;
-webkit-transition: all .4s linear;
transition: all .4s linear
}

.effect.effect-ten .tab-text:before {
content: "";
position: absolute;
bottom: 0;
right: 0;
width: 60px;
height: 60px;
background: linear-gradient(-45deg, rgba(0, 0, 0, 0) 49%, rgba(132, 132, 132, .45) 50%, rgba(255, 255, 255, .65) 65%);
transform: rotate3d(-1, 1, 0, 20deg);
transform-origin: 50% 50%;
transition: width .2s linear .2s, height .2s linear .2s, bottom .2s linear 0s, right .2s linear 0s;
-webkit-transform: rotate3d(-1, 1, 0, 20deg);
-webkit-transform-origin: 50% 50%;
-webkit-transition: width .2s linear .2s, height .2s linear .2s, bottom .2s linear 0s, right .2s linear 0s
}

.effect.effect-ten:hover .tab-text:after {
top: -80%;
left: -80%;
background: linear-gradient(-45deg, rgba(0, 0, 0, 0) 49%, rgba(0, 0, 0, .45) 60%)
}

.effect.effect-ten:hover .tab-text:before {
width: 100%;
height: 100%;
bottom: 50%;
right: 50%;
-webkit-transition: width .2s linear 0s, height .2s linear 0s, bottom .2s linear .2s, right .2s linear .2s;
transition: width .2s linear 0s, height .2s linear 0s, bottom .2s linear .2s, right .2s linear .2s
}

.effect.effect-ten .icons-block {
z-index: 1000;
position: absolute;
top: 10px;
width: 100%;
left: 0;
text-align: left;
padding-left: 15px;
padding-top: 10px
}

.effect.effect-ten .icons-block .social-icon-1,
.effect.effect-ten .icons-block .social-icon-2,
.effect.effect-ten .icons-block .social-icon-3 {
transition: all .5s ease-in-out;
opacity: 0
}

.effect.effect-ten:hover .social-icon-1 {
opacity: 1;
transition-delay: .3s;
transition-duration: .5s
}

.effect.effect-ten:hover .social-icon-2 {
opacity: 1;
transition-delay: .4s;
transition-duration: .5s
}

.effect.effect-ten:hover .social-icon-3 {
opacity: 1;
transition-delay: .5s;
transition-duration: .5s
}

.effect.effect-ten .icons-block i {
color: rgba(255, 255, 255, .9);
padding-left: 7px;
font-size: 1.2rem
}

.effect.effect-eleven {
background-color: #3498db
}

.effect.effect-eleven img {
transform: translate3d(-10px, 0, 0);
transition: all .35s;
-webkit-transform: translate3d(-10px, 0, 0);
-webkit-transition: all .35s
}

.effect.effect-eleven:hover img {
opacity: .6;
transform: translate3d(-30px, 0, 0) scale(1.1, 1.1);
-webkit-transform: translate3d(-30px, 0, 0) scale(1.1, 1.1)
}

.effect.effect-eleven h2 {
text-align: left;
transform: translate3d(-10px, 0, 0);
transition: all .55s 0s;
-webkit-transform: translate3d(-10px, 0, 0);
-webkit-transition: all .55s 0s;
font-family: Oswald;
z-index: 2;
position: relative;
padding-top: 10%
}

.effect.effect-eleven:hover h2 {
transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0)
}

.effect.effect-eleven p {
text-align: left;
line-height: 1.2;
padding-top: 34px;
padding-left: 1px;
font-size: .9rem;
transform: translate3d(15px, 0, 0);
-webkit-transform: translate3d(15px, 0, 0);
opacity: 0;
transition: all .35s 0s;
z-index: 5;
position: absolute;
word-spacing: 3px;
top: 65px;
width: calc(100% - 4em);
font-family: Poppins
}

.effect.effect-eleven:hover p {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
-webkit-transition-delay: .2s;
transition-delay: .2s
}

.effect.effect-eleven .tab-text:before {
content: "";
position: absolute;
right: 0;
top: 0;
border-top: 125px solid rgba(255, 255, 255, .3);
border-right: 350px solid transparent;
border-bottom: 125px solid rgba(255, 255, 255, .3);
transform: translate3d(-100%, 0, 0);
transition: all .35s;
-webkit-transform: translate3d(-100%, 0, 0);
-webkit-transition: all .35s
}

.effect.effect-eleven .tab-text:after {
content: "";
position: absolute;
right: 0;
top: 0;
border-top: 125px solid transparent;
border-right: 350px solid rgba(255, 255, 255, .3);
border-bottom: 125px solid transparent;
transform: translate3d(100%, 0, 0);
transition: all .35s;
-webkit-transform: translate3d(100%, 0, 0);
-webkit-transition: all .35s
}

.effect.effect-eleven:hover .tab-text:after,
.effect.effect-eleven:hover .tab-text:before {
transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0)
}

.effect.effect-eleven .icons-block {
z-index: 1000;
position: absolute;
bottom: 25px;
width: 100%;
left: 0;
text-align: left;
padding-left: 15px
}

.effect.effect-eleven .icons-block .social-icon-1,
.effect.effect-eleven .icons-block .social-icon-2,
.effect.effect-eleven .icons-block .social-icon-3 {
transition: all .5s ease-in-out;
opacity: 0
}

.effect.effect-eleven:hover .social-icon-1 {
opacity: 1;
transition-delay: .3s;
transition-duration: .5s
}

.effect.effect-eleven:hover .social-icon-2 {
opacity: 1;
transition-delay: .4s;
transition-duration: .5s
}

.effect.effect-eleven:hover .social-icon-3 {
opacity: 1;
transition-delay: .5s;
transition-duration: .5s
}

.effect.effect-eleven .icons-block i {
color: rgba(255, 255, 255, 1);
padding-left: 10px;
font-size: 1.3rem
}

.effect.effect-twelve {
background: #42b078
}

.effect-twelve .tab-text h2 {
position: relative;
padding: .5em 0;
text-align: left;
overflow: hidden;
font-family: Oswald
}

.effect.effect-twelve h2:after {
content: "";
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 3px;
background-color: #fff;
transform: translate3d(-100%, 0, 0);
transition: all .35s;
-webkit-transform: translate3d(-100%, 0, 0);
-webkit-transition: all .35s
}

.effect.effect-twelve:hover h2:after {
transform: translate3d(0, 0, 0)
}

.effect-twelve .tab-text p {
padding: .7em 0;
font-size: .8rem;
text-align: left;
line-height: 1.1;
transform: translate3d(100%, 0, 0);
-webkit-transform: translate3d(100%, 0, 0);
opacity: 0;
transition: all .35s;
-webkit-transition: all .35s;
font-family: Poppins
}

.effect-twelve:hover p {
transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0);
opacity: 1
}

.effect.effect-twelve img {
max-width: none;
opacity: 1;
transform: translate3d(-10px, 0, 0);
transition: all .35s;
-webkit-transform: translate3d(-10px, 0, 0);
-webkit-transition: all .35s
}

.effect.effect-twelve:hover img {
transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0);
opacity: .4
}

.effect.effect-twelve .icons-block {
z-index: 1000;
position: absolute;
bottom: 25px;
width: 100%;
left: 0;
text-align: left;
padding-left: 15px
}

.effect.effect-twelve .icons-block .social-icon-1,
.effect.effect-twelve .icons-block .social-icon-2,
.effect.effect-twelve .icons-block .social-icon-3 {
transition: all .5s ease-in-out;
opacity: 0
}

.effect.effect-twelve:hover .social-icon-1 {
opacity: 1;
transition-delay: .3s;
transition-duration: .5s
}

.effect.effect-twelve:hover .social-icon-2 {
opacity: 1;
transition-delay: .4s;
transition-duration: .5s
}

.effect.effect-twelve:hover .social-icon-3 {
opacity: 1;
transition-delay: .5s;
transition-duration: .5s
}

.effect.effect-twelve .icons-block i {
color: rgba(255, 255, 255, 1);
padding-left: 10px;
font-size: 1.3rem
}

@media (max-width:575px) {
.effect.effect-two p.description {
bottom: 5.8em
}
}

@media (min-width:576px) and (max-width:767px) {
.tab .effect .tab-text h2 {
font-size: 1.3rem!important;
font-family: Oswald
}
.effect.effect-two p.description {
bottom: 5.8em
}
}

@media (min-width:768px) and (max-width:991px) {
.effect h2 {
font-size: 1.3rem!important
}
}`,

    },
    example2: {
        html: `<div class = "container">
<div class = "row text-center">
<h1>Image Hover Effect</h1>
</div>

<h2>CSS3 Filter Effect</h2>
<div class = "row">
<a  href="avascript:void(0);" class = "column col-xs-6" id = "sepia"><img src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/041ba526957515.56361c211db4e.png"><p>Sepia</p></a>
<a  href="avascript:void(0);" class = "column col-xs-6" id = "grayscale"><img src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ff8a2426957515.56361c212331c.png"><p>Grayscale</p></a>	
</div>

<h2>3D Hover Effect</h2>
<div class = "row">
<div class = "tdimension">
    <a  href="avascript:void(0);"></a>
</div>
</div>

<h2>Hover Effect With Caption</h2>
<div class = "row">
    <a  href="avascript:void(0);" class = "column col-xs-6" id = "caption"><span class = "text"><h1>Thunder</h1></span><img src = "https://upload.wikimedia.org/wikipedia/commons/1/19/Thunderstorm_in_sydney_2000x1500.png"></a>
    </div>	
</div>`,
        css: `body {
background: #ECECEC;
}

.footer {
width: 50%;
margin-left: 25%;
text-align: center;
font-family: 'Julius Sans One', sans-serif;
margin-top: 24px;
}

.container {
max-width: 720px;
margin: 24px auto 48px auto;
}

h1 {
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
}

h2 {
font-family: 'Julius Sans One', sans-serif;
font-size: 2.5rem;
}

.row {
margin-top: 12px;
}

.column {
display: inline-block;
text-align: center;
}

figure {
overflow: hidden;
}

a p {
color: black;
margin-top: 8px;
font-family: 'Open Sans', sans-serif;
}

a:hover {
text-decoration: none;
}

.column img {
display: block;
width: 100%;
height: 300px;
}

.column#sepia img {
-webkit-filter: sepia(100%);
filter: sepia(100%);
-webkit-transition: .3s ease-in-out;
transition: .3s ease-in-out;
}
.column#sepia:hover img {
-webkit-filter: sepia(0);
filter: sepia(0);
}

.column#grayscale img {
-webkit-filter: grayscale(100%);
filter: grayscale(100%);
-webkit-transition: .3s ease-in-out;
transition: .3s ease-in-out;
}
.column#grayscale:hover img {
-webkit-filter: grayscale(0);
filter: grayscale(0);
}

.tdimension {
width: 300px;
height: 300px;
margin: 20px auto 40px auto;
perspective: 1000px;
}
.tdimension a {
display: block;
width: 100%;
height: 100%;
background: url("https://mir-s3-cdn-cf.behance.net/project_modules/disp/e8346826957515.56361c2106f3f.png");
background-size: cover;
transform-style: preserve-3d;
transform: rotateX(70deg);
transition: all 0.8s;	
}
.tdimension:hover a {
transform: rotateX(20deg); 	
}	
.tdimension a:after {
content: '';
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height: 40px;
background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));    
transform: rotateX(90deg);
transform-origin: bottom;
}

.column#caption {
position: relative;
}
.column#caption .text {
position: absolute;		
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 10;
opacity: 0;
transition: all 0.8s ease;			
}
.column#caption .text h1 {		
margin: 0;		
color: white;
}
.column#caption:hover .text {
opacity: 1;

}
.column#caption:hover img {
-webkit-filter: sepia(90%);
}

.frame {
text-align: center;	
position: relative;
cursor: pointer;	
perspective: 500px; 
}
.frame img {
width: 300px;
height: 300px;
}
.frame .details {
width: 70%;
height: 80%;	
padding: 5% 8%;
position: absolute;
content: "";
top: 50%;
left: 50%;
transform: translate(-50%, -50%) rotateY(90deg);
transform-origin: 50%;
background: rgba(255,255,255,0.9);	
opacity: 0;
transition: all 0.4s ease-in;

}
.frame:hover .details {
transform: translate(-50%, -50%) rotateY(0deg);
opacity: 1;
}`,

    },
    example3: {
        html: `<div class="sp-container">
<div class="sp-content">
<div class="sp-globe"></div>
<h2 class="frame-1">AWESOME</h2>
<h2 class="frame-2">TEXT ANIMATION EFFECT</h2>
<h2 class="frame-3">BUILD WITH CSS3</h2>
<h2 class="frame-4">ENJOY</h2>
<h2 class="frame-5">
    <span>FORK,</span>
    <span>CHANGE,</span>
    <span>EXPERIANCE.</span>
</h2>

</div>
</div>`,
        css: `@import url('https://fonts.googleapis.com/css?family=Barlow');

body {
background: #310404 url(https://i.blogs.es/5c3040/5519580228_92fe8abae5_o/1366_2000.jpg) no-repeat center center fixed; 
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
font-family: 'Barlow', sans-serif;
}
.container {
width: 100%;
position: relative;
overflow: hidden;
}
a {
text-decoration: none;
}
h1.main, p.demos {
-webkit-animation-delay: 18s;
-moz-animation-delay: 18s;
-ms-animation-delay: 18s;
animation-delay: 18s;
}
.sp-container {
position: fixed;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
z-index: 0;
background: -webkit-radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
background: -moz-radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
background: -ms-radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
background: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
}
.sp-content {
position: absolute;
width: 100%;
height: 100%;
left: 0px;
top: 0px;
z-index: 1000;
}
.sp-container h2 {
position: absolute;
top: 50%;
line-height: 100px;
height: 90px;
margin-top: -50px;
font-size: 90px;
width: 100%;
text-align: center;
color: transparent;
-webkit-animation: blurFadeInOut 3s ease-in backwards;
-moz-animation: blurFadeInOut 3s ease-in backwards;
-ms-animation: blurFadeInOut 3s ease-in backwards;
animation: blurFadeInOut 3s ease-in backwards;
}
.sp-container h2.frame-1 {
-webkit-animation-delay: 0s;
-moz-animation-delay: 0s;
-ms-animation-delay: 0s;
animation-delay: 0s;
}
.sp-container h2.frame-2 {
-webkit-animation-delay: 3s;
-moz-animation-delay: 3s;
-ms-animation-delay: 3s;
animation-delay: 3s;
}
.sp-container h2.frame-3 {
-webkit-animation-delay: 6s;
-moz-animation-delay: 6s;
-ms-animation-delay: 6s;
animation-delay: 6s;
}
.sp-container h2.frame-4 {
font-size: 200px;
-webkit-animation-delay: 9s;
-moz-animation-delay: 9s;
-ms-animation-delay: 9s;
animation-delay: 9s;
}
.sp-container h2.frame-5 {
-webkit-animation: none;
-moz-animation: none;
-ms-animation: none;
animation: none;
color: transparent;
text-shadow: 0px 0px 1px #fff;
}
.sp-container h2.frame-5 span {
-webkit-animation: blurFadeIn 3s ease-in 12s backwards;
-moz-animation: blurFadeIn 1s ease-in 12s backwards;
-ms-animation: blurFadeIn 3s ease-in 12s backwards;
animation: blurFadeIn 3s ease-in 12s backwards;
color: transparent;
text-shadow: 0px 0px 1px #fff;
}
.sp-container h2.frame-5 span:nth-child(2) {
-webkit-animation-delay: 13s;
-moz-animation-delay: 13s;
-ms-animation-delay: 13s;
animation-delay: 13s;
}
.sp-container h2.frame-5 span:nth-child(3) {
-webkit-animation-delay: 14s;
-moz-animation-delay: 14s;
-ms-animation-delay: 14s;
animation-delay: 14s;
}
.sp-globe {
position: absolute;
width: 282px;
height: 273px;
left: 50%;
top: 50%;
margin: -137px 0 0 -141px;
background: transparent url(http://web-sonick.zz.mu/images/sl/globe.png) no-repeat top left;
-webkit-animation: fadeInBack 3.6s linear 14s backwards;
-moz-animation: fadeInBack 3.6s linear 14s backwards;
-ms-animation: fadeInBack 3.6s linear 14s backwards;
animation: fadeInBack 3.6s linear 14s backwards;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
filter: alpha(opacity=30);
opacity: 0.3;
-webkit-transform: scale(5);
-moz-transform: scale(5);
-o-transform: scale(5);
-ms-transform: scale(5);
transform: scale(5);
}

@-webkit-keyframes blurFadeInOut {
0% {
opacity: 0;
text-shadow: 0px 0px 40px #fff;
-webkit-transform: scale(1.3);
}
20%, 75% {
opacity: 1;
text-shadow: 0px 0px 1px #fff;
-webkit-transform: scale(1);
}
100% {
opacity: 0;
text-shadow: 0px 0px 50px #fff;
-webkit-transform: scale(0);
}
}
@-webkit-keyframes blurFadeIn {
0% {
opacity: 0;
text-shadow: 0px 0px 40px #fff;
-webkit-transform: scale(1.3);
}
50% {
opacity: 0.5;
text-shadow: 0px 0px 10px #fff;
-webkit-transform: scale(1.1);
}
100% {
opacity: 1;
text-shadow: 0px 0px 1px #fff;
-webkit-transform: scale(1);
}
}
@-webkit-keyframes fadeInBack {
0% {
opacity: 0;
-webkit-transform: scale(0);
}
50% {
opacity: 0.4;
-webkit-transform: scale(2);
}
100% {
opacity: 0.2;
-webkit-transform: scale(5);
}
}
@-webkit-keyframes fadeInRotate {
0% {
opacity: 0;
-webkit-transform: scale(0) rotate(360deg);
}
100% {
opacity: 1;
-webkit-transform: scale(1) rotate(0deg);
}
}
@-moz-keyframes blurFadeInOut {
0% {
opacity: 0;
text-shadow: 0px 0px 40px #fff;
-moz-transform: scale(1.3);
}
20%, 75% {
opacity: 1;
text-shadow: 0px 0px 1px #fff;
-moz-transform: scale(1);
}
100% {
opacity: 0;
text-shadow: 0px 0px 50px #fff;
-moz-transform: scale(0);
}
}
@-moz-keyframes blurFadeIn {
0% {
opacity: 0;
text-shadow: 0px 0px 40px #fff;
-moz-transform: scale(1.3);
}
100% {
opacity: 1;
text-shadow: 0px 0px 1px #fff;
-moz-transform: scale(1);
}
}
@-moz-keyframes fadeInBack {
0% {
opacity: 0;
-moz-transform: scale(0);
}
50% {
opacity: 0.4;
-moz-transform: scale(2);
}
100% {
opacity: 0.2;
-moz-transform: scale(5);
}
}
@-moz-keyframes fadeInRotate {
0% {
opacity: 0;
-moz-transform: scale(0) rotate(360deg);
}
100% {
opacity: 1;
-moz-transform: scale(1) rotate(0deg);
}
}

@keyframes blurFadeInOut {
0% {
opacity: 0;
text-shadow: 0px 0px 40px #fff;
transform: scale(1.3);
}
20%, 75% {
opacity: 1;
text-shadow: 0px 0px 1px #fff;
transform: scale(1);
}
100% {
opacity: 0;
text-shadow: 0px 0px 50px #fff;
transform: scale(0);
}
}
@keyframes blurFadeIn {
0% {
opacity: 0;
text-shadow: 0px 0px 40px #fff;
transform: scale(1.3);
}
50% {
opacity: 0.5;
text-shadow: 0px 0px 10px #fff;
transform: scale(1.1);
}
100% {
opacity: 1;
text-shadow: 0px 0px 1px #fff;
transform: scale(1);
}
}
@keyframes fadeInBack {
0% {
opacity: 0;
transform: scale(0);
}
50% {
opacity: 0.4;
transform: scale(2);
}
100% {
opacity: 0.2;
transform: scale(5);
}
}
@keyframes fadeInRotate {
0% {
opacity: 0;
transform: scale(0) rotate(360deg);
}
100% {
opacity: 1;
transform: scale(1) rotate(0deg);
}
}`,

    },
    example4: {
        html: `<header>
          <div class="content">
            <hgroup>
              <h1>LOGO</h1>
              <i>Slogan</i>
            </hgroup>
          </div>
          <div class="overlay"></div>
       </header>
       <section class="site">
         <nav>
           <a  href="avascript:void(0);">Page1</a>
           <a  href="avascript:void(0);">Page2</a>
           <a  href="avascript:void(0);">Page3</a>
           <a  href="avascript:void(0);">Page4</a>
           <a  href="avascript:void(0);">Page5</a>
         </nav>
         <blockquote>
            <img src="https://whatsup.es/wp-content/uploads/2020/09/people-is.jpg" align="left">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero non repellendus culpa architecto suscipit cupiditate dolor optio fugit beatae voluptatem ducimus, nisi animi earum impedit commodi velit sed nam aut!
”
         </blockquote>
       </section>`,
        css: `html, body { padding: 0; margin: 0; height: 100%; }
      body { font: 1em/1.5 "Lato", sans-serif; font-size: 1.3em; }
      header { height: 100vh; position: relative; overflow: hidden; background: url(https://images.alphacoders.com/435/435793.jpg) center no-repeat; background-size: cover; }
      header .content { position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1; }
      header hgroup { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: #fff; border: 5px solid #fff; padding: 0.5em 3em; background-color: rgba(0, 0, 0, 0.2); z-index: 2; }
      .overlay { position: absolute; top: 0; right: 0; left: 0; bottom: 0; background:#333 center no-repeat; background-size: cover; z-index: 0; opacity: 0; filter: blur(4px); }
      .site { padding: 10em 0; text-align: center; font-size: 0.8em; color: #444; position: relative; }
      .site nav { position: absolute; top: 0; left: 0; background: #222; width: 100%; }
      .site nav a { padding: 10px 30px; font-size: 1.3em; display: inline-block; color: #666; text-decoration: none; }
      .site nav a:hover { background: #333; color: #fff; }
      blockquote img { margin-right: 20px; float: left; }
      blockquote { text-align: left; font-style: italic; }`,
        js: `var $content = document.querySelector('header .content');
     var $blur = document.querySelector('header .overlay');
     var wHeight = window.innerHeight;

     window.addEventListener('resize', function(){
         wHeight = window.innerHeight;
     });

     function onScroll() {
         var currentScrollY = window.scrollY;
         var slowScroll = currentScrollY / 2;
         var blurScroll = currentScrollY * 2;
         var opaScroll = 1.4 - currentScrollY / 400;

         $content.style.transform = 'translateY(' + slowScroll + 'px)';
         $content.style.opacity = opaScroll;

         $blur.style.opacity = blurScroll / wHeight;
     }
     window.addEventListener('scroll', onScroll);`
    },

    example5: {
        html: `<div id="title" class="slide header">
<h1>CSS Parallax</h1>
</div>
<div id="slide1" class="slide">
<div class="title">
<h1>Slide 1</h1>
<p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
</div>
</div>

<div id="slide2" class="slide">
<div class="title">
<h1>Slide 2</h1>
<p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
</div>
<img src="https://picsum.photos/980/600">
<img src="https://picsum.photos/960/600"> 
</div>

<div id="slide3" class="slide">
<div class="title">
<h1>Slide 3</h1>
<p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
</div>
</div>

<div id="slide4" class="slide header">
<h1>FOOTER</h1>
</div>`,
        css: `@import url(https://fonts.googleapis.com/css?family=Nunito);

html {
height: 100%;
overflow: hidden;
}
body { 
margin:0;
padding:0;
perspective: 1px;
transform-style: preserve-3d;
height: 100%;
overflow-y: scroll;
overflow-x: hidden;
font-family: Nunito;
}
h1 {
font-size: 250%
}
p {
font-size: 140%;
line-height: 150%;
color: #333;
}
.slide {
position: relative;
padding: 25vh 10%;
min-height: 100vh;
width: 100vw;
box-sizing: border-box;
box-shadow: 0 -1px 10px rgba(0, 0, 0, .7);
transform-style: inherit;
}
img {
position: absolute;
top: 50%;
left: 35%;
width: 320px;
height: 240px;
transform: translateZ(.25px) scale(.75) translateX(-94%) translateY(-100%) rotate(2deg);
padding: 10px;
border-radius: 5px;
background: rgba(240,230,220, .7);
box-shadow: 0 0 8px rgba(0, 0, 0, .7);
}
img:last-of-type {
transform: translateZ(.4px) scale(.6) translateX(-104%) translateY(-40%) rotate(-5deg);
}
.slide:before {
content: "";
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
box-shadow: 0 0 8px 1px rgba(0, 0, 0, .7);
}
.title {
width: 50%;
padding: 5%;
border-radius: 5px;
background: rgba(240,230,220, .7);
box-shadow: 0 0 8px rgba(0, 0, 0, .7);
}
.slide:nth-child(2n) .title {
margin-left: 0;
margin-right: auto;
}
.slide:nth-child(2n+1) .title {
margin-left: auto;
margin-right: 0;
}
.slide, .slide:before {
background: 50% 50% / cover;  
}

.header {
text-align: center;
font-size: 175%;
color: #fff;
text-shadow: 0 2px 2px #000;
}

#title {
background-image: url("https://images.alphacoders.com/435/435793.jpg");
z-index:2;
}

#title h1 {
transform: translateZ(.25px) scale(.75);
transform-origin: 50% 100%;

}

#slide1:before {
background-image: url("https://whatsup.es/wp-content/uploads/2020/09/people-is.jpg");
transform: translateZ(-1px) scale(2);
}

#slide2 {
background-image: url("https://images.alphacoders.com/435/435793.jpg");
z-index:2;
}

#slide3:before {
background-image: url("https://whatsup.es/wp-content/uploads/2020/09/people-is.jpg");
transform: translateZ(-1px) scale(2);
}

#slide4 {
background: #222;
}`

    },
    example6: {
        html: `<div class="wrapper">
<div class="items">
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723483677/6_cyknpp.png)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723483676/3_mxnxwe.png)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723483677/7_pse522.png)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723484005/21_wbsty7.png)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723483677/5_tyr6bh.png)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723483676/2_zja2bq.png)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723483677/4_zwjtxg.png)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723483676/1_zlqnwl.jpg)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723483677/8_ucihr5.png)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723483676/16_epnmqm.png)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723483676/15_voqq0c.png)"></div>
<div class="item" tabindex="0" style="background-image: url(https://res.cloudinary.com/dyvotpxft/image/upload/v1723484270/Screenshot_23_8_nbzwdm.png)"></div>
</div>
</div>`,
        css: `* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

:root{
--index: calc(1vw + 1vh);
--transition: cubic-bezier(.1, .7, 0, 1);
}

body{
background-color: #141414;
}

.wrapper{
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
}

.items{
display: flex;
gap: 0.4rem;
perspective: calc(var(--index) * 35);
}

.item{
width: calc(var(--index) * 3);
height: calc(var(--index) * 12);
background-color: #222;
background-size: cover;
background-position: center;
cursor: pointer;
filter: grayscale(1) brightness(.5);
transition: transform 1.25s var(--transition), filter 3s var(--transition), width 1.25s var(--transition);
will-change: transform, filter, rotateY, width;
}

.item::before, .item::after{
content: '';
position: absolute;
height: 100%;
width: 20px;
right: calc(var(--index) * -1);
}

.item::after{
left: calc(var(--index) * -1);
}

.items .item:hover{
filter: inherit;
transform: translateZ(calc(var(--index) * 10));
}
.items .item:hover + *{
filter: inherit;
transform: translateZ(calc(var(--index) * 8.5)) rotateY(35deg);
z-index: -1;
}

.items .item:hover + * + *{
filter: inherit;
transform: translateZ(calc(var(--index) * 5.6)) rotateY(40deg);
z-index: -2;
}

.items .item:hover + * + * + *{
filter: inherit;
transform: translateZ(calc(var(--index) * 2.5)) rotateY(30deg);
z-index: -3;
}

.items .item:hover + * + * + * + *{
filter: inherit;
transform: translateZ(calc(var(--index) * .6)) rotateY(15deg);
z-index: -4;
}
.items .item:has( + :hover){
filter: inherit;
transform: translateZ(calc(var(--index) * 8.5)) rotateY(-35deg);
}

.items .item:has( + * + :hover){
filter: inherit;
transform: translateZ(calc(var(--index) * 5.6)) rotateY(-40deg);
}

.items .item:has( + * + * + :hover){
filter: inherit;
transform: translateZ(calc(var(--index) * 2.5)) rotateY(-30deg);
}

.items .item:has( + * + * + * + :hover){
filter: inherit;
transform: translateZ(calc(var(--index) * .6)) rotateY(-15deg);
}

.items .item:active, .items .item:focus {
width: 28vw;
filter: inherit;
z-index: 100;
transform: translateZ(calc(var(--index) * 10));
margin: 0 .45vw;
}`,

    },
    example7: {
        html: `<a  href="avascript:void(0);">
<div class="card">
<div class="wrapper">
<img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" class="cover-image" />
</div>
<img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" />
<img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" class="character" />
</div>
</a>

<a  href="avascript:void(0);">
<div class="card">
<div class="wrapper">
<img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" class="cover-image" />
</div>
<img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" class="title" />
<img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" class="character" />
</div>
</a>`,
        css: `:root {
--card-height: 300px;
--card-width: calc(var(--card-height) / 1.5);
}
* {
box-sizing: border-box;
}
body {
width: 100vw;
height: 100vh;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
background: #191c29;
}
.card {
width: var(--card-width);
height: var(--card-height);
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
padding: 0 36px;
perspective: 2500px;
margin: 0 50px;
}

.cover-image {
width: 100%;
height: 100%;
object-fit: cover;
}

.wrapper {
transition: all 0.5s;
position: absolute;
width: 100%;
z-index: -1;
}

.card:hover .wrapper {
transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
-webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
-moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}

.wrapper::before,
.wrapper::after {
content: "";
opacity: 0;
width: 100%;
height: 80px;
transition: all 0.5s;
position: absolute;
left: 0;
}
.wrapper::before {
top: 0;
height: 100%;
background-image: linear-gradient(
to top,
transparent 46%,
rgba(12, 13, 19, 0.5) 68%,
rgba(12, 13, 19) 97%
);
}
.wrapper::after {
bottom: 0;
opacity: 1;
background-image: linear-gradient(
to bottom,
transparent 46%,
rgba(12, 13, 19, 0.5) 68%,
rgba(12, 13, 19) 97%
);
}

.card:hover .wrapper::before,
.wrapper::after {
opacity: 1;
}

.card:hover .wrapper::after {
height: 120px;
}
.title {
width: 100%;
transition: transform 0.5s;
}
.card:hover .title {
transform: translate3d(0%, -50px, 100px);
}

.character {
width: 100%;
opacity: 0;
transition: all 0.5s;
position: absolute;
z-index: -1;
}

.card:hover .character {
opacity: 1;
transform: translate3d(0%, -30%, 100px);
}
`,
    },
    example8: {
        html: `
<div class="w">
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="i"></div>
<div class="h">
<h1>Enjoy the process</h1>
</div>
</div>
`,
        css: `@import url(https://fonts.googleapis.com/css?family=Open+Sans);
@import url(https://fonts.googleapis.com/css?family=Pacifico);
body {
background: #111b25;
font-family: "Open Sans", Helvetica, Arial, sans-serif;
color: #fff;
padding: 0;
margin: 0;
}

h1 {
font-family: "Pacifico";
}
a {
color: beige;
}

.w {
margin: 0 auto;
white-space: nowrap;
max-width: 1200px;
width: 100%;
height: 600px;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
overflow: hidden;
background: rgba(66, 66, 66, 0.5) url("https://i.blogs.es/5c3040/5519580228_92fe8abae5_o/1366_2000.jpg") repeat fixed;
background-position: 50% 100%;
background-size: cover;
position: relative;
z-index: 5;
font-size: 0;
}

.i {
width: 40px;
height: 100%;
display: inline-block;
position: relative;
z-index: 4;
padding: 2px;
transition: all 2s ease-in-out;
background: rgba(66, 66, 66, 0.5) url("https://cdn-3.expansion.mx/dims4/default/b33ee97/2147483647/strip/true/crop/1254x836+0+0/resize/1800x1200!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F4a%2F88%2Fc1e0e9eb4f308dbcb527648178e8%2Feu-busca-enfriar-la-tierra-reflejando-la-luz-del-sol.jpg") repeat fixed;
background-size: cover;
background-position: 50% 100%;
border-radius: 0%;
}
.i:hover {
transition: all 0s linear;
opacity: 0;
}

.h {
display: block;
position: absolute;
z-index: 2;
width: 100%;
text-align: center;
top: 35px;
font-size: 40px;
color: beige;
text-shadow: 0 5px 17px rgba(87, 87, 80, 0.85);
}
`,

    },
    example9: {
        html: `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

<ul>
<li><a><i class="fab fa-facebook-f icon"></i></a></li>
<li><a><i class="fab fa-twitter icon"></i></a></li>
<li><a><i class="fab fa-linkedin-in icon"></i></a></li>
<li><a><i class="fab fa-google-plus-g icon"></i></a></li>
</ul>
`,
        css: `body {
margin: 0;
padding:0;
background: #262626;
}

ul {
display: flex;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}

ul li {
list-style: none;
}

ul li a {
width: 80px;
height: 80px;
background-color: #fff;
text-align: center;
line-height: 80px;
font-size: 35px;
margin: 0 10px;
display: block;
border-radius: 50%;
position: relative;
overflow: hidden;
border: 3px solid #fff;
z-index: 1;
}

ul li a .icon {
position: relative;
color: #262626;
transition: .5s;
z-index: 3;
}

ul li a:hover .icon {
color: #fff;
transform: rotateY(360deg);
}

ul li a:before {
content: "";
position: absolute;
top: 100%;
left: 0;
width: 100%;
height: 100%;
background: #f00;
transition: .5s;
z-index: 2;
}

ul li a:hover:before {
top: 0;
}

ul li:nth-child(1) a:before{
background: #3b5999;
}

ul li:nth-child(2) a:before{
background: #55acee;
}

ul li:nth-child(3) a:before {
background: #0077b5;
}

ul li:nth-child(4) a:before {
background: #dd4b39;
}`,
        js: ``
    },
    example10: {
        html: `<h1>Menu Hover Effect</h1>
<div class="wrap_nav">
			<nav class="btn-1">
		<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-2">
		<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-3">
		<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-4">
		<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-5">
		<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-6">
	    <a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>


		<div class="wrap_nav">
			<nav class="btn-7">
		<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-8">
		<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-9">
		<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-10">
				<a href="javascript:void(0);"><span>HOME</span></a>
				<a href="javascript:void(0);"><span>WORK</span></a>
				<a href="javascript:void(0);"><span>CONTACT</span></a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-11">
		<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-12">
	    <a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-13">
			<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
			<nav class="btn-14">
		<a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
			</nav>
		</div>

		<div class="wrap_nav">
    <nav class="btn-15">
        <a href="javascript:void(0);" data-menu-name="HOME">HOME</a>
        <a href="javascript:void(0);" data-menu-name="WORK">WORK</a>
        <a href="javascript:void(0);" data-menu-name="CONTACT">CONTACT</a>
    </nav>
</div>`,
        css: `@charset "utf-8";
@import url('https://fonts.googleapis.com/css?family=Noto+Sans');

*{-webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box;}
html {overflow-y:scroll}
body {font-family:'Noto Sans', Helvetica, sans-serif; font-size:12px}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0; padding:0}
h1,h2,h3,h4,h5,h6 {font-weight:normal; font-size:100%}
input, select, textarea, button, label {font-size:100%; vertical-align:middle}
input, select {box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box}
fieldset, img, iframe {border:0 none}
img {vertical-align:middle}
textarea {resize:none}
th, td {text-align:left}
em, address {font-style:normal}
a {text-decoration:none}
a:hover,a:active,a:focus{text-decoration:none}
menu,li {list-style:none}
button {padding:0; margin:0; border:0; cursor:pointer; vertical-align:middle; background:none; font-family:'Noto Sans', Helvetica, sans-serif;}
caption {width:0; height:0; font-size:0; line-height:0; overflow:hidden; visibility:hidden}
hr {display:none}
i,em,address{font-style:normal}
label {cursor:pointer}
table {border-spacing:0; border-collapse:collapse}

/* layout */
body,html{width:100%; height:100%;}

body{padding:30px 0; background-color:#333;}
.wrap_nav{width:100%; margin-bottom:50px; height:50px; background-color: #653dca;}
h1{padding:0 0 50px; font-size:35px; color:#fff; text-align:center; letter-spacing:-1px;}
h2{max-width:800px; margin:0 auto; margin-bottom:10px; font-size:14px; color:#ddd; font-weight:normal;}

/* nav */
nav{max-width:800px; margin:0 auto; height:50px; line-height:50px; font-size:0;}
nav a{position:relative; display:inline-block; padding:0 30px; color:#fff; font-size:14px; letter-spacing:-.5px; text-decoration:none;}

nav a:hover{color:#74d8f6;}

.btn-1 a:after, 
.btn-2 a:after,
.btn-3 a:after,
.btn-4 a:before, .btn-4 a:after,
.btn-5 a:before, .btn-5 a:after,
.btn-6 a:before,
.btn-7 a:before,
.btn-8 a:before,
.btn-9 a:before, .btn-9 a:after,
.btn-10 a:before, .btn-10 a:after, .btn-10 a span:before, .btn-10 a span:after,
.btn-12 a:after,
.btn-14 a:after{content:""; display:block;}



.btn-1 a:after{position:absolute; left:0; bottom:0; width:0%; height:3px; background-color:#74d8f6; -webkit-transition:all .4s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .4s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);}
.btn-1 a:hover:after{width:100%;}


.btn-2 a:after{position:absolute; right:0; bottom:0; width:0%; height:3px; background-color:#74d8f6; -webkit-transition:all .4s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .4s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);}
.btn-2 a:hover:after{width:100%;}


.btn-3 a:after{position:absolute; left:50%; bottom:0; width:0%; height:3px; background-color:#74d8f6; transform:translateX( -50% ); -webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);}
.btn-3 a:hover:after{width:100%;}


.btn-4 a:after{position:absolute; left:50%; bottom:0; width:0%; height:3px; background-color:#74d8f6; transform:translateX( -50% ); -webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);}
.btn-4 a:before{position:absolute; left:50%; top:0; width:0%; height:3px; background-color:#74d8f6; transform:translateX( -50% ); -webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);}
.btn-4 a:hover:after{width:100%;}
.btn-4 a:hover:before{width:100%;}


.btn-5 a:after{position:absolute; left:0; top:50%; width:3px; height:0%; background-color:#74d8f6; transform:translateY( -50% ); -webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);}
.btn-5 a:before{position:absolute; right:0; top:50%; width:3px; height:0%; background-color:#74d8f6; transform:translateY( -50% ); -webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);}
.btn-5 a:hover:after{height:100%;}
.btn-5 a:hover:before{height:100%;}

.btn-6 a{overflow: hidden; z-index:2}
.btn-6 a:before{position:absolute; right:100%; top:0; width:100%; height:100%; background-color:#74d8f658; z-index:-1; opacity:0; -webkit-transition:all .2s ease-out; -o-transition:all .2s ease-out; transition:all .2s ease-out; border-right:2px solid #74d8f6;}
.btn-6 a:hover:before{opacity:1; right:0;}

.btn-7{overflow: hidden;}
.btn-7 a{z-index:2}
.btn-7 a:before{position:absolute; left:0; top:100%; width:100%; height:100%; background-color:#74d8f658; z-index:-1; opacity:0; -webkit-transition:all .2s ease-out; -o-transition:all .2s ease-out; transition:all .2s ease-out; border-top:2px solid #74d8f6;}
.btn-7 a:hover:before{opacity:1; top:0;}

.btn-8{overflow: hidden;}
.btn-8 a{z-index:2}
.btn-8 a:before{position:absolute; left:0; bottom:100%; width:100%; height:100%; background-color:#74d8f658; z-index:-1; opacity:0; -webkit-transition:all .2s ease-out; -o-transition:all .2s ease-out; transition:all .2s ease-out; border-bottom:2px solid #74d8f6;}
.btn-8 a:hover:before{opacity:1; bottom:0;}

.btn-9 a:after{position:absolute; left:50%; bottom:0; width:60%; height:3px; background-color:#74d8f6; transform:translateX( -50% ); -webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); opacity:0;}
.btn-9 a:before{position:absolute; left:50%; top:0; width:60%; height:3px; background-color:#74d8f6; transform:translateX( -50% ); -webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); opacity:0;}
.btn-9 a:hover:after{opacity:1; bottom:5px;}
.btn-9 a:hover:before{opacity:1; top:5px;}

.btn-10 a{padding:0;}
.btn-10 a span{display:block; padding:0 30px;}
.btn-10 a:before, .btn-10 a:after, .btn-10 a span:before, .btn-10 a span:after{position:absolute; background-color:#74d8f6;}
.btn-10 a:before{width:3px; height:0; left:0; bottom:0; -webkit-transition:all .1s .3s; -o-transition:all .1s .3s; transition:all .1s .3s;}
.btn-10 a:after{width:0; height:3px; left:0; top:0; -webkit-transition:all .1s .2s; -o-transition:all .1s .2s; transition:all .1s .2s;}
.btn-10 a span:before{width:3px; height:0; right:0; top:0; -webkit-transition:all .1s .1s; -o-transition:all .1s .1s; transition:all .1s .1s;}
.btn-10 a span:after{width:0; height:3px; right:0; bottom:0; -webkit-transition:all .1s; -o-transition:all .1s; transition:all .1s;}
.btn-10 a:hover:before{height:100%; -webkit-transition:all .1s; -o-transition:all .1s;	transition:all .1s;}
.btn-10 a:hover:after{width:100%; -webkit-transition:all .1s .1s; -o-transition:all .1s .1s; transition:all .1s .1s;}
.btn-10 a:hover span:before{height:100%; -webkit-transition:all .1s .2s; -o-transition:all .1s .2s; transition:all .1s .2s;}
.btn-10 a:hover span:after{width:100%;	-webkit-transition:all .1s .3s;	-o-transition:all .1s .3s; transition:all .1s .3s;}

.btn-11{position:relative; overflow:hidden;}
.btn-11 span.effect{position:absolute; left:0; bottom:0; width:0; height:3px; background-color:#74d8f6; -webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);}

.btn-12 a:after{position:absolute; left:50%; top:50%; width:0%; height:2px; background-color:#74d8f6; transform:translateX( -50% );
-webkit-transition:width .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
-o-transition:width .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
transition:width .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.btn-12 a.off:after{width:90%;}

.btn-13{position:relative;}
.btn-13 span.dot{width:7px; height:7px; position:absolute; left:0; bottom:0; transform:translateY( 50% ); background-color:#74d8f6; border-radius:50%; -webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); opacity:0;}

.btn-14 a{position:relative;}
.btn-14 a:after{width:100%; height:100%; position:absolute; left:0; top:0; border:0px solid #74d8f6; box-sizing:border-box;
	-webkit-transition:all .2s ease-in-out; -o-transition:all .2s ease-in-out; transition:all .2s ease-in-out; opacity:0;}
.btn-14 a:hover:after{border-width:5px; opacity:1;}

.btn-15{overflow: hidden;}
.btn-15 a{position:relative; -webkit-transition:all .4s cubic-bezier(0.68, -0.55, 0.265, 1.55); -o-transition:all .4s cubic-bezier(0.68, -0.55, 0.265, 1.55); transition:all .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);}
.btn-15 a:after{content:attr( data-menu-name ); display:block; width:100%; height:100%; position:absolute; left:0; top:0; text-align:center;
	-webkit-transform:translateY( -100% );
	-ms-transform:translateY( -100% );
	-o-transform:translateY( -100% );
	transform:translateY( -100% );
}
.btn-15 a:hover{
	-webkit-transform:translateY( 100% );
	-ms-transform:translateY( 100% );
	-o-transform:translateY( 100% );
	transform:translateY( 100% );
}
    `,
        js: `window.addEventListener('load', function(){
	var movingBar = new MovingBar('.btn-11');
	var delLineBar = new DelLineBar('.btn-12');
	var movingDot = new MovingDot('.btn-13');
});

function MovingBar( nav ){
	var $navMovingBar = document.querySelector( nav ),
		$btnMenu11 = $navMovingBar.querySelectorAll('a'),
		bar = document.createElement('span'),
		width, left;

	bar.classList.add('effect');
	$navMovingBar.appendChild( bar );

	for( var i=0, max=$btnMenu11.length; i<max; i++ ){
		$btnMenu11[i].addEventListener('mouseenter', function(){
			width = this.offsetWidth,
			left = this.offsetLeft;
			barMovingCurrentMenu( width, left );
		});
	}

	function barMovingCurrentMenu( width, left ) {
		bar.style.width = width + 'px';
		bar.style.left = left + 'px';
	}   
}

function DelLineBar( nav ){
	var $navDelLineBar = document.querySelector( nav ),
       $btnMenu12 = $navDelLineBar.querySelectorAll('a');

   for( var i=0, max=$btnMenu12.length; i<max; i++ ){
		$btnMenu12[i].addEventListener('mouseenter', function(){
			for( var j=0; j<$btnMenu12.length; j++ ){
				$btnMenu12[j].classList.remove('off');
				if( $btnMenu12[j] == this ) continue;
				$btnMenu12[j].classList.add('off');
			}
		});
	}

	$navDelLineBar.addEventListener('mouseleave', function(){
		for( var i=0, max=$btnMenu12.length; i<max; i++ ){
			if( !$btnMenu12[i].classList.contains('off') ) continue;
			$btnMenu12[i].classList.remove('off');
		}
	});
}

function MovingDot( nav ){
	var $navMovingDotBar = document.querySelector( nav ),
	 	 $btnMenu13 = $navMovingDotBar.querySelectorAll('a'),
		 bar2 = document.createElement('span'),
		 width2, left2;

	bar2.classList.add('dot');
	$navMovingDotBar.appendChild( bar2 );

	for( var i=0, max=$btnMenu13.length; i<max; i++ ){
		$btnMenu13[i].addEventListener('mouseenter', function(){
			width2 = this.offsetWidth,
			left2 = this.offsetLeft;
			barMovingCurrentMenu2( width2, left2 );
		});
	}

	function barMovingCurrentMenu2( width, left ) {
		bar2.style.left = left + ( width / 2 ) + 'px';
		bar2.style.opacity = 1;
	}
}`
    },
    example11: {
        html: ``,
        css: ``,
        js: ``
    },


};

// Manejar el clic en los encabezados del acordeón
var headers = document.querySelectorAll('.accordion-header');
headers.forEach(function (header) {
    header.addEventListener('click', function () {
        var content = this.nextElementSibling;

        // Cerrar todos los otros acordeones
        headers.forEach(function (h) {
            if (h !== header) {
                h.nextElementSibling.style.display = 'none';
            }
        });

        // Mostrar/Ocultar contenido
        content.style.display = content.style.display === 'block' ? 'none' : 'block';

        // Cargar el ejemplo seleccionado
        var selectedExample = this.getAttribute('data-example');
        cargarEjemplo(ejemplos[selectedExample]);
    });
});

// Función para cargar y mostrar el ejemplo
function cargarEjemplo(ejemplo) {
    var html = ejemplo.html;
    var css = `<style>${ejemplo.css}</style>`;
    var js = `<script>${ejemplo.js}<\/script>`;
    var iframe = document.getElementById('output');
    iframe.srcdoc = html + css + js;

}

// Cargar el primer ejemplo por defecto
cargarEjemplo(ejemplos.example1);

