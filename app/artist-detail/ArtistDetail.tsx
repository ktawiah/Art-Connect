
import Link from "next/link"
import "../styles/artist_detail.css"

const ArtistDetail = () => {
  return (
    <>
        <div className="header">
        <div className="container">
          <nav>
            
            <div className="logo">
              <Link href="index.html"><h1>ArtConnect</h1></Link>
            </div>
            <div className="nav_link">
              <ul>
                <li>
                  <Link href="">
                    <span className="profile_icon"></span>
                    <span className="login"><Link href="index.html">Art</Link></span>
                  </Link>
                </li>
                <li>
                  <Link href="artist.html">
                    <span className="profile_icon"></span>
                    <span className="login">Artist</span>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <span className="profile_icon"></span>
                    <span className="login"><Link href="blog.html">Blog</Link></span>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <span className="profile_icon"></span>
                    <span className="login">Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="box">
        <div className="circle">
        </div>
    </div>
    <div className="brief">
        <h3 className="name text-center">Amoah Amoako</h3>
        <div className="top_desc">
            <small>Art Style</small>
            <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque saepe nostrum dolorem ut iste quod quibusdam reiciendis distinctio, blanditiis aut nemo tempore a pariatur repellat, voluptate repudiandae architecto fugit quia.
            </p>
        </div>
        <hr className="hr1"/>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatum magni odit ut eaque accusantium nesciunt fuga aspernatur animi facere ea reprehenderit tempore cumque vero laborum, quam ab autem quas suscipit! Aut molestias sit dignissimos excepturi expedita quam architecto quibusdam. Pariatur modi dolore amet voluptatum architecto illo voluptate mollitia vel magnam? Quos deserunt molestias, magni placeat, nisi quisquam possimus inventore iste officiis ipsam sequi. Impedit aut omnis cum? Pariatur suscipit dolor quaerat mollitia doloribus possimus inventore voluptatum quibusdam maxime assumenda beatae, explicabo veniam. Quos accusantium id fugit, nesciunt asperiores exercitationem voluptas deleniti tenetur incidunt eius similique consequuntur esse libero in rerum tempora ipsum doloremque rem. Pariatur porro cumque optio vero iste perferendis illo doloribus odio necessitatibus molestiae quo, repudiandae consequatur deserunt ullam nobis error qui tenetur alias nisi fugit. Repudiandae soluta earum voluptatem omnis aliquam laudantium adipisci praesentium est officiis vel architecto dicta enim, eius officia qui sequi consectetur ut dolorum iure nulla! Unde minus ad magni sint saepe culpa labore sunt, dolores nulla eligendi eos deleniti commodi ea doloribus inventore modi magnam. Ducimus eveniet omnis aspernatur sit quas illo ratione laudantium in soluta rerum beatae error numquam assumenda ipsam voluptatibus eius ad perspiciatis laborum, veritatis quo asperiores. Rerum, voluptatibus?
        </p>

        <hr className="hr"/>
        
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
        </div>
    </>
  )
}

export default ArtistDetail