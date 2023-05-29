import img from '../../assets/images/intro-office.jpg';
import services1 from '../../assets/images/services-1.jpg'
import services2 from '../../assets/images/services-2.jpg'
import services3 from '../../assets/images/services-3.jpg'

export const Landing = () => {
    return(
        <>
            <header id="header" class="header">
                <div class="header-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="text-container">
                                    <h1>TRAVEL <span id="js-rotating">ANYWHERE, ANYTIME, CHEAP</span></h1>
                                    <p class="p-heading p-large">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error distinctio dicta laudantium ut reiciendis nulla vel perferendis, a in ducimus?</p>
                                    <a class="btn-solid-lg page-scroll" href="#intro">DISCOVER</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </header>

            <div id="intro" class="basic-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="text-container">
                        <div class="section-title">INTRO</div>
                        <h2>We Offer Some Of The Best Travel Agency Services In Town</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat asperiores illum nesciunt sapiente rerum?</p>
                        <p class="testimonial-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam laboriosam quod error adipisci officiis rerum necessitatibus natus quas voluptatem."</p>
                        <div class="testimonial-author">Beksultan Hacker - CEO</div>
                    </div>
                </div> 
                <div class="col-lg-7">
                    <div class="image-container">
                        <img class="img-fluid" src={img} alt="alternative" />
                    </div>
                </div> 
            </div> 
        </div> 
            </div>

            <div class="cards-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <span class="fa-stack">
                                    <span class="hexagon"></span>
                                    <i class="fas fa-binoculars fa-stack-1x"></i>
                                </span>
                                <div class="card-body">
                                    <h4 class="card-title">Detailed Research</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti amet expedita?</p>
                                </div>
                            </div>

                            <div class="card">
                                <span class="fa-stack">
                                    <span class="hexagon"></span>
                                    <i class="fas fa-list-alt fa-stack-1x"></i>
                                </span>
                                <div class="card-body">
                                    <h4 class="card-title">Professional Planning</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, distinctio.</p>
                                </div>
                            </div>

                            <div class="card">
                                <span class="fa-stack">
                                    <span class="hexagon"></span>
                                    <i class="fas fa-chart-pie fa-stack-1x"></i>
                                </span>
                                <div class="card-body">
                                    <h4 class="card-title">Execution & Evaluation</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis neque voluptas, corporis exercitationem dolores sit!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 
            </div>

            <div id="services" class="cards-2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">SERVICES</div>
                            <h2>Choose The Service Package<br /> That Suits Your Needs</h2>
                        </div> 
                    </div> 
                    <div class="row">
                        <div class="col-lg-12 d-flex justify-content-between">
                            <div class="card">
                                <div class="card-image">
                                    <img class="img-fluid" src={services1} alt="alternative" />
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">Off The Ground Off The Ground</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos adipisci dolor.</p>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <i class="fas fa-square"></i>
                                            <div class="media-body d-inline">Tour planning</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-square"></i>
                                            <div class="media-body d-inline">Hotel pricing</div>
                                        </li>
                                    </ul>
                                    <p class="price">Starting at <span>$199</span></p>
                                </div>
                                <div class="button-container">
                                    <a class="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                                </div> 
                            </div>
 
                            <div class="card">
                                <div class="card-image">
                                    <img class="img-fluid" src={services2} alt="alternative" />
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">Pro version</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas rem laudantium quidem?</p>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <i class="fas fa-square"></i>
                                            <div class="media-body d-inline">Advanced planning</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-square"></i>
                                            <div class="media-body d-inline">VIP tour</div>
                                        </li>
                                    </ul>
                                    <p class="price">Starting at <span>$299</span></p>
                                </div>
                                <div class="button-container">
                                    <a class="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                                </div> 
                            </div>

                            <div class="card">
                                <div class="card-image">
                                    <img class="img-fluid" src={services3} alt="alternative" />
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">Super plan</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque optio voluptate deserunt corporis beatae!</p>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <i class="fas fa-square"></i>
                                            <div class="media-body d-inline">Maintaining everyday plan</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-square"></i>
                                            <div class="media-body d-inline">The best tours</div>
                                        </li>
                                    </ul>
                                    <p class="price">Starting at <span>$299</span></p>
                                </div>
                                <div class="button-container">
                                    <a class="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
                                </div> 
                            </div>

                        </div> 
                    </div> 
                </div> 
            </div>

            <div id="details" class="accordion">
		<div class="area-1">
		</div><div class="area-2">
            
            
            <div class="accordion-container" id="accordionOne">
                <h2>Spend Great time traveling with us</h2>
                <div class="item">
                    <div id="headingOne">
                        <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <span class="circle-numbering">1</span><span class="accordion-title">How can we help you travel for pleasure?</span>
                        </span>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionOne">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, veniam?]
                        </div>
                    </div>
                </div> 
            
                <div class="item">
                    <div id="headingTwo">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                            <span class="circle-numbering">2</span><span class="accordion-title">We can make you unforgetable journey</span>
                        </span>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionOne">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eaque ratione officiis corrupti saepe!
                        </div>
                    </div>
                </div> 
            
                <div class="item">
                    <div id="headingThree">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                            <span class="circle-numbering">3</span><span class="accordion-title">Online and oofline activities</span>
                        </span>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionOne">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas debitis dicta dolorem mollitia iste nulla vitae.
                        </div>
                    </div>
                </div> 
            </div> 
            

		</div> 
            </div>

            <div class="tabs">
                <div class="area-1">
                    <div class="tabs-container">
                        
                        
                        <ul class="nav nav-tabs" id="ariaTabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i class="fas fa-th"></i> Personal</a>
                            </li>
                        </ul>
                        
                        
                        
                        <div class="tab-content" id="ariaTabsContent">

                            
                            <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                <h4>Travel Services For Singles</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aliquid! <a class="green page-scroll" href="#services">Services</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, totam?</p>
                                
                                
                                <div class="progress-container">
                                    <div class="title">Memories 100%</div>
                                    <div class="progress">
                                        <div class="progress-bar first" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="title">Chep 76%</div>
                                    <div class="progress">
                                        <div class="progress-bar second" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="title">Greate time 90%</div>
                                    <div class="progress">
                                        <div class="progress-bar third" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div> 
                                
                                
                            </div>  
                            

                            
                            <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                <ul class="list-unstyled li-space-lg first">
                                    <li class="media">
                                        <div class="media-bullet">1</div>
                                        <div class="media-body"><strong>High quality</strong> is on top of our list when it comes to the way we deliver the services</div>
                                    </li>
                                    <li class="media">
                                        <div class="media-bullet">2</div>
                                        <div class="media-body"><strong>Maximum impact</strong> is what we look for in our actions</div>
                                    </li>
                                    <li class="media">
                                        <div class="media-bullet">3</div>
                                        <div class="media-body"><strong>Quality standards</strong> are important but meant to be exceeded</div>
                                    </li>
                                </ul>
                                <ul class="list-unstyled li-space-lg last">
                                    <li class="media">
                                        <div class="media-bullet">4</div>
                                        <div class="media-body"><strong>We're always looking</strong> for industry leaders to help them win their market position</div>
                                    </li>
                                    <li class="media">
                                        <div class="media-bullet">5</div>
                                        <div class="media-body"><strong>Evaluation</strong> is a key aspect of this business and important</div>
                                    </li>
                                    <li class="media">
                                        <div class="media-bullet">6</div>
                                        <div class="media-body"><strong>Ethic</strong> procedures ar alwasy at the base of everything we do</div>
                                    </li>
                                </ul>
                            </div> 
                            

                            
                            <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                <p><strong>We strive to achieve</strong> 100% customer satisfaction for both types of customers: hiring companies and job seekers. Types of customers: <a class="green" href="#your-link">with huge potential</a></p>
                                <p><strong>Our goal is to help</strong> your company achieve its full potential and establish long term stability for <a class="green" href="#your-link">the stakeholders</a></p>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">It's easy to get a quotation, just call our office anytime</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">We'll get back to you with an initial estimate soon</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Get ready to see results even after only 30 days</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Ask for a quote and start improving your business</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body">Just fill out the form and we'll call you right away</div>
                                    </li>
                                </ul>
                            </div> 
                            

                        </div> 
                        

                    </div> 
                </div>
            </div>

            <script src="../../assets/js/jquery.min.js"></script> 
            <script src="../../assets/js/swiper.min.js"></script> 
            <script src="../../assets/js/jquery.magnific-popup.js"></script> 
            <script src="../../assets/js/morphext.min.js"></script> 
            <script src="../../assets/js/isotope.pkgd.min.js"></script> 
            <script src="../../assets/js/validator.min.js"></script> 
            <script src="../../assets/js/scripts.js"></script>
        </>
    )
}