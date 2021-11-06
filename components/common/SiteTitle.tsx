import { Container, Row, Col } from "react-bootstrap";
import styles from "./SiteTitle.module.scss";

const SiteTitle = () => (
  <h1 className={styles.siteTitle}>
    <span className="color-arches-blue-300">Academy for Accountancy</span>
    <br />
    <span className="color-arches-blue-300">Excellence and Innovation</span>
    <br />
    <span className="color-arches-blue-700">Data Analytics Module</span>
  </h1>
);

export default SiteTitle;
