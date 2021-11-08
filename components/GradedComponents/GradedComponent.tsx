import { Row, Col } from "react-bootstrap";
import styles from "./GradedComponent.module.scss";
import Link from "next/link";
import ProgressBar from "components/GradedComponents/ProgressBar";
import clsx from "clsx";

interface IGradedComponentProps {
  label: string;
  href: string;
  progress: number;
}

const GradedComponent = ({ label, href, progress }: IGradedComponentProps) => {
  return (
    <Link href={href}>
      <div className={styles.gradedComponent}>
        <Row className="align-items-center">
          <Col md={8}>
            <div className={styles.labelWrapper}>
              <span className={styles.text}>{label}</span>
            </div>
          </Col>

          <Col md={4}>
            <div className={styles.progressWrapper}>
              <Row className="align-items-center">
                <Col>
                  <div className={styles.status}>{progress}%</div>
                </Col>

                <Col>
                  <div className={styles.progressBarWrapper}>
                    <ProgressBar progress={progress} />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Link>
  );
};

export default GradedComponent;
