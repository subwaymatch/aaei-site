import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";
import Image from "next/image";
import ListWithTitle from "components/common/ListWithTitle";
import RecordedMultipleChoiceQuestion from "components/common/RecordedMultipleChoiceQuestion";
import CenteredColumn from "components/common/CenteredColumn";
import RecordedPythonChallenge from "components/common/RecordedPythonChallenge";

export default function LoopsNotePage() {
  return (
    <Layout>
      <main className={styles.page}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.noteTitle}>Loops</h1>
            </Col>
          </Row>

          <ListWithTitle
            title="Objectives ⟶"
            items={[
              <>Define what a loop is</>,
              <>Discuss why loops are useful</>,
              <>Introduce the two different types of loops</>,
              <>Learn how to use a for loop</>,
            ]}
          />

          <Row>
            <Col>
              <div className={styles.coverImage}>
                <Image
                  src="/images/loops-cover.jpg"
                  width={2000}
                  height={600}
                />
              </div>
            </Col>
          </Row>

          <CenteredColumn className={styles.textBox}>
            <h3>A more efficient way to retrieve elements</h3>

            <span className="label orange">A for loop</span>
            <p>
              You can use <code>for x in my_list</code> to iterate over each
              value in <code>my_list</code>. Note that <code>x</code> is an
              arbitrary name you pick. It is a temporary variable to store a
              value of an element in a list as you <em>iterate</em> through the
              list. You can use any valid variable name. Any of the code below
              will work with a list named <code>my_list</code>.
            </p>

            <ul>
              <li>
                <code>for x in my_list</code>
              </li>
              <li>
                <code>for a in my_list</code>
              </li>
              <li>
                <code>for my_value in my_list</code>
              </li>
              <li>
                <code>for any_variable_name in my_list</code>
              </li>
            </ul>

            <span className="label orange">Why are loops useful?</span>

            <p>
              Loops can be useful whenever you are doing a repetitive task.
              Assume you're trying to print out all values in{" "}
              <code>my_list</code>. Without a loop, you will have to copy &amp;
              paste <code>my_list[index]</code> many times. With a loop, your
              code becomes much more concise.
            </p>
          </CenteredColumn>

          <RecordedPythonChallenge challengeId={39} className={styles.block} />

          <RecordedPythonChallenge challengeId={40} className={styles.block} />

          <RecordedPythonChallenge challengeId={41} className={styles.block} />

          <RecordedPythonChallenge challengeId={42} className={styles.block} />

          <Row className={styles.boxItems}>
            <Col>
              <h2 className="sectionTitle">
                Two types of loops
                <span className="accent blue" />
              </h2>

              <Row>
                <Col md={6}>
                  <div className={styles.item}>
                    <span className="label blue">For Loops</span>

                    <p>
                      A <code>for</code> loop is used to iterate over a{" "}
                      <code>list</code> or a <code>list</code>-like data type.
                      This is what we will mostly practice for now.
                    </p>
                  </div>
                </Col>

                <Col md={6}>
                  <div className={styles.item}>
                    <span className="label blue">While Loops</span>

                    <p>
                      A <code>while</code> loop will continue to run until a
                      specific condition is satisfied. Without satisfying the
                      exit condition, your loop will run{" "}
                      <strong>forever</strong>.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <RecordedPythonChallenge challengeId={43} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>While Loops</h3>

            <span className="label blue">Indefinite Iteration</span>
            <p>
              Last time, we covered the first type of loop in Python - the{" "}
              <code>for</code> loop. A <code>for</code> loop takes a{" "}
              <code>list</code>-like data and iterates over each element.
            </p>

            <p>
              Generally speaking, you use a <code>for</code> loop when you know
              how many times you'd like to iterate before entering the loop.{" "}
              <code>for i in range(6)</code> will iterate 6 times unless you
              explicitly exit the loop (which we haven't discussed yet).
            </p>

            <p>
              The <code>while</code> loop serves a different purpose. You can
              use the <code>while</code> loop if you want to keep on iterating
              until a certain condition is satisfied.
            </p>
            <p>
              At each iteration, the while loop checks whether a condition is
              satisfied. It will run <strong>indefinitely</strong> until the
              condition is NOT satisfied.
            </p>

            <span className="label blue">Skip Discussion For Now</span>
            <p>
              Although <code>while</code> loops <em>can</em> be useful at times,
              we won't find many uses for the purpose of this data analytics
              module. For now, you only need to remember that <code>while</code>{" "}
              loops <em>can be</em> used to keep iterating when you don't know
              how many times to loop in advance.
            </p>
          </CenteredColumn>

          <RecordedMultipleChoiceQuestion
            questionId={27}
            className={styles.block}
          />
        </Container>
      </main>
    </Layout>
  );
}
