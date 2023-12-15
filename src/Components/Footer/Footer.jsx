import { FooterContainer, SocialItems } from "./FooterStyles";
import Social from "../Social/Social";
// import { handleDownload } from "../Download";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SocialItems>
          <Social
            link="mailto:matheusdocarvalho@gmail.com"
            image="../images/EMAIL_ICON_F.png"
            alt="Email"
            width="30"
            height="30"
          />
          <Social
            link="https://www.linkedin.com/in/matheusscarvalho/"
            image="../images/LINKEDIN_ICON_F.png"
            alt="LinkedIn"
            width="30"
            height="30"
          />
          <Social
            link="https://github.com/matheusscarvalho1"
            image="../images/GITHUB_ICON_F.png"
            alt="GitHub"
            width="30"
            height="30"
          />
          <Social
            link="https://wa.me/5565992079383"
            image="../images/WHATSAPP_ICON_F.png"
            alt="WhatsApp"
            width="30"
            height="30"
          />
          <Social
            link="https://www.linkedin.com/in/matheusscarvalho/"
            image="../images/CV_ICON_F.png"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </SocialItems>
        <p>© Copyright 2023</p>
      </FooterContainer>
    </>
  );
};

export default Footer;
