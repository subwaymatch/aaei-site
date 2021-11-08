import { Row, Col } from "react-bootstrap";
import clsx from "clsx";
import styles from "./SectionTitle.module.scss";

interface ISectionTitleProps {
  children: React.ReactNode;
  bottomBorder?: boolean;
  className?: string;
}

export default function SectionTitle({
  children,
  bottomBorder,
  className,
}: ISectionTitleProps) {
  return (
    <Row>
      <Col>
        <div
          className={clsx(styles.sectionTitle, {
            [styles.bottomBorder]: !!bottomBorder,
            [className]: !!className,
          })}
        >
          <h2>{children}</h2>
        </div>
      </Col>
    </Row>
  );
}
