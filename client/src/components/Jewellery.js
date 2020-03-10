import React from 'react'
//import {UncontrolledCarousel } from 'reactstrap'

import n1 from '../images/necklace1.jpg'
import n2 from '../images/necklace2.jpg'
import n3 from '../images/necklace3.jpg'
import n4 from '../images/necklace4.jpg'
import n5 from '../images/necklace5.jpg'
import b1 from '../images/bangle1.jpg'
import b2 from '../images/bangle2.jpg'
import b3 from '../images/bangle3.jpg'
import e1 from '../images/earing1.jpg'
import e2 from '../images/earing2.jpg'
import e3 from '../images/earing3.jpg'



import redsaree from '../images/redsaree.jpg'
import arm from '../images/arm-beads.jpg'
import grey from '../images/women-grey.jpg'
import costume from '../images/beautiful-bright.jpg'
import cosmetics from '../images/cosmetics.jpg'
const neck=[n1,n2,n3,n4,n5]
const bangle=[b1,b2,b3]
function Jewellery(){
    
    return (
    //     <div > 
    //         {neck.map((n,i)=>{
    //         return   <div>
    //                 <br/><br/>
    //                 {/* <div className="row"> */}
    //                     {/* <div className="col-md-6"> */}
    //                     <div class="card-deck">
                        
    //                     <div class="card " style={{marginRight: 800 + 'px'}}>
    //                         <img src={n} class="card-img-top" alt={arm}/>
    //                         <div class="card-body">
    //                         <h5 class="card-title">Bangles</h5>
    //                         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //                         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    //                         </div>
    //                     </div>
    //                     </div>
    //                     </div>
    //                 {/* </div> */}
                   
    //                     // </div>
    //         })}
            

    //         {bangle.map((n,i)=>{
    //             return   <div>
    //                      <br/><br/>
    //                      <div className="row">
    //                         <div className="col-sm-6">
    //                         <div class="card-deck">
                             
    //                          <div class="card " style={{marginRight: 800 + 'px'}}>
    //                              <img src={n} class="card-img-top" alt={arm}/>
    //                              <div class="card-body">
    //                              <h5 class="card-title">Bangles</h5>
    //                              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    //                              </div>
    //                          </div>
    //                          </div>
    //                         </div>
    //                      </div>
                         
    //                          </div>
    //                 })}

    //     </div>
        
                
        
    // )

            <div>
                 <br/><br/>
                 <center> <h2>Necklace</h2> </center>
                 <hr/>
                 <br/><br/>
        <div class="card-deck col-md-12">
            
            <div class="card " style={{marginRight: 50 + 'px',width: 18}}>
                <img src={n1} class="card-img-top" alt={arm}/>
                <div class="card-body">
                <h5 class="card-title">Bangles</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card" style={{marginRight: 50 + 'px'}}>
                <img src={n2} class="card-img-top" alt={redsaree}/>
                <div class="card-body">
                <h5 class="card-title">Necklace</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card" style={{marginRight: 50 + 'px'}}>
                <img src={n3} class="card-img-top" alt={cosmetics} />
                <div class="card-body">
                <h5 class="card-title">Necklace</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            {/* <div class="card" style={{marginRight: 50 + 'px'}}>
                <img src={n4} class="card-img-top" alt={cosmetics} />
                <div class="card-body">
                <h5 class="card-title">Necklace</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div> */}
        </div>
        
        <br/><br/>
            
            
            <center> <h2>Bangles</h2> </center>
            <hr/>
            <br/><br/>
            <div class="card-deck col-md-12">
                
                    <div class="card " style={{marginRight: 50 + 'px'}}>
                        <img src={n5} class="card-img-top" alt={arm}/>
                        <div class="card-body">
                            <h5 class="card-title">Bangles</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card" style={{marginRight: 50 + 'px'}}>
                        <img src={b1} class="card-img-top" alt={redsaree}/>
                        <div class="card-body">
                            <h5 class="card-title">Bangles</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card" style={{marginRight: 50 + 'px'}}>
                        <img src={b2} class="card-img-top" alt={cosmetics} />
                        <div class="card-body">
                            <h5 class="card-title">Bangles</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    {/* <div class="card" style={{marginRight: 50 + 'px'}}>
                        <img src={b3} class="card-img-top" alt={cosmetics} />
                        <div class="card-body">
                            <h5 class="card-title">Bangles</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div> */}
                </div>

                <br/><br/>
            
            
            <center> <h2>Earings</h2> </center>
            <hr/>
            <br/><br/>
            <div class="card-deck col-md-12">
                
                    <div class="card " style={{marginRight: 50 + 'px',width: 18}}>
                        <img src={e1} class="card-img-top" alt={arm}/>
                        <div class="card-body">
                            <h5 class="card-title">Earings</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card " style={{marginRight: 50 + 'px',width: 18}}>
                        <img src={e2} class="card-img-top" alt={arm}/>
                        <div class="card-body">
                            <h5 class="card-title">Earings</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card " style={{marginRight: 50 + 'px',width: 18}}>
                        <img src={e3} class="card-img-top" alt={arm}/>
                        <div class="card-body">
                            <h5 class="card-title">Earings</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
            </div>
        </div>
    )
     

    
}


export default Jewellery