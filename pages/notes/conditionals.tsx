import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";
import Image from "next/image";
import clsx from "clsx";
import ListWithTitle from "components/common/ListWithTitle";
import RecordedMultipleChoiceQuestion from "components/common/RecordedMultipleChoiceQuestion";
import CenteredColumn from "components/common/CenteredColumn";
import RecordedPythonChallenge from "components/common/RecordedPythonChallenge";
import { FaWikipediaW } from "react-icons/fa";

export default function VariablesAndDataTypesPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.noteTitle}>Conditionals</h1>
            </Col>
          </Row>

          <ListWithTitle
            title="Objectives ⟶"
            items={[
              <>
                Understand the <code>bool</code> data type
              </>,
              <>Understand why booleans are important in programming</>,
              <>Discuss the operators that return boolean values</>,
              <>
                Understand <code>if</code>/<code>else</code> statements
              </>,
            ]}
          />

          <Row>
            <Col>
              <div className={styles.coverImage}>
                <Image
                  src="/images/conditionals-cover.jpg"
                  width={2000}
                  height={600}
                />
              </div>
            </Col>
          </Row>

          <CenteredColumn className={styles.textBox}>
            <h3>What are booleans?</h3>

            <span className="label blue">Recap</span>

            <p>
              A <strong>boolean</strong> is a data type that can only represent
              two possible values - <code>True</code> or <code>False</code>. The
              name boolean originates from the English mathematician{" "}
              <a
                href="https://en.wikipedia.org/wiki/George_Boole"
                title="George Boole Wikipedia Page"
              >
                George Boole
              </a>
              .
            </p>
            <p>
              Although having only two possible values makes booleans look
              trivial, booleans play a critical role in structuring code.
            </p>
            <p>
              Remember, a boolean <code>True</code> is NOT the same as a string{" "}
              <code>"True"</code> (note the double quotes around the text in
              string <code>"True"</code>)!
            </p>
          </CenteredColumn>

          <RecordedMultipleChoiceQuestion
            questionId={18}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={11} className={styles.block} />

          <RecordedPythonChallenge challengeId={12} className={styles.block} />

          <Row className={styles.boxItems}>
            <Col>
              <h2 className="sectionTitle">
                Why are booleans so important?
                <span className="accent blue" />
              </h2>

              <Row>
                <Col md={6}>
                  <div className={styles.item}>
                    <span className="label blue">Evaluation</span>

                    <p>
                      Even the most complex boolean <em>expressions</em> in
                      programming eventually boils down to a single boolean
                      value.
                    </p>
                  </div>
                </Col>

                <Col md={6}>
                  <div className={styles.item}>
                    <span className="label blue">Logic</span>

                    <p>
                      It controls the <em>flow</em> of your program. We will
                      soon see how <code>if</code> statements can conditionally
                      run blocks of code.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <RecordedPythonChallenge challengeId={13} className={styles.block} />

          <RecordedPythonChallenge challengeId={15} className={styles.block} />

          <RecordedPythonChallenge challengeId={14} className={styles.block} />

          <RecordedPythonChallenge challengeId={16} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>Expressions</h3>

            <span className="label blue">Evaluated Chunk of Code</span>

            <p>
              If you're new to programming, an expression may mean the look on
              your face, or a group of words used to signal how you feel.
            </p>
            <p>
              In the context of mathematics, an expression is a combination of
              symbols that is well-formed according to the rules that depend on
              the context (
              <a href="https://en.wikipedia.org/wiki/Expression_(computer_science)">
                Source: <FaWikipediaW /> Wikipedia
              </a>
              ).
            </p>

            <span className="label blue">For Us</span>
            <p>
              In the context of programming, an expression is a unit of code
              that can be evaluated to determine its value . This definition
              does not deviate far away from that of mathematics. We'll come
              back to how math and programming are intertwined.
            </p>

            <p>
              A <strong>boolean expression</strong> is any expression that
              evaluates to either <code>True</code> or <code>False</code>.
            </p>
          </CenteredColumn>

          <ListWithTitle
            title="Examples of Expressions ⟶"
            items={[
              <>
                <code>1 + 1</code> is an expression that evaluates to{" "}
                <code>2</code>.
              </>,
              <>
                <code>100 &gt; 90</code> is an expression that evaluates to{" "}
                <code>True</code>.
              </>,
              <>
                <code>"Urbana" + "Champaign"</code> is an expression that
                evaluates to <code>"UrbanaChampaign"</code>.
              </>,
              <>
                <code>hometown == "Chicago"</code> is an expression that
                evaluates to either <code>True</code>
                or <code>False</code> depending on the value of the{" "}
                <code>hometown</code> variable. <code>==</code> is an equality
                comparison operator that returns <code>True</code> if the two
                values being compared are equal.
              </>,
              <>
                <code>True</code> is an expression too.
              </>,
              <>
                <code>1</code> is also an expression. <em>Constants</em>{" "}
                themselves are expressions.
              </>,
            ]}
            className={styles.block}
          />

          <RecordedMultipleChoiceQuestion
            questionId={19}
            className={styles.block}
          />

          <RecordedMultipleChoiceQuestion
            questionId={20}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={17} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>If...Else</h3>
            <span className="label blue">Conditional Blocks</span>
            <p>
              Being able to use expressions to dynamically determine a value
              sounds... fancy. But how exactly is it <em>useful</em>?
            </p>
            <p>
              Boolean expressions are useful when it is combined with{" "}
              <em>conditionals</em>. Conditionals allow your code to make
              decisions based on rules.
            </p>
          </CenteredColumn>

          <Row className={clsx(styles.boxItems)}>
            <Col>
              <h2 className="sectionTitle">
                Conditional Statements
                <span className="accent blue" />
              </h2>

              <Row>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label black">if</span>

                    <p>
                      <code>if</code> statements always come first. You must
                      specify a condition here (<code>if cash &gt; 100</code>).
                      An <code>if</code> block is required before you use{" "}
                      <code>elif</code> or <code>else</code>. You can only have
                      one <code>if</code> statment in a set of{" "}
                      <code>if/elif/else</code> statements.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label black">elif</span>

                    <p>
                      <code>elif</code> statements come after the first{" "}
                      <code>if</code> block. Similar to <code>if</code>{" "}
                      statements, you must specify a condition for{" "}
                      <code>elif</code> statements. You can have as many{" "}
                      <code>elif</code> blocks as you'd like.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label black">else</span>

                    <p>
                      <code>else</code> statements come last. <code>else</code>{" "}
                      statements caputure <strong>any</strong> cases that are
                      not satisfied by the preceding <code>if/elif</code>{" "}
                      statements.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <RecordedPythonChallenge challengeId={18} className={styles.block} />

          <RecordedPythonChallenge challengeId={19} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>Why are some lines indented?</h3>
            <span className="label blue">Code Blocks</span>
            <p>
              Python uses indentation to define a block of code. A block of code
              refers to one or more lines of code that belong to <code>if</code>
              /<code>elif</code>/<code>else</code>
              statements, a function, or a loop (more on these later).
            </p>
            <p>
              You can use however many spaces you want. However, you must be{" "}
              <strong>consistent</strong> in the number of spaces you use.
              Python will throw an error if you mix the number of spaces used
              for indentation.
            </p>
          </CenteredColumn>

          <RecordedPythonChallenge challengeId={20} className={styles.block} />

          <RecordedPythonChallenge challengeId={21} className={styles.block} />
        </Container>
      </main>
    </Layout>
  );
}
