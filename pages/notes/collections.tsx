import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";
import Image from "next/image";
import ListWithTitle from "components/common/ListWithTitle";
import RecordedMultipleChoiceQuestion from "components/common/RecordedMultipleChoiceQuestion";
import CenteredColumn from "components/common/CenteredColumn";
import RecordedPythonChallenge from "components/common/RecordedPythonChallenge";
import LargeQuote from "components/common/LargeQuote";

export default function CollectionsNotePage() {
  return (
    <Layout>
      <main className={styles.page}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.noteTitle}>Collections</h1>
            </Col>
          </Row>

          <ListWithTitle
            title="Objectives ⟶"
            items={[
              <>
                Introduce the <code>list</code> data type
              </>,
              <>Learn how to create, access, edit a list</>,
              <>
                Introduce the <code>dict</code> data type
              </>,
            ]}
          />

          <Row>
            <Col>
              <div className={styles.coverImage}>
                <Image
                  src="/images/collections-cover.jpg"
                  width={2000}
                  height={600}
                />
              </div>
            </Col>
          </Row>

          <CenteredColumn className={styles.textBox}>
            <h3>Introduction to Lists</h3>

            <span className="label blue">Overview</span>

            <p>
              Last time, we talked about <code>bool</code>, <code>int</code>,{" "}
              <code>float</code>, and <code>str</code> types. Variables with
              these data types can only contain a single value. That's why they
              are called basic types. The <code>list</code> type is the first
              non-basic data type we've seen. Square brackets (<code>[]</code>)
              are used to denote a list type.
            </p>
          </CenteredColumn>

          <RecordedPythonChallenge challengeId={22} className={styles.block} />

          <RecordedPythonChallenge challengeId={23} className={styles.block} />

          <RecordedPythonChallenge challengeId={24} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>Accessing list elements by index</h3>
            <span className="label blue">Zero-based Index</span>
            <p>
              What does that <code>offers[0]</code> do? The square brackets used
              in <code>offers[0]</code> denote the <em>index</em> of the element
              you're trying to retrieve. <code>offers[0]</code> retrieves the
              first value in the array, which is <code>55000</code> in our code.
              But why does the index start at zero, not one?
            </p>
            <p>
              In many programming languages including Python, you start counting
              indices at zero, not one. The code to retrieve the second item
              from <code>my_list</code> is <code>my_list[1]</code>, not{" "}
              <code>my_list[2]</code>.
            </p>
          </CenteredColumn>

          <RecordedMultipleChoiceQuestion
            questionId={21}
            className={styles.block}
          />

          <RecordedMultipleChoiceQuestion
            questionId={22}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={25} className={styles.block} />

          <RecordedPythonChallenge challengeId={26} className={styles.block} />

          <RecordedPythonChallenge challengeId={27} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>Negative list indices</h3>
            <span className="label blue">From the end of the list</span>
            <p>
              You can also access elements from the end of the array using a
              negative index. Negative indices begin at <code>-1</code>.{" "}
              <code>my_list[-1]</code> will select the{" "}
              <strong>last element</strong> in <code>my_list</code>.
            </p>
            <p>
              Similarly, <code>my_list[-2]</code> will select the second to the
              last element in <code>my_list</code>.
            </p>
          </CenteredColumn>

          <RecordedPythonChallenge challengeId={28} className={styles.block} />

          <RecordedPythonChallenge challengeId={29} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>How many elements are in a list?</h3>

            <span className="label blue">Length of a list</span>
            <p>
              You can retrieve the number of items in a list by using{" "}
              <code>len(my_list)</code> syntax.
            </p>
          </CenteredColumn>

          <RecordedMultipleChoiceQuestion
            questionId={23}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={30} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>Working with lists</h3>
            <span className="label blue">List methods</span>
            <p>
              Python provides multiple list methods (if you're not familiar with
              what a "method" is, think of it as some operation on a list - like
              adding or removing an item).
            </p>

            <p>
              A common operation is to add an item to an existing list. You can
              append an item to a list using{" "}
              <code>my_list.append(new_value)</code> syntax.
            </p>

            <p>
              If you'd like to take a look at all available methods, refer to{" "}
              <a href="https://docs.python.org/3/tutorial/datastructures.html">
                https://docs.python.org/3/tutorial/datastructures.html
              </a>
              .
            </p>
          </CenteredColumn>

          <RecordedPythonChallenge challengeId={31} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>Can a list have elements with non-uniform data types?</h3>
            <span className="label blue">Mixed Types</span>
            <p>
              From the previous coding question, we're able to see that a list
              can have elements with mixed data types. A list can hold{" "}
              <strong>any</strong> data type. In fact, a list can hold another
              list, which is called a <em>nested list</em>. For now, let's keep
              it simple and not worry about nested lists.
            </p>
          </CenteredColumn>

          <RecordedPythonChallenge challengeId={32} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <h3>Dictionary</h3>

            <span className="label blue">Key-Value Pairs</span>
            <p>
              Do you know what <em className="color-orange">terpsichorean</em>{" "}
              means? How about <em className="color-orange">appoggiatura</em>?
              If you know... you must read dictionaries for fun. 🤡 If you
              don't, you're on the same boat as me. Let's look these up in an
              English dictionary (
              <a href="https://dictionary.com">https://www.dictionary.com/</a>
              ).
            </p>
            <p>
              <span className="color-orange">Terpsichorean</span> is defined in
              the dictionary as{" "}
              <em className="color-blue">"pertaining to dancing"</em>.{" "}
              <span className="color-orange">Appoggiatura</span> is defined as{" "}
              <em className="color-blue">
                "a note of embellishment preceding another note and taking a
                portion of its time"
              </em>
              .
            </p>
            <p>
              Why am I talking about these obscure vocabularies in a Data
              Analytics course? You're about to find out.
            </p>
          </CenteredColumn>

          <RecordedPythonChallenge challengeId={33} className={styles.block} />

          <CenteredColumn className={styles.textBox}>
            <span className="label blue">Creating an empty dictionary</span>
            <p>
              You can create an empty dictionary using the following syntax:{" "}
              <code>my_dict = &#123;&#125;</code>.
            </p>

            <span className="label blue">Dictionary with initial values</span>
            <p>
              You can create a dictionary with initial values using the
              following syntax:{" "}
              <code>
                my_dict = &#123; "my_key1": "my_value1", "my_key2": "my_value2"
                &#125;
              </code>
              .
            </p>
          </CenteredColumn>

          <RecordedPythonChallenge challengeId={34} className={styles.block} />

          <RecordedPythonChallenge challengeId={35} className={styles.block} />

          <RecordedMultipleChoiceQuestion
            questionId={25}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={36} className={styles.block} />

          <LargeQuote className={styles.block}>
            <p>
              <span className="color-blue">I'm so good at finance...</span>
              <br />
              Even my bank says my balance is outstanding.
            </p>
          </LargeQuote>

          <Row className={styles.boxItems}>
            <Col>
              <h2 className="sectionTitle">
                Working with a Dictionary
                <span className="accent green" />
              </h2>

              <Row>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Retrieve a Value by Key</span>
                    <p>
                      Assume we're working with a dictionary named{" "}
                      <code>my_dict</code>. To retrieve a value by a key, use
                      square brackets (e.g., <code>my_dict["name"]</code>).
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Add a Key-Value Pair</span>
                    <p>
                      To add a new key-value pair, use square brackets with an
                      assignment operation (e.g.,{" "}
                      <code>my_dict["gpa"] = 2.0</code>).
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Update a Key-Value pair</span>
                    <p>
                      To update an existing key-value pair, use square brackets
                      with an assignment operation (e.g.,{" "}
                      <code>my_dict["gpa"] = 3.66</code>). This syntax is
                      identical that of creating a new key-value pair.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <RecordedMultipleChoiceQuestion
            questionId={26}
            className={styles.block}
          />

          <RecordedPythonChallenge challengeId={37} className={styles.block} />

          <RecordedPythonChallenge challengeId={38} className={styles.block} />
        </Container>
      </main>
    </Layout>
  );
}
