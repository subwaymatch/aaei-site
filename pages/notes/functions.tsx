import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";
import Image from "next/image";
import ListWithTitle from "components/common/ListWithTitle";
import RecordedMultipleChoiceQuestion from "components/common/RecordedMultipleChoiceQuestion";
import CenteredColumn from "components/common/CenteredColumn";
import RecordedPythonChallenge from "components/common/RecordedPythonChallenge";

export default function FunctionsNotePage() {
  return (
    <Layout>
      <main className={styles.page}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.noteTitle}>Functions</h1>
            </Col>
          </Row>

          <ListWithTitle
            title="Objectives ⟶"
            items={[
              <>Introduce the concept of functions</>,
              <>Define what a function is</>,
              <>
                Learn how to create new functions using the <code>def</code>{" "}
                keyword
              </>,
              <>Introduce the two different types of loops</>,
              <>Learn parameters and return values of a function</>,
            ]}
          />

          <Row>
            <Col>
              <div className={styles.coverImage}>
                <Image
                  src="/images/functions-cover.jpg"
                  width={2000}
                  height={600}
                />
              </div>
            </Col>
          </Row>

          <CenteredColumn className={styles.textBox}>
            <h3>What are functions?</h3>

            <span className="label blue">Back to Algebra</span>

            <p>
              Let's forget about Python for a moment and go back a few years all
              the way back to Algebra. Do you remember any expressions that
              resemble the form of <code>f(x) = x + 3</code>?
            </p>

            <p>
              <code>f(x) = x + 3</code> is a <em>function</em>. For any given{" "}
              <code>x</code>, the function will add <code>3</code> to{" "}
              <code>x</code> and return that value.
            </p>

            <ul>
              <li>
                <code>f(5) = 5 + 3</code>, returns <code>8</code>
              </li>

              <li>
                <code>f(10) = 10 + 3</code>, returns <code>13</code>
              </li>

              <li>
                <code>f(-3) = -3 + 3</code>, returns <code>0</code>
              </li>
            </ul>

            <p>
              In mathematical terms, a function takes one or more inputs and
              produces an output. Our previous function{" "}
              <code>f(x) = x + 3</code> can be broken down into:
            </p>

            <p>
              <img
                src="https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-breakdown-01.png"
                alt="Function Breakdown"
              />
            </p>

            <p>
              <code>f</code> in front of the parentheses is an arbitrary name
              used to represent a function. We can choose to rename our function
              to <code>add_three</code>. This changes our function expression to{" "}
              <code>add_three(x) = x + 3</code>.
            </p>

            <p>
              A function can also take more than one input (e.g.,{" "}
              <code>add_three(a, b) = a + b</code>).
            </p>

            <p>
              In programming, an inputs is referred as an <em>argument</em>, and
              an output is referred as a <em>return value</em>.
            </p>

            <p>
              <img
                src="https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-diagram-01.png"
                alt="Function Diagram"
              />
            </p>
          </CenteredColumn>

          <RecordedPythonChallenge challengeId={44} className={styles.block} />

          <RecordedPythonChallenge challengeId={45} className={styles.block} />

          <RecordedPythonChallenge challengeId={46} className={styles.block} />

          <RecordedPythonChallenge challengeId={47} className={styles.block} />

          <RecordedPythonChallenge challengeId={48} className={styles.block} />

          <RecordedPythonChallenge challengeId={49} className={styles.block} />

          <RecordedPythonChallenge challengeId={50} className={styles.block} />

          <RecordedPythonChallenge challengeId={51} className={styles.block} />

          <RecordedPythonChallenge challengeId={52} className={styles.block} />

          <RecordedPythonChallenge challengeId={53} className={styles.block} />

          <RecordedPythonChallenge challengeId={54} className={styles.block} />

          <RecordedPythonChallenge challengeId={55} className={styles.block} />

          <RecordedPythonChallenge challengeId={56} className={styles.block} />

          <RecordedMultipleChoiceQuestion
            questionId={28}
            className={styles.block}
          />
        </Container>
      </main>
    </Layout>
  );
}
