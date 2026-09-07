import { EMAIL_ADDRESS, INSTAGRAM_URL, getWhatsAppLink } from '../../constants';
import emailIcon from '../../img/icons/email.svg';
import instagramIcon from '../../img/icons/instagram.svg';
import whatsappIcon from '../../img/icons/whatsapp.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.heading}>Entre em contato</p>
      <div className={styles.social}>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <img src={whatsappIcon} alt="" className={styles.icon} />
        </a>
        <a href={`mailto:${EMAIL_ADDRESS}`} aria-label="E-mail">
          <img src={emailIcon} alt="" className={styles.icon} />
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src={instagramIcon} alt="" className={styles.icon} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
