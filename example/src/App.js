import React, { Component } from "react";

import ReactDatamaps from "react-datamaps-india";

const STATES = {
  "Andaman & Nicobar Island": {
    value: 20,
    content:{
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?"
    }
  },
  "Andhra Pradesh": {
    value: 0,
    content:{
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?"
    }
  },
  "Arunanchal Pradesh": {
    value: 0,
    content:{
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?"
    }
  },
  Assam: {
    value: 0,
    content:{
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?"
    }
  },
  Maharashtra: {
    value: 50,
    content:{
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?"
    }
  },
};



export default class App extends Component {
  state = {STATES,activeState:{data:STATES.Maharashtra,name:"India"}};

  onCountChange = e => {
    const target = e.target;
    if (!isFinite(target.value) || isNaN(target.value)) return;
    this.setState({
      [target.name]: {
        value: isFinite(parseInt(target.value)) ? parseInt(target.value) : 0
      }
    });
  };

  stateOnClick = (data,name) =>{
    this.setState({activeState:{data,name}});
  }

  render() {
    const { startColor, endColor, ...regionData } = this.state;
    return (
      <div className="container">
        <div
          style={{
            flex: 1,
            display: "inline-block",
            position: "relative",
            width: "100%",
            paddingBottom: "100%",
            verticalAlign: "top",
            overflow: "hidden"
          }}
        >
         
          <ReactDatamaps
            regionData={regionData}
            mapLayout={{  
              width: "",
              hoverTitle: "Count",
              noDataColor: "#D36418",
              borderColor: "#ffffff",
              hoverBorderColor: "pink",
              hoverColor: "green"
            }}
            hoverComponent={({ value }) => {
              return (
                <>
                  <p>{value.name}</p>
                </>
              );
            }}
            onClick={this.stateOnClick}
          />
        </div>
        <div className="editor">
         <h1>
          {
            this.state.activeState.name
          }
         </h1>
        </div>
        <style>{`
          .container {
            display: flex;
          }
          th {
            text-align: left;
          }
          table,
          th,
          td {
            border: 1px solid black;
            border-collapse: collapse;
          }
          th,
          td {
            padding: 10px 20px;
          }
          @media (max-width: 1000px) {
            .container {
              flex-direction: column;
            }
          }
          .editor {
            flex: 1;
            height: 100vh;
            overflow: scroll;
          }
        `}</style>
      </div>
    );
  }
}
