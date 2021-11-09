import styles from "./SiteTitle.module.scss";
import clsx from "clsx";

interface ISiteTitleProps {
  className?: string;
}

const SiteTitle = ({ className }: ISiteTitleProps) => (
  <h1
    className={clsx(styles.siteTitle, {
      [className]: !!className,
    })}
  >
    <span className="color-arches-blue-300">Academy for Accountancy</span>
    <br />
    <span className="color-arches-blue-300">Excellence and Innovation</span>
    <br />
    <span className="color-arches-blue-700">Data Analytics Module</span>
  </h1>
);

export default SiteTitle;
