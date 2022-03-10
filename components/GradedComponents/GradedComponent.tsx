import { Row, Col } from "react-bootstrap";
import styles from "./GradedComponent.module.scss";
import Link from "next/link";
import ProgressBar from "components/GradedComponents/ProgressBar";
import useSupabaseAuth from "hooks/useSupabaseAuth";

interface IGradedComponentProps {
  slug?: string;
  title: string;
  href: string;
  showProgress?: boolean;
  progress?: number;
  progressMessage?: string;
}

const GradedComponent = ({
  slug,
  title,
  href,
  progress,
  showProgress = true,
  progressMessage,
}: IGradedComponentProps) => {
  const { isAdmin } = useSupabaseAuth();

  return (
    <div className={styles.gradedComponent}>
      <Row className="align-items-center">
        <Col md={8}>
          <div className={styles.labelWrapper}>
            <Link href={href}>
              <a className={styles.text}>{title}</a>
            </Link>

            {slug && isAdmin && (
              <Link href={`/admin/summary/${slug}`}>
                <a className={styles.adminSummaryLink}>Admin View</a>
              </Link>
            )}
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
  );
};

export default GradedComponent;
