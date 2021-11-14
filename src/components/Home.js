import"../css/home.css"
import React from"react";
import NavBar from "./navbar";
import { Appcontext } from "./context";
import { Link } from "react-router-dom";
import LogIn from "./loginpage";
// import Dates from "./searchDate";
function Home(){
    const{login} = React.useContext(Appcontext);
    return(
        <>
        <NavBar fixed = "fixed-top"/>
        <div className="imgDiv">
            <img className="wallpaper" src="./images/home1.jpg" alt="road" />
            {/* <div className Name="hovers"></div> */}
            <div className="sloganDiv">
                <p className="slg1">START YOUR DREAM ADVENTURE</p>
                <p className="slg2">Own Experiences not Bikes</p>
                <Link to="/book"><button type="button" className ="btn btn-info bkBtn">BOOK NOW</button>
                </Link>
                {/* <Dates/> */}
            </div>
        </div>
        <div className="heads"> 
            <p className="labels"> WHY CHOOSE US ?</p>
            <hr style={{marginBottom:"10px"}}/>  
        </div>
        <div className="container-fluid">
            <div className ="row whyRow">
                <div className ="col-lg-4 col-md-6 bootcol">
                    <div style={{textAlign:"center"}}>
                        <div  className="iconDivs"> 
                        <i className ="fas fa-map-marker-alt fa-5x ic1" style={{color:"red"}}></i>
                        </div>
                        <div>
                            <h5 style={{marginTop:"20px" , marginBottom:"12px"}}>No Riding Limits</h5>
                            <p className="service">Odometer Won't Scare You Anymore.</p>
                            <p className="service">No limits on the distance you travel</p>
                        </div>
                    </div>
                </div>
                <div className ="col-lg-4 col-md-6 bootcol">
                    <div style={{textAlign:"center"}}>
                        <div className ="iconDivs">
                        <i className ="fas fa-hard-hat fa-5x" style={{color:"black"}}></i>
                        </div>
                        <div>
                            <h5 style={{marginTop:"20px" , marginBottom:"12px"}}>Freebies</h5>
                            <p className ="service">Helmets Always, Sometimes More.</p>
                            <p className ="service">Other Necessary Safety Gears Available. </p>
                        </div>
                    </div>
                </div>
                <div className ="col-lg-4 col-md-6 bootcol">
                    <div style={{textAlign:"center"}}>
                        <div className ="iconDivs">
                        <i className ="fas fa-shield-alt fa-5x" style={{color:"green"}}></i>
                        </div>
                        <div>
                            <h5 style={{marginTop:"20px" ,  marginBottom:"12px"}}>Secure Payments</h5>
                            <p className ="service">Our Payment Partners are Industry Leaders.</p>
                            <p className ="service">So your Payment is Safe With us.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 bootcol">
                    <div style={{textAlign:"center"}}>
                        <div className ="iconDivs">
                        <i className ="fas fa-history fa-5x" style={{color:"deeppink"}}></i>
                        </div>
                        <div>
                            <h5 style={{marginTop:"20px" ,  marginBottom:"12px"}}>No Bullshit</h5>
                            <p className ="service">A Day Rent is simply for 24 hrs, We mean it.</p>
                            <p className ="service">No Other Extra Charges are Charged</p>
                        </div>
                    </div>
                </div>
                <div className ="col-lg-4 col-md-6 bootcol">
                    <div style={{textAlign:"center"}}>
                        <div className ="iconDivs">
                            <i className ="fas fa-user-check fa-5x" style={{color:"blue"}}></i>
                        </div>
                        <div>
                            <h5 style={{marginTop:"20px" , marginBottom:"12px" }}>Verified Dealers</h5>
                            <p className ="service">Every Single Dealer is Committed to Quality Service.</p>
                            <p className ="service">We Believe in Provideing Best Quality Service</p>
                        </div>
                    </div>
                </div>
                <div className ="col-lg-4 col-md-6 bootcol">
                    <div style={{textAlign:"center"}}>
                        <div className ="iconDivs">
                        <i className ="fas fa-hand-holding-usd fa-5x" style={{color:"yellowgreen"}}></i>
                        </div>
                        <div>
                            <h5 style={{marginTop:"20px" , marginBottom:"12px"}}>100% Moneyback</h5>
                            <p className ="service">Not Happy With Service, Take Your Money Back.</p>
                            <p className ="service">Your Money will Be Refunded Within 60 Min.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="heads2">
        <i className="fas fa-users fa-2x" style={{color:"#07eaf9"}}></i>
            <p className="labels"> CUSTOMER EXPERIENCES</p>
            <hr style={{marginBottom:"40px"}}/> 
        </div>

{/* customer reviews */}

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner slide">
    <div className="carousel-item active slideShow">
    <p className="comment" style={{marginBottom:"20px" , paddingTop:"50px"}}> " We had booked two bikes  The bikes were very well maintained and perfectly clean when they handed the key. 
    So no trouble with the bike at any place ..Which made the whole trip tension free. 
    Even the bike renting was so easy within 30 min all formalities were over All the staffs was were very cooperative. 
    I'd be happy to rent from them again and 
    I would recommend anybody who wants to rent a good bike "</p>
              <img src="./images/profile1.jpeg"  className="profile" alt=""/>
              <p style={{marginBottom:"0px"}}>Mahesh Patil</p>
    </div>
    <div className="carousel-item slideShow">
     
    <p className="comment" style={{marginBottom:"20px" , paddingTop:"50px"}}> " We had booked two bikes  The bikes were very well maintained and perfectly clean when they handed the key. 
    So no trouble with the bike at any place ..Which made the whole trip tension free. 
    Even the bike renting was so easy within 30 min all formalities were over All the staffs was were very cooperative. 
    I'd be happy to rent from them again and 
    I would recommend anybody who wants to rent a good bike "</p>
              <img src="./images/profile2.jpg"  className="profile" alt=""/>
              <p style={{marginBottom:"0px"}}>Preeti Gupta</p>


    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


{/* how it works */}
        <div className ="container-fluid" style={{textAlign:"center"}}>
        <i className="fas fa-cogs fa-2x" style={{marginTop:"20px" , color:"rgb(104, 103, 103)"}}></i>
         <div className="workDiv">
             <p className ="working" >HOW IT WORKS ?</p>
         </div>
         <hr/>
            <div className ="row services" >
                <div className ="col-lg-3 col-md-6 use">
                    <div>
                    <i className ="far fa-calendar-alt fa-4x" style={{marginBottom:"10px"}}></i>
                    <p>Set the date of your ride and then 
                      search for the bike that you want</p>
                    </div>
                </div>
                <div className ="col-lg-3 col-md-6 use">
                    <div>
                    <i className =" fas fa-motorcycle fa-4x" style={{marginBottom:"10px"}}></i>
                    <p>Choose out of various bikes that best 
                        suits the trip you’re about to take.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 use">
                    <div>
                    <i className =" fas fa-street-view fa-4x" style={{marginBottom:"10px"}}></i>
                    <p>Get suited up and head to the pick- up 
                        location to get your ride.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 use">
                    <div>
                    <i className ="fas fa-road fa-4x" style={{marginBottom:"10px"}}></i>
                    <p>Get ready to roll and have a nice 
                        time tripping!</p>
                    </div>
                </div>
            </div>
        </div>

{/* contact us div */}
        <div className="heads2">
        <i className="fas fa-headset fa-2x" style={{color:"yellowgreen"}}></i>
            <p className="labels"> CONTACT US</p>
            <hr style={{marginBottom:"40px"}}/> 
        </div>
        <div className="container-fluid" id="contactUsPage">
            <div className="row">
                <div className="col-lg-5">
                    <img src="./images/contactUs.jpg" alt="" style={{width:"100%"}}/>
                </div>
                <div className="col-lg-7 callDiv">
                    <div style={{border:"1px solid #e0dede" , borderRadius:"1.3rem"}}>
                    <div style={{textAlign:"center" ,  color:"red"}}>
                        <h1 style={{fontWeight:"bold" , paddingTop:"20px"}}>24 X 7 </h1>
                        <p style={{fontSize:"1.2rem" , color:"green" , fontWeight:"bold"}}>Service Available</p>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <p>If you have any doubt's , just mail us on <span style={{color:"blue"}}>onlineBike23@gmail.com</span></p>
                        <p>Have an issue or want to know about how things work? Let us know</p>
                        <p> Just ring us up! We would love to hear you out at</p>
                        <button className="callBtn">+91 - 8675489643</button>
                    </div>
                    <div className="social">
                    <a href="https://www.facebook.com" target="blank">
                    <i className="fab fa-facebook-square socialIcons fa-2x"></i></a>
                    <a href="https://www.twitter.com" target="blank">
                    <i className="fab fa-twitter-square socialIcons fa-2x"></i></a>
                    <a href="https://www.instagram.com" target="blank">
                    <i className="fab fa-instagram socialIcons fa-2x" style={{color:"rgb(223, 60, 187)"}}></i></a>
                    <a href="https://www.gmail.com" target="blank"><i className="fas fa-envelope socialIcons fa-2x" style={{color:"red"}}></i></a>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>

{/* about us */}
        <div className="footers">
            <div>
                <div className="lastTitles">
                <h2 style={{marginBottom:"0px"}}>ABOUT US</h2>
                <hr style={{width:"30%" , backgroundColor:"white" , marginBottom:"20px"}}/>
                </div>
               
                <p>
                Kolhapur is a wonderful city of roads, hills, and beautiful weather. Hill stations around the city make it more beautiful. 
                It is difficult to touch each part of the city with public transport. Here, we are ..!!
                </p>
                <p>
                We are Kolhapur's largest bike rental company. we provide all types of bikes for hourly renals, daily rentals. 
                We have famous pocket-friendly bike rental plans for the long term such as Weekly Bike Rentals and Monthly rentals.
                We are available across the Kolhapur city.Transport should not ruin your plan to travel to a wonderful Kolhapur city.
                you can book a hassle- free bike rental from our platforms such as Website, AndroidApp, and within just three clicks you are done..!! 
                We are happy to serve our bike rental community, 
                Travel communities.Any bulk demand of Bike Rental - We are there for you.call us on our number and we will book a bike for you.
                </p>
                <div  className="lastTitles" >
                <h2 style={{marginBottom:"0px" , marginTop:"40px"}}>OUR PARTNERS</h2>
                <hr style={{width:"30%" , backgroundColor:"white" , marginBottom:"20px"}}/>
                </div>
                <div className="container-fluid">
                    <div className="row" style={{alignItems:"center"}}>
                        <div className="col-lg-3 col-md-6" style={{marginBottom:"6px"}}>
                            <img src="./images/partner1.jpg" alt="" style={{width:"100%"}}/>
                        </div>
                        <div className="col-lg-3 col-md-6" style={{marginBottom:"6px"}}>
                            <img src="./images/partner2.jpg" alt="" style={{width:"100%"}}/>
                        </div>
                        <div className="col-lg-3 col-md-6" style={{marginBottom:"6px"}}>
                            <img src="./images/partner3.jpg" alt="" style={{width:"100%"}}/>
                        </div>
                        <div className="col-lg-3 col-md-6" style={{marginBottom:"6px"}}>
                            <img src="./images/partner4.jpg" alt="" style={{width:"100%"}}/>
                        </div>
                    </div>
                </div>
                <div className="footerSocial">
                    <a href="https://www.facebook.com" target="blank" className="ic">
                    <i className="fab fa-facebook-square socialIcons fa-2x ic"></i></a>
                    <a href="https://www.twitter.com" target="blank">
                    <i className="fab fa-twitter-square socialIcons fa-2x ic"></i></a>
                    <a href="https://www.instagram.com" target="blank">
                    <i className="fab fa-instagram socialIcons fa-2x ic"></i></a>
                    <a href="https://www.gmail.com" target="blank "><i className="fas fa-envelope socialIcons fa-2x ic"></i></a>
                    </div>
            </div>
        </div>    
        {
            login===true ? <LogIn/>:null
        }
        
        </>
    )
}
export default Home