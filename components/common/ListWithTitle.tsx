import { Row, Col } from "react-bootstrap";
import styles from "./ListWithTitle.module.scss";
import clsx from "clsx";

interface IListWithTitleProps {
  title: React.ReactNode;
  items: React.ReactNode[];
  className?: string;
}

export default function ListWithTitle({
  title,
  items,
  className,
}: IListWithTitleProps) {
  return (
    <Row>
      <Col>
        <div
          className={clsx(styles.listBox, {
            [className]: !!className,
          })}
        >
          <Row>
            <Col lg={4}>
              <h3 className={styles.title}>{title}</h3>
            </Col>

            <Col lg={8}>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
