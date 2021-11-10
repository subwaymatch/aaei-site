import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";
import Image from "next/image";
import ListWithTitle from "components/common/ListWithTitle";
import RecordedMultipleChoiceQuestion from "components/common/RecordedMultipleChoiceQuestion";
import CenteredColumn from "components/common/CenteredColumn";
import RecordedPythonChallenge from "components/common/RecordedPythonChallenge";

export default function VariablesAndDataTypesPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.noteTitle}>Introduction to Python</h1>
            </Col>
          </Row>

          <ListWithTitle
            title="Objectives ⟶"
            items={[
              <>Understand what the Python programming language is</>,
              <>Discuss why Python is popular</>,
              <>Discuss why Python is a good fit for data analytics</>,
            ]}
          />

          <Row>
            <Col>
              <div className={styles.coverImage}>
                <Image
                  src="/images/intro-to-python-cover.jpg"
                  width={2000}
                  height={600}
                />
              </div>
            </Col>
          </Row>

          <CenteredColumn className={styles.textBox}>
            <h3>Introduction</h3>

            <span className="label blue">What is Python?</span>
            <p>
              Python is a high-level programming language that was created by
              Guido van Rossum in the 1980s. Its simple syntax emphasizes
              readability. Unlike many other programming languages, Python code
              often reads like natural English sentences. According to{" "}
              <a
                href="https://pypl.github.io/PYPL.html"
                title="PYPL PopularitY of Programming Language"
              >
                PYPL Programming Language Popularity Index
              </a>
              , Python is the world's most popular programming language. What
              makes Python so charming?
            </p>

            <ol>
              <li>It's easy to read and write.</li>
              <li>It's open-source and free.</li>
              <li>
                There are thousdands of <em>packages</em> available.
              </li>
              <li>
                It's versatile. You can use Python for data science (machine
                learning, deep learning, AI), web development, desktop app
                development, low-level programs, game programming, and more.
              </li>
              <li>It has a massive community of users and supporters.</li>
            </ol>
          </CenteredColumn>

          <RecordedMultipleChoiceQuestion
            questionId={5}
            className={styles.block}
          />

          <RecordedMultipleChoiceQuestion
            questionId={6}
            className={styles.block}
          />

          <CenteredColumn className={styles.textBox}>
            <h3>Python and Data Analytics</h3>

            <span className="label blue">Why do we use Python?</span>
            <p>
              Python is an ideal language for data analytics for many reasons.
            </p>
            <p>
              First, Python has a wide offering of data analysis and
              visualization libraries.{" "}
              <a href="https://pandas.pydata.org/">Pandas</a> is the de-facto
              standard library for data analysis which we will learn in one of
              the later chapters. Libraries like{" "}
              <a href="https://www.tensorflow.org/">TensorFlow</a> and{" "}
              <a href="https://pytorch.org/">PyTorch</a> are used for machine
              learning.
            </p>
            <p>
              Second, Python offers a higher development speed, especially when
              it comes to working with data. Data analysts can quickly perform
              exploratory data analysis to obtain a high-level understanding of
              a dataset. They can also prototype a statistical model with
              well-maintained libraries and a few lines of code.
            </p>
            <p>
              Finally, Python is a great beginner's language. Recall that the
              Python syntax is human-readable. You can often <em>guess</em> what
              some code is doing even if you don't fully understand Python.
            </p>
          </CenteredColumn>

          <RecordedMultipleChoiceQuestion
            questionId={7}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={1} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>References</h3>

            <ul>
              <li>
                <a
                  href="https://www.python.org/doc/essays/blurb/"
                  title="What is Python? Executive Summary"
                >
                  What is Python? Executive Summary
                </a>
              </li>
              <li>
                <a
                  href="https://www.coursereport.com/blog/how-is-python-used-for-data-science-metis"
                  title="How is Python Used for Data Science?"
                >
                  How is Python Used for Data Science?
                </a>
              </li>
            </ul>
          </CenteredColumn>
        </Container>
      </main>
    </Layout>
  );
}
