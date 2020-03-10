import React from 'react'
//import {UncontrolledCarousel } from 'reactstrap'
import notes from '../images/notes2.jpeg'
import redsaree from '../images/redsaree.jpg'
import arm from '../images/arm-beads.jpg'
import grey from '../images/women-grey.jpg'
import costume from '../images/beautiful-bright.jpg'
import cosmetics from '../images/cosmetics.jpg'

function Stores(){
    return(
       
                <div >
                    <center>
                        <br/>
                        <h2>Our Stores Located at</h2>
                    <br/><br/>
                   
            <div className="row justify-content-md-center">
                <div >
                    <div className="card mb-3" style={{marginRight: 300 + 'px'}} > 
                    <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={grey} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Shringar Fancy Centre</h5>
                        <p className="card-text">
                                    No. 20, Opposite H.B. Samaja Sabhangana,
                                    HB Samaja Road,
                                    Gandhi Bazaar, Basavanagudi,
                                    Bengaluru-560004
                                    Ph: 26621889,26621879,9845692172
                                    Email: shringargroup@gmail.com</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className="card mb-3" style={{marginRight: 300 + 'px'}} > 
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={grey} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">New Shringar Fancy Centre</h5>
                            <p className="card-text">
                                    No.19, 9th Main Road,
                                    3rd Block Jayanagar,
                                    Bangalore 560011
                                    Ph: 26634568, 26645570,
                                    9845779954, 9845003497
                                    Email: shringargroup@gmail.com</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className="card mb-3" style={{marginRight: 300 + 'px'}} > 
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={grey} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Shringar Costumes</h5>
                            <p className="card-text">Shringar Costumes
                                    Ulsoor,
                                    Bengaluru-560004
                                    Ph: 26621889,26621879,9845692172
                                    Email: shringargroup@gmail.com</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </center>
            </div>

            //Map code in html
    //   <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
    //   <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
    //   <script>(function () {
    //    setting = {"height":540,"width":792,"zoom":17,"queryString":"New Shringar Fancy Centre | Imitation Jewellery | cosmetics shop | costume shop | rental jewellery |, Jayanagar East, Jaya Nagar 1st Block, Jayanagar, Bengaluru, Karnataka, India","place_id":"ChIJiS1WbpgVrjsRDFI7o_BYqT0","satellite":false,"centerCoord":[],"cid":"0x3da958f0a33b520c","lang":"en","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"164158"}
    //    d = document;
    //    s = d.createElement('script');
    //   s.src = 'https://1map.com/js/script-for-user.js?embed_id=164158';
    //   s.async = true;
    //   s.onload = function (e) {
    //     window.OneMap.initMap(setting)
    //   };
    //   var to = d.getElementsByTagName('script')[0];
    //   to.parentNode.insertBefore(s, to);
    // })();</script>
    // <a href="https://1map.com/map-embed?embed_id=164158">1 Map</a></div>
            
    )
}



export default Stores