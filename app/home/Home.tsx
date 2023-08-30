"use client";
import { Footer } from "./../../components/layout/Footer";
import ProfileImage from "@/public/img/profile.svg";
import "../styles/artist.css";
import "../styles/normalize.css";
import "../styles/main.css";
import "../styles/my_css.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";
import Link from "next/link";
import Modal from "../../components/layout/Modal";
import RegistrationForm from "../../components/layout/RegistrationForm";
import ArtCards from "@/components/layout/ArtCards";
import { LiData } from "./LiProps";

interface LiProps {
  link: string;
  name: string;
  cls1: string;
  cls2: string;
}

const Home = () => {
  const [artData, setArtData] = useState({});
  const [openReg, setOpenReg] = useState(false);
  const [isCloseModal, setIsCloseModal] = useState(false);
  const showModal = useCallback(() => {
    setIsCloseModal(true);
  }, []);

  const closeModal = () => {
    setIsCloseModal(false);
  };
  return (
    <>
      <div className="w-screen">
        <div className="container">
          <nav>
            {/* <div className="profile">
              <a href="contact.html">
                <Image src={ProfileImage} alt="Profile Image" />
                <span className="login">Contact</span>
              </a>
            </div> */}
            <div className="logo">
              <h1>ArtConnect</h1>
            </div>
            <div className="">
              <ul>
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  <Link
                    className="px-1 hover:scale-105 hover:font-semibold hover:underline"
                    href={"/"}
                  >
                    Art
                  </Link>
                  <Link
                    className="px-1 hover:scale-105 hover:font-semibold hover:underline"
                    href={"/artist"}
                  >
                    Artist
                  </Link>
                  <Link
                    className="px-1 hover:scale-105 hover:font-semibold hover:underline"
                    href={"/artist-detail"}
                  >
                    Blog
                  </Link>
                  <Link
                    className="px-1 hover:scale-105 hover:font-semibold hover:underline"
                    href={"/contact"}
                  >
                    Contact
                  </Link>
                </div>
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
            <div>
              <button
                className="bg-transparent hover:scale-105"
                onClick={showModal}
              >
                Registration
              </button>
            </div>
          </div>
        </div>
      </div>

      {isCloseModal && (
        <Modal classes="w-4/5 pt-3 md:w-[70%] lg:w-[50%]">
          <RegistrationForm onClose={closeModal} />
        </Modal>
      )}
      <ArtCards />
      <Footer />
    </>
  );
};

export default Home;
