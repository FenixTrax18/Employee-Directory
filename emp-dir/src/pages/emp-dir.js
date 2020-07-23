import React, { Component } from "react";
import API from "../utils/API";
import EmpList from "../components/emplist";
import Footer from "../components/footer";
import Header from "../components/header";
import Search from "../components/search";
import Sort from "../components/sort";
import { data } from "jquery";

class EmpDir extends Component {
  state = {
    empDirTbl: [],
    empDirTblMod: []  
  };


  componentDidMount() {
    this.getAllEmps();
  }

  getAllEmps = () => {
   let self = this;
   
    API.getAllEmps()
   .done(function(data) {
     console.log(data);
      self.setState({
        empDirTbl: data.results,
        empDirTblMod: data.results
      });
    });
  };
  
  handleInputChange = event => {
    const empDirTblSrch = this.searchEmpDir(this.state.empDirTbl, event.target.value);
    this.setState({
      empDirTblMod: empDirTblSrch
    });
  };

  searchEmpDir = (empDirTbl, searchStr) => {
    let self = this;
    return empDirTbl.filter(function(i) {
      let lastname = i.name.last.toLowerCase();
      let firstname = i.name.first.toLowerCase();
      let search = searchStr.toLowerCase();

      return lastname.includes(search) || firstname.includes(search);
    });
  };

  handleSearchClick = event => {
    event.preventDefault();
    const empDirTblSrch = this.searchEmpDir(this.state.empDirTbl);
    this.setState({
      empDirTblMod: empDirTblSrch
    });
  };

  render() {
    return (
        <div>
        <Header />
        <div>
          <Search 
            handleSearchClick={this.handleSearchClick}
            handleInputChange={this.handleInputChange}
          />

          <Sort/>
        </div>
        <EmpList attrEmpsArr={this.state.empDirTblMod}>

        </EmpList>
        <Footer />
      </div>
    );
  }
}

export default EmpDir;
