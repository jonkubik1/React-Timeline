import * as React from 'react';

import styles from './ReactTimeline.module.scss';
import { IReactTimelineProps } from './IReactTimelineProps';
import { Chrono } from "react-chrono";
import items from './TimeLineData';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jquery from 'jquery';

export interface IReactGetItemsState {
  items:[
    {
      "Title": "",
      "cardTitle": "",
      "Image": "",
      "cardDetailedText": ""
    }
  ];
}

export default class ReactTimeline extends React.Component<IReactTimelineProps, IReactGetItemsState> {


  /*public constructor(props: IReactTimelineProps, state: IReactGetItemsState){
    super(props);
    this.state = {
      items: [
        {
          "Title": "",
          "cardTitle": "",
          "Image": "",
          "cardDetailedText": ""
        }
      ]
    };
  }

  public componentDidMount() {
    setInterval(
      () => this.fetchDatafromSharePointList(),
      1000
    );
  }
  
  private fetchDatafromSharePointList(){ 
    var reactHandler = this; 
    jquery.ajax({ 
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('TimelineTest')/items`, 
        type: "GET", 
        headers:{'Accept': 'application/json; odata=verbose;'}, 
        success: function(resultData) { 
          reactHandler.setState({ 
            items: resultData.d.results 
          }); 
        }, 
        error : function(jqXHR, textStatus, errorThrown) { 
        } 
    }); 
  } */

  public render(): React.ReactElement<IReactTimelineProps> {
    return (
      <div className={ styles.reactTimeline }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <Chrono items={items} mode="HORIZONTAL" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
