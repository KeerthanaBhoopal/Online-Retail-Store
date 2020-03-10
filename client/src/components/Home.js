import React from 'react'
//import {UncontrolledCarousel } from 'reactstrap'
import notes from '../images/notes2.jpeg'
import redsaree from '../images/redsaree.jpg'
import arm from '../images/arm-beads.jpg'
import grey from '../images/women-grey.jpg'
import costume from '../images/beautiful-bright.jpg'
import cosmetics from '../images/cosmetics.jpg'

function Home(){
    return(
        <div className="col-md-12">
        <div className="card bg-dark text-black" style={{margin: 80 + 'px'}}>
            <img src={grey} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <center>
                    <br/><br/>
                    <strong><h1 className="card-title">Shringar</h1></strong>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </center>
               
            </div>
            </div>
            {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={redsaree} className="d-block w-100" alt={costume}/>
                    </div>
                    <div className="carousel-item">
                    <img src={costume} className="d-block w-100" alt={cosmetics}/>
                    </div>
                    <div className="carousel-item">
                    <img src={cosmetics} className="d-block w-100" alt={redsaree}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div> */}
        <center>
        <h2>Our Services  </h2>
        </center>
        <br/><br/>
        <div className="card-deck">
            
            <div className="card " style={{marginRight: 50 + 'px'}}>
                <img src={costume} className="card-img-top" alt={costume}/>
                <div className="card-body">
                <h5 className="card-title">Costume</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card" style={{marginRight: 50 + 'px'}}>
                <img src={redsaree} className="card-img-top" alt={redsaree}/>
                <div className="card-body">
                <h5 className="card-title"> jewellery</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card" style={{marginRight: 50 + 'px'}}>
                <img src={cosmetics} className="card-img-top" alt={cosmetics} />
                <div className="card-body">
                <h5 className="card-title">Cosmetics</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        <br/><br/>

            {/* <center>
            <h2>About Us  </h2>
            </center> */}
            {/* <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <center>
                        <h2>About Us  </h2>
                        </center>
                        </button>
                    </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                    We introduce ourselves as Costumes Designers and Suppliers of Costumes for various Drama and Dance activities for all School and College programs. We are situated in Bangalore, Karnataka, India. We are in this field for more than 17 years.
                    </div>
                    </div>
                </div>
               
                </div>
            <br/><br/> */}
            <div class="card bg-white text-black text-center p-3">
                <blockquote class="blockquote mb-0">
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p> */}
                <h2>About Us</h2>
                <p>Shringar Group is a company that has great expertise as costumes designers and suppliers of Costumes for various Drama and Dance activities for all School and College programs. We are situated in Bangalore which is the capital of Karnataka state, famous for its culture and tradition. We are in this field for more than 17 years and are considered to be a brand people can trust.

                Shringar Group operates in multiple areas of culture and one of them is Costumes. We sell and also give on rent costumes of all kinds for both kids and adults. It includes but is not limited to Fancy Dress Costumes, Bharatnatyam Dance Costumes, Retro Costumes, Radha Krishna Costume and many more.
                The other prominent area in which we operate is jewellery. We deal in jewellery of all kinds like earrings, necklaces, bangles and more. We do have jewellery products of both kinds – traditional and contemporary. Apart from jewellery there are a range of other products that you can find – idols, cosmetics, decoration rangolis, dance accessories, hair accessories and many more.

                We have three branches in Bangalore – Jayanagar , Basavangudi and Halasuru. So you can either look for product of your choice on our online store or walk in to any of our branches in Bangalore.</p>
                <footer class="blockquote-footer text-black">
                    <small>
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </div>
            
        </div>

       

    //     <div>
    //      <div classNameName="card mb-3" style={{marginRight: 300 + 'px'}} > 
    //     <div classNameName="row no-gutters">
    //       <div classNameName="col-md-4">
    //         <img src={arm} classNameName="card-img" alt="..." />
    //       </div>
    //       <div classNameName="col-md-8">
    //         <div classNameName="card-body">
    //           <h5 classNameName="card-title">Card title</h5>
    //           <p classNameName="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //           <p classNameName="card-text"><small classNameName="text-muted">Last updated 3 mins ago</small></p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //    <div classNameName="card mb-3" style={{marginRight: 300 + 'px'}} > 
    //    <div classNameName="row no-gutters">
    //      <div classNameName="col-md-4">
    //        <img src={grey} classNameName="card-img" alt="..." />
    //      </div>
    //      <div classNameName="col-md-8">
    //        <div classNameName="card-body">
    //          <h5 classNameName="card-title">Card title</h5>
    //          <p classNameName="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //          <p classNameName="card-text"><small classNameName="text-muted">Last updated 3 mins ago</small></p>
    //        </div>
    //      </div>
    //    </div>
    //  </div>
    //  </div>
        // <div classNameNameName="container-fluid">
        //   <center>
        //   <h1>Welcome to Notes-App</h1>
        //   <img src={notes} classNameName="rounded-pill" alt="Responsive"></img>
        //   </center>
        //   <div id="carouselExampleControls" classNameName="carousel slide" data-ride="carousel">
        //     <div classNameName="carousel-inner">
        //         <div classNameName="carousel-item active">
        //         <img src={grey} classNameName="d-block w-100" alt={grey} />
        //         </div>
        //         <div classNameName="carousel-item ">
        //         <img src={redsaree} classNameName="d-block w-100" alt={redsaree} />
        //         </div>
        //         <div classNameName="carousel-item ">
        //         <img src={arm} classNameName="d-block w-100" alt={arm} />
        //         </div>
        //     </div>
        //     <a classNameName="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        //         <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span classNameName="sr-only">Previous</span>
        //     </a>
        //     <a classNameName="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        //         <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span classNameName="sr-only">Next</span>
        //     </a>
        //     </div>


        // <div id="carouselExampleSlidesOnly" classNameName="carousel slide" data-ride="carousel">
        //     <div classNameName="carousel-inner">
        //         <div classNameName="carousel-item active">
        //             <img src={grey} classNameName="d-block w-100" alt={redsaree} />
        //         </div>
        //         <div classNameName="carousel-item">
        //         <img src={redsaree} classNameName="d-block w-100" alt={arm} />
        //         </div>
        //         <div classNameName="carousel-item">
        //         <img src={arm} classNameName="d-block w-100" alt={grey}/>
        //         </div>
        //     </div>
        //     </div>
            
        //     {/* <UncontrolledCarousel items={items} />; */}
        // {/* </div> */}
    )
}



// const items = [
//     {
//       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//       altText: 'Slide 1',
//       caption: 'Slide 1',
//       header: 'Notes-app',
//       key: '1'
//     },
//     {
//       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//       altText: 'Slide 2',
//       caption: 'Slide 2',
//       header: 'Notes-app',
//       key: '2'
//     },
//     {
//       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//       altText: 'Slide 3',
//       caption: 'Slide 3',
//       header: 'Notes-app',
//       key: '3'
//     }
//   ]

// function Home(){
//     return(
//         <div classNameNameName="container-fluid">
//           <center>
//           <h1>Welcome to Notes-App</h1>
//           <img src={notes} classNameName="rounded-pill" alt="Responsive"></img>
//           </center>
         
            
//             {/* <UncontrolledCarousel items={items} />; */}
//         </div>
//     )
// }




export default Home