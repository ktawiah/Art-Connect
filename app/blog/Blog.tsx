import Link from "next/link"
import "../styles/blog.css"
const Blog = () => {
  return (
    <>
        <div className="header">
            <div className="container">
            <nav>
        
               <div className="logo">
                   <Link href="/"><h1>ArtConnect</h1></Link>
               </div>
               <div className="nav_link">
                 <ul>
                   <li>
                     <Link href="">
                       <span className="profile_icon"></span>
                       <span className="login"><Link href="/">Art</Link></span>
                     </Link>
                   </li>
                   <li>
                     <Link href="/artist">
                       <span className="profile_icon"></span>
                       <span className="login">Artist</span>
                     </Link>
                   </li>
                   <li>
                     <Link href="">
                       <span className="profile_icon"></span>
                       <span className="login"><Link href="/blog">Blog</Link></span>
                     </Link>
                   </li>
                   <li>
                     <Link href="/contact">
                       <span className="profile_icon"></span>
                       <span className="login">Contact</span>
                     </Link>
                   </li>
                 </ul>
               </div>
             </nav>
            </div>
            <div className="hero">
              <label>
                <input type="text" placeholder="Search items..."/>
              </label>
            </div>
        </div>
        <div className="blog">
        <div className="card">
            <div className="imagee">
            </div>
    
            <h2 className="title">How to cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis unde placeat dicta nam illo, dignissimos molestias sequi architecto a?</p>
            <Link href="readmore.html">Read More</Link>
        </div>

        <div className="card">
            <div className="imagee">
            </div>
    
            <h2 className="title">How to cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis unde placeat dicta nam illo, dignissimos molestias sequi architecto a?</p>
            <Link href="readmore.html">Read More</Link>
        </div>

        <div className="card">
            <div className="imagee">
            </div>
    
            <h2 className="title">How to cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis unde placeat dicta nam illo, dignissimos molestias sequi architecto a?</p>
            <Link href="readmore.html">Read More</Link>
        </div>

        <div className="card">
            <div className="imagee">
            </div>
    
            <h2 className="title">How to cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis unde placeat dicta nam illo, dignissimos molestias sequi architecto a?</p>
            <Link href="readmore.html">Read More</Link>
        </div>

        <div className="card">
            <div className="imagee">
            </div>
    
            <h2 className="title">How to cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis unde placeat dicta nam illo, dignissimos molestias sequi architecto a?</p>
            <Link href="readmore.html">Read More</Link>
        </div>

        <div className="card">
            <div className="imagee">
            </div>
    
            <h2 className="title">How to cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis unde placeat dicta nam illo, dignissimos molestias sequi architecto a?</p>
            <Link href="readmore.html">Read More</Link>
        </div>

        <div className="card">
            <div className="imagee">
            </div>
    
            <h2 className="title">How to cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis unde placeat dicta nam illo, dignissimos molestias sequi architecto a?</p>
            <Link href="readmore.html">Read More</Link>
        </div>

        <div className="card">
            <div className="imagee">
            </div>
    
            <h2 className="title">How to cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis unde placeat dicta nam illo, dignissimos molestias sequi architecto a?</p>
            <Link href="readmore.html">Read More</Link>
        </div>

        <div className="card">
            <div className="imagee">
            </div>
    
            <h2 className="title">How to cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis unde placeat dicta nam illo, dignissimos molestias sequi architecto a?</p>
            <Link href="readmore.html">Read More</Link>
        </div>

        <div className="card">
            <div className="imagee">
            </div>
    
            <h2 className="title">How to cook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis unde placeat dicta nam illo, dignissimos molestias sequi architecto a?</p>
            <Link href="readmore.html">Read More</Link>
        </div>
    </div>
    <footer>
        <section className="footer_banner">
          <div className="footer_banner_content">
            <div>
              <h2>Your Life, your style</h2>
              <p>Find content that speaks and relates to you. At any time. No matter where.</p>
            </div>
    
            <button>Add a search description</button>
          </div>
        </section>
        <section className="main_footer">
            <div className="newsletter">
              <button className="news_button">Newsletter Subscription</button>
            </div>
            <hr/>
    
            <div className="quick_links">
              <div>
                <h3>Discover</h3>
                <ul>
                  <li>Art</li>
                  <li>Artist</li>
                  <li>Something</li>
                  <li>Nothing</li>
                </ul>
              </div><div>
                <h3>Discover</h3>
                <ul>
                  <li>Art</li>
                  <li>Artist</li>
                  <li>Something</li>
                  <li>Nothing</li>
                </ul>
              </div><div>
                <h3>Discover</h3>
                <ul>
                  <li>Art</li>
                  <li>Artist</li>
                </ul>
              </div>
            </div>
            <hr/>
    
            <div className="copyright">
              <h1>ArtConnect</h1>
              <h4>&copy;2023 CaleboStores All right reserved</h4>
              <ul className="socials">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
        </section>
      </footer>
    </>
  )
}

export default Blog