import React from "react";
export function Footer() {
  return (
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
          <h4>&copy;2023 ArtConnect All right reserved</h4>
          <ul className="socials">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
