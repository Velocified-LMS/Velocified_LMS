import { useMemo } from "react";
import styles from "./i-o-s-button-auto-width-bu.module.css";

const IOSButtonAutoWidthBu = ({
  showButtonAutoPrimary,
  iOSButtonAutoWidthBuBorderRadius,
  iOSButtonAutoWidthBuBorder,
  iOSButtonAutoWidthBuPosition,
  iOSButtonAutoWidthBuHeight,
  iOSButtonAutoWidthBuWidth,
  iOSButtonAutoWidthBuTop,
  iOSButtonAutoWidthBuRight,
  iOSButtonAutoWidthBuBottom,
  iOSButtonAutoWidthBuLeft,
  iOSButtonAutoWidthBuBoxShadow,
}) => {
  const iOSButtonAutoWidthBuStyle = useMemo(() => {
    return {
      borderRadius: iOSButtonAutoWidthBuBorderRadius,
      border: iOSButtonAutoWidthBuBorder,
      position: iOSButtonAutoWidthBuPosition,
      height: iOSButtonAutoWidthBuHeight,
      width: iOSButtonAutoWidthBuWidth,
      top: iOSButtonAutoWidthBuTop,
      right: iOSButtonAutoWidthBuRight,
      bottom: iOSButtonAutoWidthBuBottom,
      left: iOSButtonAutoWidthBuLeft,
      boxShadow: iOSButtonAutoWidthBuBoxShadow,
    };
  }, [
    iOSButtonAutoWidthBuBorderRadius,
    iOSButtonAutoWidthBuBorder,
    iOSButtonAutoWidthBuPosition,
    iOSButtonAutoWidthBuHeight,
    iOSButtonAutoWidthBuWidth,
    iOSButtonAutoWidthBuTop,
    iOSButtonAutoWidthBuRight,
    iOSButtonAutoWidthBuBottom,
    iOSButtonAutoWidthBuLeft,
    iOSButtonAutoWidthBuBoxShadow,
  ]);

  return (
    <div
      className={styles.iosButtonAutoWidthBu}
      style={iOSButtonAutoWidthBuStyle}
    >
      {showButtonAutoPrimary && (
        <div className={styles.buttonAutoPrimary}>Button auto primary</div>
      )}
    </div>
  );
};

export default IOSButtonAutoWidthBu;
