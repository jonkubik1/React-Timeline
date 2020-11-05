import * as React from 'react';
import styles from './ReactTimeline.module.scss';
import { IReactTimelineProps } from './IReactTimelineProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Chrono } from "react-chrono";
import data from './TimeLineData';

export default class ReactTimeline extends React.Component<IReactTimelineProps, {}> {
  public render(): React.ReactElement<IReactTimelineProps> {
    return (
      <div className={ styles.reactTimeline }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <Chrono items={data} mode="HORIZONTAL" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
