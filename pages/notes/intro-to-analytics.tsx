import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";
import Image from "next/image";
import clsx from "clsx";
import ListWithTitle from "components/common/ListWithTitle";
import RecordedMultipleChoiceQuestion from "components/common/RecordedMultipleChoiceQuestion";

export default function VariablesAndDataTypesPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.noteTitle}>
                Introduction to Data Analytics
              </h1>
            </Col>
          </Row>

          <ListWithTitle
            title="Objectives ⟶"
            items={[
              <>Define data analytics</>,
              <>Understand the four categories of data analytics</>,
              <>Differentiate between data analytics and data science</>,
              <>Describe the common steps of analytics</>,
              <>
                Discuss how data analytics is relevant in the context of
                accounting
              </>,
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
                <h3>Introduction</h3>

                <span className="label blue">Growth of data</span>
                <p>
                  Organizations are accumulating data at an exponentially
                  growing speed. Just a decade ago, the volume of data
                  transferred in a year globally was estimated to be 5
                  zettabytes (that is approximately equivalent to
                  5,000,000,000,000,000 megabytes). In 2021, the volume of data
                  transferred globally is estimated to be 79 zettabytes (
                  <a href="https://www.statista.com/statistics/871513/worldwide-data-created/">
                    Source: Statista
                  </a>
                  ).
                </p>
                <p>
                  But how are any of the 79,000,000,000,000,000 megabytes of
                  data relevant to you? If you're looking to open a new retail
                  branch as a business owner, data can provide insights on
                  whether the new location has a high chance of success. If
                  you're running a digital advertising campaign, you can swiftly
                  adjust the campaign based on real-time feedback. As an
                  auditor, you can perform control tests using structured
                  transaction data. For every scenario we just discussed, the
                  end goal remains the same. You want to make{" "}
                  <strong>better decisions</strong> using data.
                </p>

                <span className="label blue">What is Data Analytics?</span>

                <p>
                  Data analytics is the science of deriving insights from raw
                  data. It combines multiple disciplines from statistics,
                  mathematics, programming, and even art! 🎨 Data analytics is
                  further categorized into four different types of analytics.
                </p>

                <ol>
                  <li>
                    <strong>Descriptive Analytics</strong>: Analyze historical
                    and current data to describe what happend (or is happening)
                  </li>
                  <li>
                    <strong>Diagnostic Analytics</strong>: Use data to
                    understand <em>why</em> something happend in the past
                  </li>
                  <li>
                    <strong>Predictive Analytics</strong>: Predicts what is
                    likely to happen in the future 🔮
                  </li>
                  <li>
                    <strong>Prescriptive Analytics</strong>: Test potential
                    outcomes of each decision using advanced algorithms and
                    recommends the best course of action
                  </li>
                </ol>

                <p></p>
              </div>
            </Col>
          </Row>

          <RecordedMultipleChoiceQuestion
            questionId={3}
            className={styles.block}
          />

          <RecordedMultipleChoiceQuestion
            questionId={4}
            className={styles.block}
          />

          <Row className={clsx(styles.boxItems)}>
            <Col>
              <h2 className="sectionTitle">
                Data Analytics vs Data Science
                <span className="accent orange" />
              </h2>

              <Row>
                <Col md={6}>
                  <div className={styles.item}>
                    <span className="label blue">Data Analytics</span>

                    <p>
                      Data analytics typically work with structured data to
                      solve business problems (source: Coursera).
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.item}>
                    <span className="label blue">Data Science</span>

                    <p>
                      Integers (<code>int</code>) and decimals (
                      <code>float</code> are numeric types. There is also
                      another numeric type (<code>complex</code>) that we won't
                      talk about.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className={clsx(styles.boxItems)}>
            <Col>
              <h2 className="sectionTitle">
                Steps in working with data
                <span className="accent orange" />
              </h2>

              <Row>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label orange">Collect</span>

                    <p>
                      Finding or gathering data is the starting point of any
                      analytical processes. Both numerical and categorical data
                      can be collected. Although there are further
                      classifications of numerical and categorical variables, we
                      won't discuss them here.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label orange">Analyze</span>

                    <p>
                      This step involves a repetitive process of loading,
                      transforming, and digging through the data. Your goal is
                      to find latent patterns that can be used to derive
                      insights.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label orange">Communicate</span>

                    <p>
                      This step is often referred as a "storytelling" phase. You
                      communicate your findings and suggest actions like you're
                      telling a story. The most common approach is to
                      graphically represent data.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <RecordedMultipleChoiceQuestion
            questionId={2}
            className={styles.block}
          />

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
