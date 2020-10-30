let firstUrl = "http://www.bluesuncorp.co.uk/cgi-bin/people.cgi";
let secondUrl = "http://www.bluesuncorp.co.uk/cgi-bin/places.cgi";

fetch(firstUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

fetch(secondUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
