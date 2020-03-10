import React from 'react'
//import {UncontrolledCarousel } from 'reactstrap'

import f1 from '../images/fruit1.jpg'
import f2 from '../images/fruit2.jpg'
import f3 from '../images/fruit3.jpg'
import c1 from '../images/costume1.jpg'
import c2 from '../images/costume2.jpg'
import c3 from '../images/costume3.jpg'


function Costume(){
    return(

       
     
            <div>
                <br/><br/>
                <center><h2>Animals Costume</h2></center>
                <hr/>
                 <br/><br/>
        <div class="card-deck col-md-12">
            
            <div class="card " style={{marginRight: 50 + 'px'}}>
                <img src={c1} class="card-img-top" alt={c1}/>
                <div class="card-body">
                <h5 class="card-title">Tiger</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card" style={{marginRight: 50 + 'px'}}>
                <img src={c2} class="card-img-top" alt={c2}/>
                <div class="card-body">
                <h5 class="card-title"> Mickey mouse</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card" style={{marginRight: 50 + 'px'}}>
                <img src={c3} class="card-img-top" alt={c3} />
                <div class="card-body">
                <h5 class="card-title">Cow</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>

        <br/><br/>
                <center><h2>Fruits & Vegetables Costume</h2></center>
                <hr/>
                <br/><br/>
        <div class="card-deck col-md-12">
            
            <div class="card " style={{marginRight: 50 + 'px'}}>
                <img src={f1} class="card-img-top" alt={c1}/>
                <div class="card-body">
                <h5 class="card-title">Strawberry</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card" style={{marginRight: 50 + 'px'}}>
                <img src={f2} class="card-img-top" alt={c2}/>
                <div class="card-body">
                <h5 class="card-title">Carrot</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card" style={{marginRight: 50 + 'px'}}>
                <img src={f3} class="card-img-top" alt={c3} />
                <div class="card-body">
                <h5 class="card-title">Mango</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        </div>

     

    )
}




export default Costume