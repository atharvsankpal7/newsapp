import React,{Component} from "react";
export class Page_Navingation_Arrows extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (<div className="container page-navigation d-flex justify-content-between p-3">
            <button disabled={this.props.currentPage === 1} className={`btn btn-${this.props.colorMode} border-${this.props.textColor}`} onClick={this.props.handlePreviousBtnClick}>
                <b>&larr; Previous</b>
            </button>
            <button disabled={this.props.totalPageCount <= this.props.currentPage} className={`btn btn-${this.props.colorMode} border-${this.props.textColor}`} onClick={this.props.handleNextBtnClick}>
                <b>&rarr; Next</b>
            </button>
        </div>);
  }

}
