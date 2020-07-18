import React, { Component } from "react";
import API from "../utils/API";
import EmpList from "../components/emplist";
import Filter from "../components/filter";
import Footer from "../components/footer";
import Header from "../components/header";
import Search from "../components/search";
import Sort from "../components/sort";

class EmpDir extends Component {
  state = {
    empdirtbl: []
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.getAllEmps();
  }

  getAllEmps = () => {
   let self = this;
   
    API.getAllEmps()
   .done(function(data) {
     console.log(data);
    self.setState({
      empdirtbl: data.results
    });
  });

  };

  render() {
    return (
        <div>
        <Header />
        <div>
          <Search>

          </Search>
          <Filter>

          </Filter>
          <Sort>

          </Sort>
        </div>
        <EmpList attrEmpsArr={this.state.empdirtbl}>

        </EmpList>
        <Footer />
      </div>
    );
  }
}

export default EmpDir;
