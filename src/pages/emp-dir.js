import React, { Component } from "react";
import API from "../utils/API";
import EmpList from "../components/emplist";
import Footer from "../components/footer";
import Header from "../components/header";
import Search from "../components/search";
import $ from "jquery"

class EmpDir extends Component {
  state = {
    empDirTbl: [],
    empDirTblMod: []
  };


  componentDidMount() {
    this.getAllEmps();
  }

  getAllEmps = () => {
    // TO MAKE API CALL ONCE SERVER IS BACK UP
    // let self = this;
    // API.getAllEmps()
    //   .done(function (data) {
    //     console.log(data);
    //     self.setState({
    //       empDirTbl: data.results,
    //       empDirTblMod: data.results
    //     });
    //   });

    let tempEmps = [
      { "name": { "first": "Wesley", "last": "Brown" }, "email": "wesley.brown@example.com", "phone": "(014)-742-5338", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/57.jpg" } },
{ "name": { "first": "Ray", "last": "Garrett" }, "email": "ray.garrett@example.com", "phone": "(800)-024-1299", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg" } },
{ "name": { "first": "Heather", "last": "Williams" }, "email": "heather.williams@example.com", "phone": "(095)-224-7703", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg" } },
{ "name": { "first": "Felicia", "last": "Carpenter" }, "email": "felicia.carpenter@example.com", "phone": "(652)-766-7272", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg" } },
{ "name": { "first": "Bernard", "last": "Wright" }, "email": "bernard.wright@example.com", "phone": "(910)-035-7300", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/11.jpg" } },
{ "name": { "first": "Aiden", "last": "Perry" }, "email": "aiden.perry@example.com", "phone": "(824)-252-8725", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg" } },
{ "name": { "first": "Jessie", "last": "Griffin" }, "email": "jessie.griffin@example.com", "phone": "(544)-340-1089", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg" } },
{ "name": { "first": "Richard", "last": "Craig" }, "email": "richard.craig@example.com", "phone": "(493)-171-8729", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg" } },
{ "name": { "first": "Travis", "last": "Martinez" }, "email": "travis.martinez@example.com", "phone": "(729)-783-2020", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg" } },
{ "name": { "first": "Ella", "last": "Garrett" }, "email": "ella.garrett@example.com", "phone": "(237)-496-0515", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg" } },
{ "name": { "first": "Raymond", "last": "Roberts" }, "email": "raymond.roberts@example.com", "phone": "(404)-626-8948", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg" } },
{ "name": { "first": "Deanna", "last": "Wallace" }, "email": "deanna.wallace@example.com", "phone": "(944)-894-9202", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg" } },
{ "name": { "first": "Vicki", "last": "Jones" }, "email": "vicki.jones@example.com", "phone": "(494)-268-9271", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg" } },
{ "name": { "first": "Theresa", "last": "Dean" }, "email": "theresa.dean@example.com", "phone": "(666)-241-1516", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg" } },
{ "name": { "first": "Rene", "last": "Montgomery" }, "email": "rene.montgomery@example.com", "phone": "(662)-260-9905", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg" } },
{ "name": { "first": "Janice", "last": "Mckinney" }, "email": "janice.mckinney@example.com", "phone": "(511)-507-8351", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/71.jpg" } },
{ "name": { "first": "Jessica", "last": "Thompson" }, "email": "jessica.thompson@example.com", "phone": "(164)-347-2546", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg" } },
{ "name": { "first": "Randy", "last": "Gibson" }, "email": "randy.gibson@example.com", "phone": "(499)-898-4905", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg" } },
{ "name": { "first": "Tom", "last": "Tucker" }, "email": "tom.tucker@example.com", "phone": "(400)-804-7861", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg" } },
{ "name": { "first": "Jar", "last": "Turner" }, "email": "jar.turner@example.com", "phone": "(219)-954-5993", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg" } },
{ "name": { "first": "Dolores", "last": "Simmons" }, "email": "dolores.simmons@example.com", "phone": "(506)-422-0417", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg" } },
{ "name": { "first": "Marcia", "last": "Duncan" }, "email": "marcia.duncan@example.com", "phone": "(419)-363-0749", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg" } },
{ "name": { "first": "Mia", "last": "Austin" }, "email": "mia.austin@example.com", "phone": "(901)-620-4821", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg" } },
{ "name": { "first": "Frank", "last": "Nichols" }, "email": "frank.nichols@example.com", "phone": "(158)-762-9102", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg" } },
{ "name": { "first": "Christian", "last": "Castro" }, "email": "christian.castro@example.com", "phone": "(061)-605-3767", "picture": { "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg" } }
    ];

    this.setState({
      empDirTbl: tempEmps,
      empDirTblMod: tempEmps
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
    return empDirTbl.filter(function (i) {
      let lastname = i.name.last.toLowerCase();
      let firstname = i.name.first.toLowerCase();
      let search = searchStr.toLowerCase();

      return lastname.includes(search) || firstname.includes(search);
    });
  };

  handleSort = event => {
    let sortProperty = "last";
    let sortDirection = "ascending";
    let domToJQ = $(event.target)

    sortProperty = domToJQ.attr("column");

    if (domToJQ.attr("sorter") == "true") {
      sortDirection = "ascending";
      domToJQ.attr("sorter", "false");
    }
    else {
      sortDirection = "descending";
      domToJQ.attr("sorter", "true");
    }

    let sortedArr = [];

    if (sortProperty == "first" && sortDirection == "ascending") {
      sortedArr = this.state.empDirTblMod.sort(function (empObj1, empObj2) {
        if (empObj1.name.first.toLowerCase() > empObj2.name.first.toLowerCase())
          return 1;
        else if (empObj1.name.first.toLowerCase() < empObj2.name.first.toLowerCase())
          return -1;
        else {
          return 0;
        }
      });
    }
    else if (sortProperty == "first" && sortDirection == "descending") {
      sortedArr = this.state.empDirTblMod.sort(function (empObj1, empObj2) {
        if (empObj1.name.first.toLowerCase() > empObj2.name.first.toLowerCase())
          return -1;
        else if (empObj1.name.first.toLowerCase() < empObj2.name.first.toLowerCase())
          return 1;
        else {
          return 0;
        }
      });
    }
    else if (sortProperty == "last" && sortDirection == "ascending") {
      sortedArr = this.state.empDirTblMod.sort(function (empObj1, empObj2) {
        if (empObj1.name.last.toLowerCase() > empObj2.name.last.toLowerCase())
          return 1;
        else if (empObj1.name.last.toLowerCase() < empObj2.name.last.toLowerCase())
          return -1;
        else {
          return 0;
        }
      });
    }
    else if (sortProperty == "last" && sortDirection == "descending") {
      sortedArr = this.state.empDirTblMod.sort(function (empObj1, empObj2) {
        if (empObj1.name.last.toLowerCase() > empObj2.name.last.toLowerCase())
          return -1;
        else if (empObj1.name.last.toLowerCase() < empObj2.name.last.toLowerCase())
          return 1;
        else {
          return 0;
        }
      });
    }

    this.setState({
      empDirTblMod: sortedArr
    });

  };


  render() {
    return (
      <div>
        <Header />
        <div>
          <Search
            handleInputChange={this.handleInputChange}
          />
        </div>
        <EmpList attrEmpsArr={this.state.empDirTblMod} handleSort={this.handleSort}>

        </EmpList>
        <Footer />
      </div>
    );
  }
}

export default EmpDir;
