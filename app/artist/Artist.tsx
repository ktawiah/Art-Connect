import Image from "next/image";
import { Input } from "@/components/ui/input";
import "../styles/artist.css";
import Link from "next/link";

const Artist = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <nav>
            <div className="logo">
              <Link href="/index">
                <h1>ArtConnect</h1>
              </Link>
            </div>
            <div className="nav_link">
              <ul>
                <li>
                  <Link href="">
                    <span className="profile_icon"></span>
                    <span className="login">
                      <Link href="/index">Art</Link>
                    </span>
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
                    <span className="login">
                      <Link href="/blog">Blog</Link>
                    </span>
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

        <div className="hero">
          <label>
            <Input type="text" placeholder="Search items..." />
          </label>
        </div>

        <div className="register_pane">
          <div className="reg_content">
            <div>
              <h2 className="reg_head">Just For You.</h2>
              <p>Register and enjoy thrilling content</p>
            </div>
          </div>
        </div>
      </div>

      <div className="artist_section">
        <div className="card">
          <div className="card_item">
            <Link href="/artist_detail" className="card_links">
              <div>
                <Image src="" alt="" />
              </div>
            </Link>
            <h2>Amoah Amoako</h2>
          </div>

          <div className="card_item">
            <Link href="/artist_detail" className="card_links">
              <div>
                <Image src="" alt="" />
              </div>
            </Link>
            <h2>Amoah Amoako</h2>
          </div>

          <div className="card_item">
            <Link href="/artist_detail" className="card_links">
              <div>
                <Image src="" alt="" />
              </div>
            </Link>
            <h2>Amoah Amoako</h2>
          </div>

          <div className="card_item">
            <Link href="/artist_detail" className="card_links">
              <div>
                <Image src="" alt="" />
              </div>
            </Link>
            <h2>Amoah Amoako</h2>
          </div>

          <div className="card_item">
            <Link href="/artist_detail" className="card_links">
              <div>
                <Image src="" alt="" />
              </div>
            </Link>
            <h2>Amoah Amoako</h2>
          </div>

          <div className="card_item">
            <Link href="/artist_detail" className="card_links">
              <div>
                <Image src="" alt="" />
              </div>
            </Link>
            <h2>Amoah Amoako</h2>
          </div>
          <div className="card_item">
            <Link href="/artist_detail" className="card_links">
              <div>
                <Image src="" alt="" />
              </div>
            </Link>
            <h2>Amoah Amoako</h2>
          </div>

          <div className="card_item">
            <Link href="/artist_detail" className="card_links">
              <div>
                <Image src="" alt="" />
              </div>
            </Link>
            <h2>Amoah Amoako</h2>
          </div>
        </div>
        <button className="load_more">Load More</button>
      </div>

      <footer>
        <section className="footer_banner">
          <div className="footer_banner_content">
            <div>
              <h2>Your Life, your style</h2>
              <p>
                Find content that speaks and relates to you. At any time. No
                matter where.
              </p>
            </div>

            <button>Add a search description</button>
          </div>
        </section>
        <section className="main_footer">
          <div className="newsletter">
            <button className="news_button">Newsletter Subscription</button>
          </div>
          <hr />

          <div className="quick_links">
            <div>
              <h3>Discover</h3>
              <ul>
                <li>Art</li>
                <li>Artist</li>
                <li>Something</li>
                <li>Nothing</li>
              </ul>
            </div>
            <div>
              <h3>Discover</h3>
              <ul>
                <li>Art</li>
                <li>Artist</li>
                <li>Something</li>
                <li>Nothing</li>
              </ul>
            </div>
            <div>
              <h3>Discover</h3>
              <ul>
                <li>Art</li>
                <li>Artist</li>
              </ul>
            </div>
          </div>
          <hr />

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
  );
};

export default Artist;
