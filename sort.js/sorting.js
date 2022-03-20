const alldata = [
  {
    name: "kawsar",
    vote: 5,
    date: "2020-01-20",
  },
  {
    name: "khayer",
    vote: 2,
    date: "2022-01-20",
  },
  {
    name: "amir",
    vote: 3,
    date: "2018-4-28",
  },
  {
    name: "arif",
    vote: 4,
    date: "2017-10-09",
  },
  {
    name: "mahin",
    vote: 1,
    date: "2010-09-22",
  },
];

const tableBody = document.getElementById("table-body");

alldata.forEach((data) => {
  tableBody.innerHTML = `
<tr>
<td>${data.name}</td>
<td>${data.vote}</td>
<td>${data.date}</td>
</tr>
`;
});
