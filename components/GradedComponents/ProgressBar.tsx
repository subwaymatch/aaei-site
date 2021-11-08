import styles from "./ProgressBar.module.scss";
import clsx from "clsx";

interface IProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: IProgressBarProps) => {
  return (
    <div
      className={clsx(styles.progressBar, {
        [styles.notStarted]: progress === 0,
        [styles.inProgress]: progress > 0 && progress < 100,
        [styles.complete]: progress === 100,
      })}
    >
      <div className={styles.outerBox}>
        <div
          className={styles.progressBox}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
