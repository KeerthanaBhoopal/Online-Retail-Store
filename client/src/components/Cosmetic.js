import React from 'react'
//import {UncontrolledCarousel } from 'reactstrap'
import notes from '../images/notes2.jpeg'
import redsaree from '../images/redsaree.jpg'
import arm from '../images/arm-beads.jpg'
import grey from '../images/women-grey.jpg'
import costume from '../images/beautiful-bright.jpg'
import cosmetics from '../images/cosmetics.jpg'

function Cosmetics(){
    return(

       
     
            <div>
                 <br/><br/>
        <div class="card-deck">
            
            <div class="card " style={{marginRight: 50 + 'px'}}>
                <img src={costume} class="card-img-top" alt={costume}/>
                <div class="card-body">
                <h5 class="card-title">Costume</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card" style={{marginRight: 50 + 'px'}}>
                <img src={redsaree} class="card-img-top" alt={redsaree}/>
                <div class="card-body">
                <h5 class="card-title"> jewellery</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card" style={{marginRight: 50 + 'px'}}>
                <img src={cosmetics} class="card-img-top" alt={cosmetics} />
                <div class="card-body">
                <h5 class="card-title">Cosmetics</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        </div>

     

    )
}





// function Home(){
//     return(
//         <div classNameName="container-fluid">
//           <center>
//           <h1>Welcome to Notes-App</h1>
//           <img src={notes} className="rounded-pill" alt="Responsive"></img>
//           </center>
         
            
//             {/* <UncontrolledCarousel items={items} />; */}
//         </div>
//     )
// }




export default Cosmetics