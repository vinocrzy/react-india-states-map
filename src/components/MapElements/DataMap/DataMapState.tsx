import * as React from "react";

interface DatamapStateProps {
  path(): string;
  mouseEnterOnState(name: string, value: number, index: number): void;
  name: string;
  value: any;
  fillColor: string;
  hoverColor?: string;
  borderColor: string;
  hoverBorderColor?: string;
  index: number;
  onClick(data:any,name:string):void;
}

class DatamapState extends React.Component<DatamapStateProps> {
  state = {
    isActive: false
  };

  constructor(props: DatamapStateProps) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleMouseLeave);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleMouseLeave);
  }

  handleMouseEnter() {
    const { name, value, index } = this.props;

    this.setState({
      isActive: true
    });
    this.props.mouseEnterOnState(name, value, index);
  }

  handleMouseLeave() {
    this.setState({
      isActive: false
    });
  }

  render() {
    const stateStyle = {
      fill: this.state.isActive
        ? this.props.hoverColor || "#FFCCBC"
        : this.props.fillColor,
      stroke: this.state.isActive
        ? this.props.hoverBorderColor || "#FF5722"
        : this.props.borderColor,
      strokeWidth: 0.5
    };
    return (
      <path
        className="datamap-state"
        style={stateStyle}
        d={this.props.path()}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={()=>this.props.onClick(this.props.value,this.props.name)}
      />
    );
  }
}

export default DatamapState;
