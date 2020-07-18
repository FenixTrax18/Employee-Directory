import $ from "jquery"

// Export an object containing methods we'll use for accessing the random user generator API

export default {
  getAllEmps: function() {
    return $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json'
    });
  }
};
