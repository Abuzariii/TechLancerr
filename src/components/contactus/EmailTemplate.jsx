// components/TechlancerrEventEmail.jsx

import React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const TechlancerrEventEmail = ({ sname, smessage }) => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <title>Techlancerr Event</title> */}
      <style>{`
        body {
            font-family: Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #e9f5e5;
        }
        h1 {
          color: #297e3d;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .bodyText{
          padding: 20px;
        }
        .banner {
          background-color: #349948;
          text-align: center;
        }
        .banner img {
          max-width: 100%;
          height: auto;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          text-decoration: none;
          color: #ffffff;
          background-color: #297e3d;
          border-radius: 5px;
        }
        .footer {
          margin-top: 20px;
          text-align: center;
          padding: 20px 0;
        }
        .footer p {
          padding: 20px;
          margin: 0;
        }
        .social-icons {
          padding: 10px;
          background-color: #297e3d;
        }
        .social-icons a {
          display: inline-block;
          margin: 0 10px;
        }
        .followUs{
          color: #ffffff;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .title{
          margin-bottom: 10px;
        }
        .message{
          margin-top: 0;
        }
        .query{
          margin-bottom: 20px;
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 5px;
          
        }
      `}</style>
    </Head>
    <Body>
      <Container className="container">
        <div className="banner">
          <Img
            alt="Techlancerr Banner"
            src="https://lh4.googleusercontent.com/PhMoDa97WpurUpqVnKfzVdRUZLZYrmd2zqjpmzr7pLl06Jp7v395FOCvXUW1VYXU3zFO8rVNjj_4CEaCX0wMaQIyKrnaMRfjWmuxsN8btWtkpKs2ZSddyS9lOpfYwHqr9Q=w950"
          />
        </div>
        <div className="bodyText">
          <Section>
            <Text>Dear {sname},</Text>
            <Text>
              Thank you for reaching out to us! We appreciate your interest in
              the Techlancerr Summit.
            </Text>
            <div className="query">
              <h4 className="title">Your Query</h4>
              <Text className="message">{smessage}</Text>
            </div>
            <Text>
              We will get back to you shortly with more details. In the
              meantime, feel free to explore our website for more information
              about Techlancerr.
            </Text>
          </Section>
          <Section>
            <Text>Best regards,</Text>
            <Text>The Techlancerr Team</Text>
          </Section>
        </div>
        <div className="footer">
          <div className="social-icons">
            <h2 className="followUs">Follow Us</h2>
            <Link
              href="https://www.facebook.com/techlancerrr"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                alt="www"
                src="https://th.bing.com/th/id/R.ea9f4390e665088d4b9acb45a59f7cb1?rik=JOW0PUjPgOdLNQ&pid=ImgRaw&r=0"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.instagram.com/techlancerr"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="www"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
                // width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://twitter.com/techlancerr"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                alt="www"
                src="https://freelogopng.com/images/all_img/1690643777twitter-x%20logo-png-white.png"
                width={17}
                height={17}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/techlancerr"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                alt="www"
                src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@techlancerr"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                alt="www"
                src="https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-white-symbol-glyph-png.png"
                // width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.techlancerr.tech"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                alt="www"
                src="https://icon-library.com/images/website-icon-white/website-icon-white-0.jpg"
                width={20}
                height={20}
              />
            </Link>
          </div>
          <p>&copy; 2023 Techlancerr. All rights reserved.</p>
        </div>
      </Container>
    </Body>
  </Html>
);

export default TechlancerrEventEmail;
