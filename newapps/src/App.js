import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

        <section id="Home">
            <nav>
                <div className="logo">
                    <img src="../NewAssests/logo.png"/>
                </div>
    
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Menu">Menu</a></li>
                    <li><a href="#Gallery">Gallery</a></li>
                    <li><a href="#Review">Review</a></li>
                    <li><a href="#Order">Order</a></li>
                </ul>
    
                <div className="icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
    
            </nav>
    
            <div className="main">
    
                <div className="men_text">
                    <h1>Get Fresh<span>Food</span><br/>In A Easy Way</h1>
                </div>
    
                <div className="main_image">
                    <img src="../NewAssests/main_img.png"/>
                </div>
    
            </div>
    
            <p>
            Welcome to our main food page, where culinary delights and adventures await! As you navigate through our site, you'll discover a treasure trove of mouthwatering recipes and insightful content designed to elevate your culinary experience.
            </p>
    
            <div className="main_btn">
                <a href="#">Order Now</a>
                <i className="fa-solid fa-angle-right"></i>
            </div>
    
        </section>
    
    
    
         
    
        <div className="about" id="About">
            <div className="about_main">
    
                <div className="image">
                    <img src="../NewAssests/Food-Plate.png"/>
                </div>
    
                <div className="about_text">
                    <h1><span>About</span>Us</h1>
                    <h3>Why Choose us?</h3>
                    <p>
                    Cooking should be an accessible pleasure for all, and that's why our recipes are crafted with clarity and simplicity. Whether you're following a recipe for the first time or looking for fresh inspiration, our user-friendly instructions, tips, and techniques empower you to navigate the kitchen with confidence.
                    Behind every dish is a team of passionate food enthusiasts at FOOD. We don't just share recipes we share our love for the art of cooking. Our team is dedicated to curating a collection that reflects our genuine appreciation for diverse flavors, culinary traditions, and the joy that food brings to our lives.
                    </p>
                </div>
    
            </div>
    
            <a href="#" className="about_btn">Order Now</a>
    
        </div>
    
    
    
      
    
        <div className="menu" id="Menu">
            <h1>Our<span>Menu</span></h1>
    
            <div className="menu_box">
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/buger.jpg"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Burger</h2>
                        <p>
                        Bite into joy with the burger—simple, satisfying, and a timeless delight. 
                        </p>
                        <h3>$20.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
                
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/pasta.jpg"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Pasta</h2>
                        <p>
                        Culinary comfort, one forkful at a time, Simple elegance on your plate.
                        </p>
                        <h3>$30.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
    
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/lasagna.webp"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Lasagna</h2>
                        <p>
                        Layers of joy on a plate, where every bite tells a savory story.
                        </p>
                        <h3>$35.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
    
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/chocolate_Drink.jpg"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2> Chocolate Drink</h2>
                        <p>
                        Sip on bliss with every chocolaty drop—a liquid treat for your senses.
                        </p>
                        <h3>$10.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
    
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/pizza.jpg"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Pizza</h2>
                        <p>
                        A slice of happiness topped with endless possibilities—a taste adventure in every bite. 
                        </p>
                        <h3>$50.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
    
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/Hot_dog.jpg"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Hot Dog</h2>
                        <p>
                        A handheld delight that never disappoints—simple, tasty, and oh-so-satisfying.
                        </p>
                        <h3>$60.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
    
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/juse.jpg"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Juice</h2>
                        <p>
                        Sip on freshness, a liquid burst of flavor that refreshes with every drop.
                        </p>
                        <h3>$30.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
    
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/biryani.webp"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Biryani</h2>
                        <p>
                        A pot of aromatic perfection, where each spoonful is a journey through spices and delight.
                        </p>
                        <h3>$90.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
    
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/chocolate.jpg"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Chocolate</h2>
                        <p>
                        A sweet symphony for your taste buds, where each bite is a moment of pure delight.
                        </p>
                        <h3>$10.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
    
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/ice_cream.jpg"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Ice Cream</h2>
                        <p>
                        Creamy indulgence in every scoop, a frozen treat that turns moments into celebrations.
                        </p>
                        <h3>$20.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
    
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/Spanchi.jpg"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Cup Cake</h2>
                        <p>
                        A miniature delight that packs big joy—a sweet sensation in every bite.
                        </p>
                        <h3>$25.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
    
                <div className="menu_card">
    
                    <div className="menu_image">
                        <img src="../NewAssests/sandwich.jpg"/>
                    </div>
    
                    <div className="small_card">
                        <i className="fa-solid fa-heart"></i>
                    </div>
    
                    <div className="menu_info">
                        <h2>Sandwich</h2>
                        <p>
                        A handheld masterpiece, where layers of flavors come together in a portable feast.
                        </p>
                        <h3>$50.00</h3>
                        <div className="menu_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <a href="#" className="menu_btn">Order Now</a>
                    </div>
    
                </div> 
                
            </div>
    
        </div>
    
    
    
    
        
    
        <div className="gallery" id="Gallery">
            <h1>Our<span>Gallery</span></h1>
    
            <div className="gallery_image_box">
                <div className="gallery_image">
                    <img src="../NewAssests/gallery_1.jpg"/>
    
                    <h3>Sandwich</h3>
                    <p>
                    A handheld masterpiece, where layers of flavors come together in a portable feast. 
                    </p>
                    <a href="#" className="gallery_btn">Order Now</a>
                </div>
    
                <div className="gallery_image">
                    <img src="../NewAssests/gallery_2.jpg"/>
    
                    <h3>Cup Cake-Vanilla</h3>
                    <p>
                    A miniature delight that packs big joy—a sweet sensation in every bite. 
                    </p>
                    <a href="#" className="gallery_btn">Order Now</a>
                </div>
    
                <div className="gallery_image">
                    <img src="../NewAssests/gallery_3.jpg"/>
    
                    <h3>Cup Cake-Chocolate</h3>
                    <p>
                    A miniature delight that packs big joy—a sweet sensation in every bite. 
                    </p>
                    <a href="#" className="gallery_btn">Order Now</a>
                </div>
    
                <div className="gallery_image">
                    <img src="../NewAssests/gallery_4.jpg"/>
    
                    <h3>Blue Berry-Vanilla Cake</h3>
                    <p>
                    A perfect blend of sweet and simple bliss in every slice. 
                    </p>
                    <a href="#" className="gallery_btn">Order Now</a>
                </div>
    
                <div className="gallery_image">
                    <img src="../NewAssests/gallery_5.jpg"/>
    
                    <h3>Pizza</h3>
                    <p>
                    A slice of happiness topped with endless possibilities—a taste adventure in every bite. 
                    </p>
                    <a href="#" className="gallery_btn">Order Now</a>
                </div>
    
                <div className="gallery_image">
                    <img src="../NewAssests/gallery_6.jpg"/>
    
                    <h3>Fruit Dessert</h3>
                    <p>
                    Nature's sweetness in every spoonful—a refreshing finale to any meal. 
                    </p>
                    <a href="#" className="gallery_btn">Order Now</a>
                </div>
    
            </div>
    
        </div>
    
    
    
    
        
    
        <div className="review" id="Review">
            <h1>Customer<span>Review</span></h1>
    
            <div className="review_box">
                <div className="review_card">
    
                    <div className="review_profile">
                        <img src="../NewAssests/review_1.png"/>
                    </div>
    
                    <div className="review_text">
                        <h2 className="name">Sophia </h2>
    
                        <div className="review_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
    
                        <div className="review_social">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
    
                        <p>
                        "I can't get enough of the incredible recipes on this food page! The diverse selection, clear instructions, and mouthwatering visuals make it my go-to source for culinary inspiration. Every dish I've tried has been a hit, turning my kitchen into a place of joy and creativity. The community engagement and passion for food truly set this page apart. Highly recommended for both seasoned cooks and kitchen novices.
                        </p>
    
                    </div>
    
                </div>
    
                <div className="review_card">
    
                    <div className="review_profile">
                        <img src="../NewAssests/review_2.png"/>
                    </div>
    
                    <div className="review_text">
                        <h2 className="name">Jack</h2>
    
                        <div className="review_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
    
                        <div className="review_social">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
    
                        <p>
                        "This food page is a culinary gem! The recipes are not only delicious but also easy to follow, making my cooking adventures stress-free and enjoyable. The diverse range of flavors and the attention to detail in each recipe showcase a genuine love for food. The community engagement adds a wonderful touch, creating a sense of connection among fellow food enthusiasts. I'm hooked and eagerly anticipate every new recipe.
                        </p>
    
                    </div>
    
                </div>
    
                <div className="review_card">
    
                    <div className="review_profile">
                        <img src="../NewAssests/review_3.png"/>
                    </div>
    
                    <div className="review_text">
                        <h2 className="name">Angelina</h2>
    
                        <div className="review_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
    
                        <div className="review_social">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
    
                        <p>
                        "As someone who loves exploring new flavors, this food page has become my culinary haven. The recipes are not only mouthwatering but also come with clear instructions that even a novice like me can follow. The engaging community and delightful blog posts add an extra layer of enjoyment. It's more than just a food page; it's a vibrant culinary community that I'm thrilled to be a part of.
                        </p>
    
                    </div>
    
                </div>
    
                <div className="review_card">
    
                    <div className="review_profile">
                        <img src="../NewAssests/review_4.png"/>
                    </div>
    
                    <div className="review_text">
                        <h2 className="name">Sam Johnson</h2>
    
                        <div className="review_icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
    
                        <div className="review_social">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
    
                        <p>
                        I stumbled upon this food page, and it's been a game-changer for my kitchen adventures. The recipes are diverse, easy to execute, and absolutely delicious. The visual appeal of the dishes and the simplicity of the instructions make cooking a joy. I appreciate the personal touch in the blog posts and the sense of community among fellow food enthusiasts. Five stars without a doubt.
                        </p>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    
    
        
    
        <div className="order" id="Order">
            <h1><span>Order</span>Now</h1>
    
            <div className="order_main">
    
                <div className="order_image">
                    <img src="../NewAssests/order_image.png"/>
                </div>
    
                <form action="#">
    
                    <div className="input">
                        <p>Name</p>
                        <input type="text" placeholder="your name"/>
                    </div>
    
                    <div className="input">
                        <p>Email</p>
                        <input type="email" placeholder="your email"/>
                    </div>
    
                    <div className="input">
                        <p>Number</p>
                        <input placeholder="your number"/>
                    </div>
    
                    <div className="input">
                        <p>How Much</p>
                        <input type="number" placeholder="how many order ?"/>
                    </div>
    
                    <div className="input">
                        <p>You Order</p>
                        <input placeholder="food name"/>
                    </div>
    
                    <div className="input">
                        <p>Address</p>
                        <input placeholder="your Address"/>
                    </div>
    
                    <a href="#" className="order_btn">Order Now</a>
    
                </form>
    
            </div>
    
        </div>
    
    
    
        
    
        <div className="team">
            <h1>Our<span>Team</span></h1>
    
            <div className="team_box">
                <div className="profile">
                    <img src="../NewAssests/chef1.png"/>
    
                    <div className="info">
                        <h2 className="name">John Doe</h2>
                        <p className="bio">Your guide to a world of delightful flavors.</p>
    
                        <div className="team_icon">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
    
                    </div>
    
                </div>
    
                <div className="profile">
                    <img src="../NewAssests/chef2.png"/>
    
                    <div className="info">
                        <h2 className="name">Jessica</h2>
                        <p className="bio">FYour guide to a world of delightful flavors.</p>
    
                        <div className="team_icon">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
    
                    </div>
    
                </div>
    
                <div className="profile">
                    <img src="../NewAssests/chef3.jpg"/>
    
                    <div className="info">
                        <h2 className="name">Shawn Mendes</h2>
                        <p className="bio">Your guide to a world of delightful flavors.</p>
    
                        <div className="team_icon">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
    
                    </div>
    
                </div>
    
                <div className="profile">
                    <img src="../NewAssests/chef4.jpg"/>
    
                    <div className="info">
                        <h2 className="name">Sam John</h2>
                        <p className="bio">Your guide to a world of delightful flavors.</p>
    
                        <div className="team_icon">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    
    
        
    
        <footer>
            <div className="footer_main">
    
                <div className="footer_tag">
                    <h2>Location</h2>
                    <p>Sri Lanka</p>
                    <p>USA</p>
                    <p>India</p>
                    <p>Japan</p>
                    <p>Italy</p>
                </div>
    
                <div className="footer_tag">
                    <h2>Quick Link</h2>
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Gallery</p>
                    <p>Order</p>
                </div>
    
                <div className="footer_tag">
                    <h2>Contact</h2>
                    <p>+94 12 3456 789</p>
                    <p>+94 25 5568456</p>
                    <p>johndeo123@gmail.com</p>
                    <p>foodshop123@gmail.com</p>
                </div>
    
                <div className="footer_tag">
                    <h2>Our Service</h2>
                    <p>Fast Delivery</p>
                    <p>Easy Payments</p>
                    <p>24 x 7 Service</p>
                </div>
    
                <div className="footer_tag">
                    <h2>Follows</h2>
                    <i className="fa-brands fa-facebook-f"><a href="https://www.facebook.com/" target="_blank"></a></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                </div>
    
            </div>
    
            <p className="end">Design by<span><i className="fa-solid fa-face-grin"></i> FOOD Master Code</span></p>
    
        </footer>
    
    
    
        
    
    </div>
  );
}

export default App;
