import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";
import Image from "next/image";
import clsx from "clsx";
import RecordedPythonChallenge from "components/common/RecordedPythonChallenge";
import ListWithTitle from "components/common/ListWithTitle";

export default function VariablesAndDataTypesPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.noteTitle}>Variables and Data Types</h1>
            </Col>
          </Row>

          <ListWithTitle
            title="Objectives ⟶"
            items={[
              <>
                What are <span className="color-blue">data types</span>?
              </>,
              <>Understand basic data types.</>,
              <>
                Understand what <span className="color-blue">variables</span>{" "}
                are.
              </>,
              <>Why do we need variables?</>,
            ]}
          />

          <Row>
            <Col>
              <div className={styles.coverImage}>
                <Image
                  src="/images/intro-to-analytics-cover.jpg"
                  width={2000}
                  height={600}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col
              lg={{
                span: 6,
                offset: 3,
              }}
              md={{
                span: 8,
                offset: 2,
              }}
            >
              <div className={styles.textBox}>
                <h3>Python Data Types</h3>

                <span className="label blue">What is it?</span>
                <p>
                  In Python, ALL values have{" "}
                  <span className="color-blue">data types</span>. We'll go over
                  a few <strong>built-in</strong> types.
                </p>

                <ul>
                  <li>
                    <code>Text "Hello World"</code> is a text type (
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
                    Logical <code>True</code> is a boolean type (
                    <code>bool</code>).
                  </li>
                </ul>

                <span className="label blue">Primitive vs Non-primitive</span>
                <p>
                  Data types can be categorized into two types -{" "}
                  <em className="color-blue">primitive</em> and{" "}
                  <em className="color-blue">non-primitive</em> types.
                  Technically speaking, Python only has <em>non-primitive</em>{" "}
                  types as everything is an object in Python. For the purpose of
                  this course, you do not have to worry about differentiating
                  between primitive and non-primitive types.
                </p>
              </div>
            </Col>
          </Row>

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
                      <code>float</code> are numeric types. There is also
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
                      values - <code>True</code> or <code>False</code>.
                      Technically speaking, booleans are a subtype of integers.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col
              lg={{
                span: 6,
                offset: 3,
              }}
              md={{
                span: 8,
                offset: 2,
              }}
            >
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
                  address) paired with an associated symbolic name, which
                  contains some known or unknown quantity of information
                  referred to as a value.
                </p>

                <span className="label blue">What it really means</span>
                <p>
                  A variable is a nickname for a stored value that can{" "}
                  <em className="color-blue">change</em>.
                </p>

                <span className="label blue">Creating a Variable</span>
                <p>
                  The syntax to create a new variable is{" "}
                  <code>my_variable = some_value</code>. The <code>=</code>{" "}
                  symbol here is an <strong>assignment operator</strong> and NOT
                  a symbol for equality.
                </p>
              </div>
            </Col>
          </Row>

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
                      Variable names must{" "}
                      <span className="color-blue">
                        begin with a letter or an underscore
                      </span>
                      .
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Allowed Characters</span>

                    <p>
                      You can use{" "}
                      <span className="color-blue">
                        letters, numbers, and underscores
                      </span>{" "}
                      for the remainder of your variable name.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Case Matters</span>

                    <p>
                      Variable names are{" "}
                      <span className="color-blue">case-sensitive</span>.<br />
                      <code>my_var</code>, <code>MY_VAR</code>,{" "}
                      <code>My_Var</code> are all separate variables.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col
              lg={{
                span: 6,
                offset: 3,
              }}
              md={{
                span: 8,
                offset: 2,
              }}
            >
              <div className={styles.textBox}>
                <h3>Updating Variables</h3>

                <span className="label blue">Too Easy</span>
                <p>
                  The syntax for updating a variable is{" "}
                  <strong>the same as creating a new variable</strong>.
                </p>

                <p>
                  <code>my_variable = updated_value</code>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
