import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";
import Image from "next/image";
import clsx from "clsx";
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
              <h1 className={styles.noteTitle}>Data Types and Variables</h1>
            </Col>
          </Row>

          <ListWithTitle
            title="Objectives ⟶"
            items={[
              <>Understand what a data type is</>,
              <>Discuss basic data types</>,
              <>Understand what a variable is</>,
              <>Discuss why variables are used</>,
            ]}
          />

          <Row>
            <Col>
              <div className={styles.coverImage}>
                <Image
                  src="/images/variables-and-data-types-cover.jpg"
                  width={2000}
                  height={600}
                />
              </div>
            </Col>
          </Row>

          <CenteredColumn className={styles.textBox}>
            <div className={styles.textBox}>
              <h3>Python Data Types</h3>

              <span className="label blue">What is a data type?</span>
              <p>
                A data type denotes the category of a value. In Python, ALL
                values have <em>data type</em>s. We'll go over a few{" "}
                <strong>built-in</strong> types. Built-in types are pre-defined
                data types that are part of the Python programming language
                itself.
              </p>

              <ul>
                <li>
                  Text <code>"Hello World"</code> is a string type (
                  <code>str</code>).
                </li>
                <li>
                  Number <code>475</code> is an integer type (<code>int</code>
                  ).
                </li>
                <li>
                  Number <code>1.99</code> is a float type (<code>float</code>
                  ).
                </li>
                <li>
                  Logical <code>True</code> is a boolean type (<code>bool</code>
                  ).
                </li>
              </ul>
            </div>
          </CenteredColumn>

          <RecordedMultipleChoiceQuestion
            questionId={8}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={2} className={styles.block} />

          <RecordedMultipleChoiceQuestion
            questionId={9}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={3} className={styles.block} />

          <Row className={clsx(styles.boxItems)}>
            <Col>
              <h2 className="sectionTitle">
                Basic Data Types
                <span className="accent blue" />
              </h2>

              <Row>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Text</span>

                    <p>
                      Strings (<code>str</code>) are text types. They are always
                      enclosed in single or double quotes.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Numbers</span>

                    <p>
                      Integers (<code>int</code>) and decimals (
                      <code>float</code>) are numeric types. There is also
                      another numeric type (<code>complex</code>) that we won't
                      talk about.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Logical Yes/No</span>

                    <p>
                      Booleans (<code>bool</code>) can only have two possible
                      values - <code>True</code> or <code>False</code>. Note
                      that <code>"True"</code> is a string type since it's
                      inclosed in double quotes. Boolean values should not be
                      enclosed in quotes.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <RecordedMultipleChoiceQuestion
            questionId={11}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={4} className={styles.block} />

          <RecordedMultipleChoiceQuestion
            questionId={13}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={5} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <div className={styles.textBox}>
              <h3>What are variables?</h3>

              <span className="label blue">From Wikipedia</span>
              <p
                style={{
                  textDecoration: "line-through",
                  color: "#777",
                }}
              >
                A variable is a storage location (identified by a memory
                address) paired with an associated symbolic name, which contains
                some known or unknown quantity of information referred to as a
                value.
              </p>

              <span className="label blue">What it really means</span>
              <p>
                A variable is a nickname for a stored value that can{" "}
                <em>change</em>.
              </p>

              <span className="label blue">Creating a Variable</span>
              <p>
                The syntax to create a new variable is{" "}
                <code>my_variable = some_value</code>. The <code>=</code> symbol
                here is an <strong>assignment operator</strong>, NOT a symbol
                for equality.
              </p>
            </div>
          </CenteredColumn>

          <RecordedMultipleChoiceQuestion
            questionId={14}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={6} className={styles.block} />

          <RecordedMultipleChoiceQuestion
            questionId={15}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={7} className={styles.block} />

          <Row className={clsx(styles.boxItems)}>
            <Col>
              <h2 className="sectionTitle">
                Python Variable Naming Rules
                <span className="accent blue" />
              </h2>

              <Row>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">First Character</span>

                    <p>
                      Variable names must begin with a letter or an underscore .
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Allowed Characters</span>

                    <p>
                      You can use letters, numbers, and underscores for the
                      remainder of your variable name.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Case Matters</span>

                    <p>
                      Variable names are <strong>case-sensitive</strong>.<br />
                      <code>my_var</code>, <code>MY_VAR</code>,{" "}
                      <code>My_Var</code> are all separate variables.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <RecordedPythonChallenge challengeId={8} className={styles.block} />

          <RecordedPythonChallenge challengeId={9} className={styles.block} />

          <RecordedMultipleChoiceQuestion
            questionId={16}
            className={styles.block}
          />

          <RecordedMultipleChoiceQuestion
            questionId={17}
            className={styles.block}
          />

          <CenteredColumn className={styles.textBox}>
            <span className="label blue">Updating Variables</span>
            <p>
              The syntax for updating a variable is{" "}
              <strong>the same as creating a new variable</strong>. Use an
              assignment operator (<code>=</code>) with the variable name on the
              left-side of the <code>=</code> symbol and the new value on the
              right-side of the <code>=</code> symbol.
            </p>

            <p>
              <code>my_variable = updated_value</code>
            </p>
          </CenteredColumn>

          <RecordedPythonChallenge challengeId={10} className={styles.block} />
        </Container>
      </main>
    </Layout>
  );
}
