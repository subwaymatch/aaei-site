import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";
import { supabaseClient } from "lib/supabase/supabaseClient";
import {
  ChallengeTypeEnum,
  IChallengeResultSummary,
  IChallengeTypeAndId,
} from "types/challenges";
import { useEffect, useState } from "react";
import saveAs from "file-saver";
import dayjs from "dayjs";
import { Box, Button, ButtonGroup, Modal } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import { VscEye } from "react-icons/vsc";
import ChallengeResultsModal from "components/challenges/view/ChallengeResultsModal";
import lectureComponents from "data/lectureComponents";
import { ILectureComponent } from "types/lecture-component";

interface IChallengeResultsSummaryPageProps {
  lectureComponent: ILectureComponent;
  slug: string;
}

export default function ChallengeResultsSummary({
  lectureComponent,
  slug,
}: IChallengeResultsSummaryPageProps) {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [detailUserId, setDetailUserId] = useState<string>(null);
  const [results, setResults] = useState<IChallengeResultSummary[]>(null);
  const challenges: IChallengeTypeAndId[] = [];

  lectureComponent.multipleChoiceIds.forEach((id) => {
    challenges.push({
      challengeId: id,
      challengeType: ChallengeTypeEnum.MultipleChoice,
    });
  });

  lectureComponent.pythonChallengeIds.forEach((id) => {
    challenges.push({
      challengeId: id,
      challengeType: ChallengeTypeEnum.PythonChallenge,
    });
  });

  const load = async () => {
    const { data, error } = await supabaseClient.rpc<IChallengeResultSummary>(
      "get_challenge_results_summary",
      {
        python_challenge_ids: lectureComponent.pythonChallengeIds,
        multiple_choice_ids: lectureComponent.multipleChoiceIds,
      }
    );

    setResults(data);
  };

  const handleDetailModalClose = () => {
    setIsDetailModalOpen(false);
    setDetailUserId(null);
  };

  const openDetailModal = (userId: string) => {
    setDetailUserId(userId);
    setIsDetailModalOpen(true);
  };

  const download = async () => {
    const { data, error } = await supabaseClient
      .rpc<IChallengeResultSummary>("get_challenge_results_summary", {
        python_challenge_ids: lectureComponent.pythonChallengeIds,
        multiple_choice_ids: lectureComponent.multipleChoiceIds,
      })
      .csv();

    var blob = new Blob([data], { type: "text/csv;charset=utf-8" });

    saveAs(blob, `challenges-summary-${dayjs().format("YYYYMMDD-hhmmss")}.csv`);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Layout>
      <div className={styles.page}>
        <Container>
          {lectureComponent.title && (
            <Row>
              <Col>
                <h1 className={styles.noteTitle}>
                  {lectureComponent.title} Results Summary
                </h1>
              </Col>
            </Row>
          )}

          {!results && (
            <Row>
              <Col>Loading...</Col>
            </Row>
          )}

          {results && (
            <>
              <Row>
                <Col>
                  <Box
                    sx={{
                      marginBottom: "2rem",
                    }}
                  >
                    <ButtonGroup>
                      <Link href={`/notes/${slug}`}>
                        <Button
                          size="large"
                          disableElevation
                          startIcon={<ArrowBackIcon />}
                        >
                          Back to {lectureComponent.title}
                        </Button>
                      </Link>

                      <Button
                        size="large"
                        disableElevation
                        onClick={download}
                        startIcon={<DownloadIcon />}
                      >
                        Download as CSV
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Col>
              </Row>

              <Row>
                <Col>
                  <table className="left">
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Display Name</th>
                        <th>Correct Count</th>
                        <th>Number of Challenges</th>
                        <th>Percentage</th>
                        <th>Details</th>
                        <th>Last Success</th>
                      </tr>
                    </thead>

                    <tbody>
                      {results?.map((o) => (
                        <tr key={o.uid}>
                          <td>{o.email}</td>
                          <td>{o.display_name}</td>
                          <td>{o.num_correct}</td>
                          <td>{o.num_challenges}</td>
                          <td>{o.percentage}%</td>
                          <td>
                            <Button
                              onClick={() => openDetailModal(o.uid)}
                              variant="outlined"
                              size="small"
                              startIcon={<VscEye />}
                            >
                              View
                            </Button>
                          </td>
                          <td>
                            {o.last_success &&
                              dayjs(o.last_success).format(
                                "YYYY-MM-DD hh:mm a"
                              )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>

      <ChallengeResultsModal
        challenges={challenges}
        userId={detailUserId}
        isOpen={isDetailModalOpen}
        handleClose={handleDetailModalClose}
      />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const lectureComponent = lectureComponents.find((o) => o.slug === slug);

  return {
    props: {
      slug: params.slug,
      lectureComponent,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = lectureComponents
    // Remove file extensions for page paths
    .map((o) => {
      return { params: { slug: o.slug } };
    });

  return {
    paths,
    fallback: false,
  };
};
