import { Row, Col } from "react-bootstrap";
import styles from "./GradedComponent.module.scss";
import Link from "next/link";
import ProgressBar from "components/GradedComponents/ProgressBar";
import clsx from "clsx";

interface IGradedComponentProps {
  label: string;
  href: string;
  showProgress?: boolean;
  progress?: number;
  progressMessage?: string;
}

const GradedComponent = ({
  label,
  href,
  progress,
  showProgress = true,
  progressMessage,
}: IGradedComponentProps) => {
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
                  {showProgress ? (
                    <div className={styles.status}>{progress}%</div>
                  ) : (
                    <div className={styles.status}>N/A</div>
                  )}
                </Col>

                <Col>
                  <div className={styles.progressBarWrapper}>
                    {showProgress && <ProgressBar progress={progress} />}
                    {progressMessage && <p>{progressMessage}</p>}
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
