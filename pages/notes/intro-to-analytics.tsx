import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";
import Image from "next/image";
import clsx from "clsx";
import ListWithTitle from "components/common/ListWithTitle";
import RecordedMultipleChoiceQuestion from "components/common/RecordedMultipleChoiceQuestion";
import CenteredColumn from "components/common/CenteredColumn";

export default function IntroToAnalyticsNotePage() {
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

          <CenteredColumn className={styles.textBox}>
            <h3>Introduction</h3>

            <span className="label blue">Growth of data</span>
            <p>
              Organizations are accumulating data at an exponentially growing
              speed. Just a decade ago, the volume of data transferred in a year
              globally was estimated to be 5 zettabytes (that is approximately
              equivalent to 5,000,000,000,000,000 megabytes). In 2021, the
              volume of data transferred globally is estimated to be 79
              zettabytes (
              <a href="https://www.statista.com/statistics/871513/worldwide-data-created/">
                Source: Statista
              </a>
              ).
            </p>
            <p>
              But how are any of the 79,000,000,000,000,000 megabytes of data
              relevant to you? If you're looking to open a new retail branch as
              a business owner, data can provide insights on whether the new
              location has a high chance of success. If you're running a digital
              advertising campaign, you can swiftly adjust the campaign based on
              real-time feedback. As an auditor, you can perform control tests
              using structured transaction data. For every scenario we just
              discussed, the end goal remains the same. You want to make{" "}
              <strong>better decisions</strong> using data.
            </p>

            <span className="label blue">What is Data Analytics?</span>

            <p>
              Data analytics is the science of deriving insights from raw data.
              It combines multiple disciplines from statistics, mathematics,
              programming, and even art! 🎨 Data analytics is further
              categorized into four different types of analytics.
            </p>

            <ol>
              <li>
                <strong>Descriptive Analytics</strong>: Analyze historical and
                current data to describe what happend (or is happening)
              </li>
              <li>
                <strong>Diagnostic Analytics</strong>: Use data to understand{" "}
                <em>why</em> something happend in the past
              </li>
              <li>
                <strong>Predictive Analytics</strong>: Predicts what is likely
                to happen in the future 🔮
              </li>
              <li>
                <strong>Prescriptive Analytics</strong>: Test potential outcomes
                of each decision using advanced algorithms and recommends the
                best course of action
              </li>
            </ol>
          </CenteredColumn>

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
                Steps in working with data
                <span className="accent blue" />
              </h2>

              <Row>
                <Col md={4}>
                  <div className={styles.item}>
                    <span className="label blue">Collect</span>

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
                    <span className="label blue">Analyze</span>

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
                    <span className="label blue">Communicate</span>

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

          <CenteredColumn className={styles.textBox}>
            <h3>Data Analytics in Accounting</h3>

            <span className="label blue">Managerial</span>
            <p>
              Managerial accountants can use analytics to gain advantage over
              competitors and execute strategic improvements. Despite these
              advantages, many organizations are still not utilizing data to
              make critical business decisions.
            </p>

            <span className="label blue">Tax</span>
            <p>
              Globalization, regulatory changes, shorter business cycles, and
              increased scrutiny mean that tax accountants need to become more
              agile to respond to market changes swiftly. Organizations can only
              make informed business decisions if they are able to locate,
              validate, and analyze tax data.
            </p>

            <span className="label blue">Audit</span>
            <p>
              Auditors can use data analytics to identify risks, assess risks,
              and perform testing on a larger scale. This leads to a higher
              audit quality by improving auditors' knowledge about transactions.
            </p>

            <h3>References</h3>

            <ul>
              <li>
                <a
                  href="https://www.cio.com/article/3606151/what-is-data-analytics-analyzing-and-managing-data-for-decisions.html"
                  title="What is data analytics? Analyzing and managing data for decisions"
                >
                  What is data analytics?
                </a>
              </li>
              <li>
                <a
                  href="https://www.selecthub.com/business-intelligence/predictive-descriptive-prescriptive-analytics/"
                  title="Descriptive vs Predictive vs Prescriptive vs Diagnostic Analytics"
                >
                  Descriptive vs Predictive vs Prescriptive vs Diagnostic
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="https://www.coursera.org/learn/applying-data-analytics-accounting"
                  title="Applying Data Analytics in Accounting"
                >
                  Coursera - Applying Data Analytics in Accounting
                </a>
              </li>
              <li>
                <a
                  href="https://www.pwc.com/my/en/services/consulting-index/analytics/tax-data-management-analytics.html"
                  title="Tax data management and analytics
"
                >
                  Tax data management and analytics
                </a>
              </li>
              <li>
                <a
                  href="https://www.wsj.com/articles/ai-comes-to-the-tax-code-11582713000"
                  title="AI Comes to the Tax Code"
                >
                  AI Comes to the Tax Code
                </a>
              </li>
              <li>
                <a
                  href="https://www.cio.com/article/3077871/the-four-stages-of-the-data-maturity-model.html"
                  title="The Four Stages of the Data Maturity Model"
                >
                  The Four Stages of the Data Maturity Model
                </a>
              </li>
              <li>
                <a
                  href="https://www.journalofaccountancy.com/issues/2015/apr/data-analytics-for-auditors.html"
                  title="Data analytics helps auditors gain deep insight"
                >
                  Data analytics helps auditors gain deep insight
                </a>
              </li>
            </ul>
          </CenteredColumn>
        </Container>
      </main>
    </Layout>
  );
}
