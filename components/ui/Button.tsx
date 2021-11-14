import Tippy from "@tippyjs/react";
import clsx from "clsx";
import { IconType } from "react-icons";
import { isMobile } from "react-device-detect";
import styles from "./Button.module.scss";
import { ColorTheme } from "types/color-theme";
import { CircularProgress } from "@material-ui/core";

export interface IButtonProps {
  className?: string;
  tooltip?: React.ReactNode;
  label: string;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
  IconComponent?: IconType;
  fullWidth?: boolean;
  colorTheme?: ColorTheme;
}

export default function Button({
  className,
  tooltip,
  label,
  loading,
  disabled,
  onClick,
  IconComponent,
  fullWidth,
  colorTheme,
}: IButtonProps) {
  fullWidth = typeof fullWidth === "undefined" ? false : !!fullWidth;

  return (
    <Tippy
      content={tooltip}
      className="tippy"
      placement="bottom"
      offset={[0, -4]}
      theme="light"
      disabled={!tooltip || isMobile}
    >
      <div
        className={clsx(styles.button, {
          [styles[colorTheme?.toLowerCase()]]:
            typeof colorTheme !== "undefined",
          [className]: !!className,
          [styles.disabled]: disabled,
          [styles.fullWidth]: fullWidth,
          [styles.hasIcon]: IconComponent,
        })}
        onClick={async (e) => {
          e.preventDefault();

          if (disabled) {
            return;
          }

          onClick();
        }}
      >
        {loading && (
          <div style={{ marginRight: "0.2rem" }}>
            <CircularProgress color="inherit" size={16} />
          </div>
        )}

        {IconComponent && !loading && (
          <div className={styles.iconWrapper}>
            <IconComponent className={styles.reactIcon} />
          </div>
        )}
        <span className={styles.label}>{label}</span>
      </div>
    </Tippy>
  );
}
