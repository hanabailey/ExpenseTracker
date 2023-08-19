import React from "react";
import styles from "../Chart/Chart.module.css";
import ChartBar from "../Chart/ChartBar";

export const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // array 반환
  const totalMaximum = Math.max(...dataPointValues); // 위의 배열에서 최대 값을 찾아줌 

  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
