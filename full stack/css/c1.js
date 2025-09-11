// CSS fULL SCREEN


// ! 1 Selectors, 2. pseudo-classes 
//? 1. Selectors 
//?  Css
// <style>
//         /* Element Selector */
//         div{
//             background-color: brown;
//         }
//         /* Class Selector */
//         .red{
//             background-color: aquamarine;
//         }
//         /* Id Selecter  */
//         #Rut{
//             background-color: rebeccapurple;
//         }
//         /* Child Selecter  */
//          div > p {
//             background-color: blue;
//             color: azure;
           
//          }

//          /* Universal Selector */

//          *{
//             margin: 0;
//             padding: 0;
//          }

//          /* pseudo Selector */


//     </style>

//?  Html 
//  <div id="Rut">Dolar Rutvik </div>
//       <!-- Ex -->
//        <div class="red">Moniya</div>

//        <a href="https://www.goole.com">Go to google</a>
//        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro provident accusantium, voluptates autem est doloribus deleniti eligendi molestias tenetur.</p></div>
// </body>


//?  2. pseudo-classes 

 // A pseudo-class is used to define a special state of an element 

//  1. :visited, :link 
//  2. :hover, :active
//  3. :first-child
//  4. :last-child
//  5. :nth-child 

//? pseudo elements 

// a css pseudo-element is used to style specified parts of an element 

//1. ::first-letter
//2. ::first-line
//3. ::before
//4. ::after


//    <style>
//         body{
//             font-family: Verdana, Geneva, Tahoma, sans-serif;
//             padding: 40px;
//         }
//         .btn{
//            color: aquamarine;
//            padding: 10px;
//         }
//         .btn:visited{
//             color: blue;
//         }
        
//         .btn:hover{
//             color: brown;
//             background-color: blueviolet;
//         }
//         .btn:active{
//             color: black;
//             background-color: white;
//             border: 4px solid green;
//         }

//         /* ul li:first-child{
//             background-color: violet;
//         }
//           ul li:last-child{
//             background-color: red;
//         } */

//         /* Nth Child */
//         /* an+b */

//         ul li:nth-child(2n + 1){
//             background-color:silver;            
//         }

//         h2::first-letter{
//             font-size: 3rem;
//         }
//         p::first-line{
//             background-color: burlywood;
//         }
//         ::selection{
//             color: greenyellow;
//             background-color: black;
//         }

//             /* before and after */
    
//         h3::before{
//           content: 'any';

//         }
//          h3::before{
//           content: '*';
            
//         }
//         .required::after{
//             content: '*';
//             color: red;
//         }
//         .important::after{
//             content: "important";
//             background-color: red;
//             color: white;
//             padding: 0.2rem;
//             font-size: 0.2rem;
            
//         }
//     </style>



    //     <h3>This is Main Content</h3>
    //     <h2>This a Good Day</h2>
    //      <form action="">
    //        <label class="required" for="name">Name</label>
    //        <input type="text">
    //   </form>
    //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod illo, assumenda reiciendis eaque perspiciatis minima voluptatum nulla aut doloribus asperiores amet mollitia iure nobis molestiae cupiditate, fuga sapiente maiores doloremque.</p>
    //     <a class="btn"href="#">Loarn More</a>

    //     <ul>
    //         <li class="important">item-1</li>
    //         <li>item-2</li>
    //         <li>item-3</li>
    //         <li>item-4</li>
    //         <li>item-5</li>
    //         <li>item-6</li>
    //         <li>item-7</li>
    //         <li>item-8</li>
    //         <li>item-9</li>
    //         <li>item-10</li>
    //     </ul>
 

//! 2. Box model Like
 
//<style>
  //  *{
    //    motion: 0px;
     //   padding: 0;
//     }
//      .box{
//          background-color: aqua;
//      }
//      .box1{
//           color: yellow;
//           padding:10PX;
//           margin: 5px;
//           border: 2px solid blueviolet;
//           box-sizing: border-box;
//           height: 200px;
//      }  
//      .box2{
//              color: brown; 
            
             
//           padding:10PX;
//           margin: 5px;
//           border: 2px solid black;
//           box-sizing: border-box;
//           height: 200px;   
//      }
//  </style>
//  <!-- <div class="box box1"> I am a box</div>
//     <div class="box box2"> I am a anther box</div> -->

//! 3. Positioning (absolute, relative, fixed)

/*
<style>
    /*Css  position: static(default), absolute, relative, fixed, sticky */
    // .containner{
    //     border: 2px solid black;
    //     background-color: khaki;
    //     height: 3444px;
    // }
    
    // .box{
    //     display: inline-block;
    //     border: 2px solid red;
    //     width: 150px;  
    //     height: 150px;
    //     margin: 2px;
    // }
    // #box3{
    //     /* Relatve to the elementrelative its normal positon and will leave a gap at its norml position */
    //     /* position: relative; */

    //      /* absolute to the elementrelative its the positon first parent  */
    //     /* position: absolute;
    //     top: 30px;
    //     left: 134px; */

    //     /* fixed: Positions the elementrelative to the browser window */
         
    //     /* position: fixed;
    //     right: 4px;
    //     bottom: 2px; */

    //     /* sticky */

    //     position: sticky;
    //     top: 3px;
        

//     }
//  </style>

//<div class="containner">
    //  <div class="box" id="box1">1</div>
    //  <div class="box" id="box2">2</div>
    //  <div class="box" id="box3">3</div>
   //  <div class="box" id="box4">4</div></div>

//! 4. Display types: block, inline, inline-block

//  <style>
//     *{margin: 0; padding: 0;}
//     body{
//         font-family: tahoma;
//         font-size: 32px;
//         padding: 100px 40px 0px 40px;
//     }
//     h1{
//         margin-bottom: 30px;
//         p{margin-top: 10px;}
 
//     }
//     p{
//         margin-top: 10px;
//         /* display: inline; */
//     }
//     p.one{
//         background-color: chocolate;   
//         /* display: none; */

//     }
//     p.Two{
//         background-color: aquamarine;
//     }
//     p.one span{
//         background-color: palegoldenrod;
//         /* display: inline-block; */
//         /* display: inline; */
//         /* display:block; */
//         /* display: list-item; */
//         /* display: inherit; */


//     }
//     span{
//         display: block;
//     }

//     p.one span.one{
//         display: initial;
//     }
//  </style>

{/* <p class="one">Lorem ipsum dolor sit, amet consectetur adipisicing <span> Ab </span> ad magni explicabo temporibus <span class="one"> nisi </span> quod nulla, eos consequuntur similique ut culpa nobis ullam hic deserunt? Commodi eaque culpa quam.</p>
<p class="Two">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellat magnam aliquam sint sit blanditiis, minima ut consequatur numquam, iure asperiores nostrum, necessitatibus quae esse enim excepturi at quod deleniti?</p> */}

//! 5. Flexbox

//  <style>
//        .container{
//              border: 2px solid red; 
//              display: flex;
//              height: 80vh;
//              /* justify-content: center; */
//              align-items: center;
//              /* flex-direction: column-reverse; */
//              /* flex-direction: column; */
//              flex-wrap: wrap;
//              /* align-content: flex-end; */
//              flex-flow: row wrap;
//              /* gap: 30px; */
//              row-gap: 30px;
//              column-gap: 20px;

         
             
//        }
//        .item{
//         flex-grow: 1;
//            height: 100px;
//            width: 100px;
//            border: 2px solid black;
//            /* margin: 4px; */

//            background-color: blueviolet;
//        }
//        .item1{
//         /* flex-grow: 2; */
//         /* flex-shrink: 2; */
//         align-self: flex-end;
//        }

//        .order-1{
//         order: 1;
        
//        }
//        .order-2{
//         order: 2;
//        }
//        .order-3{
//         order: 3;
//        }

//     </style>


{/* <div class="container">
      <div class="item1">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
</div> */}
//! 6. CSS Grid

//?-> The Grid container becomes by setting the display property to grid 
//! Grid Container Properties 
// 1. gap 
// 2. grid-template-columns
// 3. grid-template-rows 
// 4. justify-content
// 5. align-content 
// 6. align-items 

//! Grid Child Items  
//? -> The direct child elements of a grid container automatically becomes grid items 

// 1. justify-self 
// 2. align-self
// 3. grid-column 
// 4. grid-row 
// 5. grid-area  

//! Grid Template Area 

//? -> Named Grid items can be referred to by the grid-template-areas property of the grid container the grid-area propety can also be used to assign names to grid items.
//  <style>
//       *{
//          margin: 0;
//          padding: 0;
//          box-sizing: border-box;
//       }
//       .container{
//          height: 600px;
//          border: 2px solid red;
//          display: grid;
//          row-gap: 20px;
//          column-gap: 5px;
//          /* grid-template-columns: 2fr 1fr 1fr 1fr; */
//            /* grid-template-columns: repeat(auto-fill,100fr); */
//              /* grid-template-columns: 200px 200px; */
//              /* grid-template-columns: 200px 200px 200px; */
//              /* grid-row: 150px; */
//                /* justify-content: space-evenly; */
//                /* align-content: center; */
//                /* align-content: space-between; */
//                /* align-items: center; */
//                grid-template-areas:"hdr hdr hdr hdr"
//                                    "sdr main main main" 
//                                    "sdr main main mani"
//                                    "ftr ftr ftr ftr ";

//            }   
//       .box{
//          border: 2px solid green;
//          padding: 12px;
//       }
//       #box-5{
//          background-color: bisque;
//          /* justify-self:end;
//          align-self: end; */
//          /* grid-column-start:1; */
//          /* grid-column-end: 3; */
//          /* grid-column: 1 / 3; */
//         /* grid-column: 1 / span -1 ; 
//          grid-row: 1 / 3;
//          grid-area: 1 / 1 / 3 / 3; */
         

//       }
//       #box-1{
//          grid-area: hdr;
//       }
//       #box-2{
//          grid-area: sbr;
//       }
//        #box-3{
//          grid-area: main;
//       }
//        #box-4{
//          grid-area: ftr;
//       }
//    </style>

//  <div class="container">
//          <div class="box" id="box-1">box-1</div>
//          <div class="box" id="box-2">box-2</div>
//          <div class="box" id="box-3">box-3</div>
//          <div class="box" id="box-4">box-4</div>
//          <!-- <div class="box" id="box-5">box-5</div>
//          <div class="box" id="box-6">box-6</div>
//          <div class="box" id="box-7">box-7</div>
//          <div class="box" id="box-8">box-8</div>
//          <div class="box" id="box-9">box-9</div>
//          <div class="box" id="box-10">box-10</div> -->
//       </div>

//! 7 CSS Media Queries 









