import { useState } from "react";
import _ from "lodash";
import { Col, Row } from "react-bootstrap";
import { RiUploadLine } from "react-icons/ri";
import { IoRefresh, IoCheckmark } from "react-icons/io5";
import styles from "./MultipleChoiceQuestion.module.scss";
import { definitions } from "types/database";
import useSupabaseAuth from "hooks/useSupabaseAuth";
import InstructionText from "./InstructionText";
import MultipleChoiceOption from "./MultipleChoiceOption";
import { QueryStatusEnum } from "types";
import Button from "components/ui/Button";
import { IconType } from "react-icons";
import { ColorTheme } from "types/color-theme";
import { IMultipleChoiceQuestionWithOptions } from "types/database/multiple-choice";

interface IMultipleChoiceQuestionProps {
  status: QueryStatusEnum;
  questionData: IMultipleChoiceQuestionWithOptions;
  answersData: definitions["multiple_choice_options"][];
  showResult?: boolean;
  onSubmit: (userSelectionIds: number[]) => Promise<void>;
  onReset: () => void;
}

export default function MultipleChoiceQuestion({
  status,
  questionData,
  answersData,
  showResult,
  onSubmit,
  onReset,
}: IMultipleChoiceQuestionProps) {
  const { user } = useSupabaseAuth();
  const [userSelections, setUserSelections] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isLoading = status === QueryStatusEnum.LOADING;
  const isUserCorrect =
    answersData &&
    userSelections.length > 0 &&
    userSelections.every((id) =>
      answersData
        .filter((o) => o.is_correct)
        .map((o) => o.id)
        .includes(id)
    );

  console.log("=============");
  console.log(`isLoading=${isLoading}`);
  console.log(`isUserCorrect=${isUserCorrect}`);
  console.log(`isSubmitting=${isSubmitting}`);

  console.log(
    !showResult && userSelections.length !== questionData?.num_correct_options
  );

  const submit = async () => {
    setIsSubmitting(true);

    await onSubmit(userSelections);

    setIsSubmitting(false);
  };

  const onToggle = (optionId) => {
    if (questionData.num_correct_options === 1) {
      if (!userSelections.includes(optionId)) {
        setUserSelections([optionId]);
      }
    } else if (userSelections.includes(optionId)) {
      setUserSelections((prevSelections) =>
        prevSelections.filter((id) => id !== optionId)
      );
    } else {
      setUserSelections((prevSelections) => [...prevSelections, optionId]);
    }
  };

  const reset = () => {
    onReset();

    setUserSelections([]);
  };

  const getSubmitButtonIconComponent = (): IconType | null => {
    if (isLoading || isSubmitting) {
      return null;
    } else if (isUserCorrect) {
      return IoCheckmark;
    } else if (showResult && !isUserCorrect) {
      return IoRefresh;
    } else {
      return RiUploadLine;
    }
  };

  const getSubmitButtonMessage = () => {
    let submitButtonMessage = "";
    let diff = userSelections.length - questionData?.num_correct_options;

    if (isLoading) {
      submitButtonMessage = "Loading";
    } else if (isSubmitting) {
      submitButtonMessage = "Submitting";
    } else if (showResult) {
      if (isUserCorrect) {
        submitButtonMessage = "Correct";
      } else {
        submitButtonMessage = "Try again";
      }
    } else if (diff > 0) {
      submitButtonMessage = `Unselect ${diff} option${
        diff > 1 ? "s" : ""
      } to submit ${"•".repeat(diff)}`;
    } else if (diff < 0) {
      submitButtonMessage = `Select ${-diff} more to submit ${"•".repeat(
        -diff
      )}`;
    } else {
      submitButtonMessage = "Submit";
    }

    return submitButtonMessage;
  };

  return (
    <div className={styles.questionWrapper}>
      <Row className="g-0">
        <Col lg={6} className={styles.equalHeightCol}>
          <div className={styles.instructionsWrapper}>
            <InstructionText
              isLoading={isLoading}
              labelText="Question"
              textMarkdown={questionData?.text_markdown}
              className={styles.inner}
            />
          </div>
        </Col>

        <Col lg={6} className={styles.equalHeightCol}>
          <div className={styles.optionsAndControlsWrapper}>
            <div className={styles.optionsWrapper}>
              <span className="label small black">
                {isLoading
                  ? "Loading Options"
                  : questionData.options
                  ? `Select ${questionData.num_correct_options}`
                  : "No option item"}
              </span>

              {isLoading || !questionData.options
                ? null
                : questionData.options.map((o) => (
                    <MultipleChoiceOption
                      key={o.id}
                      isSelected={userSelections.includes(o.id)}
                      disabled={isSubmitting}
                      optionData={o}
                      answerData={answersData?.find((a) => a.id === o.id)}
                      onClick={() => onToggle(o.id)}
                      showResult={showResult}
                    />
                  ))}
            </div>

            <div className={styles.controls}>
              <Button
                onClick={showResult ? reset : submit}
                tooltip={
                  userSelections.length !== questionData?.num_correct_options
                    ? `Select ${
                        questionData?.num_correct_options -
                        userSelections.length
                      } more`
                    : `Submit`
                }
                disabled={
                  isLoading ||
                  (!showResult &&
                    userSelections.length !==
                      questionData?.num_correct_options) ||
                  isSubmitting ||
                  isUserCorrect
                }
                label={getSubmitButtonMessage()}
                IconComponent={getSubmitButtonIconComponent()}
                colorTheme={ColorTheme.Black}
                fullWidth
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
