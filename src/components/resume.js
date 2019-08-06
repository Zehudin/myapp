import React, { Component, Fragment } from 'react';
import { Grid, Cell } from 'react-mdl';

import base from './9.png';
import top from './8.png';
import right from './10.png';
import left from './111.png';

import blue_base from './99.png';
import blue_top from './88.png';
import blue_right from './1010.png';
import blue_left from './1111.png';
import * as classnames from "classnames";

const data = {
  base: {
    title: "Sofa Base:",
    items: [base, blue_base]
  },
  top: {
    title: "Sofa Top:",
    items: [top, blue_top]
  },
  right: {
    title: "Sofa Right Side:",
    items: [right, blue_right]
  },
  left: {
    title: "Sofa Left Side:",
    items: [left, blue_left]
  }
};

class Resume extends Component {
  state = {
    selected: [
        0,
        0,
        0,
        0
    ]
  };

  selectItem = (part, item) => () => {
    const selected = this.state.selected;
    selected[part] = item;
    this.setState({selected});
  };

  render() {
    const {selected} = this.state;
    return(
      <div>
        <Grid>
          <Cell col={8} className="sofa-img-container">
            <div className="sofa-imgs">
              <img src={data.right.items[selected[2]]} className="right-img"/>
              <img src={data.left.items[selected[3]]} className="left-img"/>
              <img src={data.top.items[selected[1]]} className="top-img"/>
              <img src={data.base.items[selected[0]]} className="base-img"/>
            </div>
          </Cell>
          <Cell col={4}>
            {Object.values(data).map((item, i)=> (
                <Fragment>
                  <h3>{item.title}</h3>
                  <div className="d-flex justify-content-between">
                    {item.items.map((choice, j)=> (
                        <img src={choice} onClick={this.selectItem(i, j)} className={classnames("picker-item", {"selected": selected[i] === j})}/>
                    ))}
                  </div>
                </Fragment>
            ))}
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
