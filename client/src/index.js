import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import {BrowserRouter} from "react-router-dom";
import "animate.css";
import "./index.css";

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);

/* 

"blogs": [
    {
      "id": 1,
      "title": "First Time Home Owner Ideas",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl con",
      "img": "/images/post-1.jpg",
      "by": "Kristin Watson",
      "date": "Dec 19, 2021",
      "comments": [
        {
          "id": 1,
          "content": "Comment 1",
          "by": "John Doe",
          "date": "2022-01-01",
          "replies": [
            {
              "id": 1,
              "content": "Reply 1",
              "by": "John Doe",
              "date": "2022-01-02"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "How To Keep Your Furniture Clean",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl con",
      "img": "/images/post-2.jpg",
      "by": "Robert Fox",
      "date": "Dec 15, 2021",
      "comments": [
        {
          "id": 1,
          "content": "Comment 1",
          "by": "John Doe",
          "date": "2022-01-01",
          "replies": [
            {
              "id": 1,
              "content": "Reply 1",
              "by": "John Doe",
              "date": "2022-01-02"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "Small Space Furniture Apartment Ideas",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl con",
      "img": "/images/post-3.jpg",
      "by": "Kristin Watson",
      "date": "Dec 12, 2021",
      "comments": [
        {
          "id": 1,
          "content": "Comment 1",
          "by": "John Doe",
          "date": "2022-01-02",
          "replies": [
            {
              "id": 1,
              "content": "Reply 1",
              "by": "John Doe",
              "date": "2020-01-02"
            }
          ]
        }
      ]
    },
    {
      "id": 6,
      "title": "Blog 1",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl con",
      "img": "/images/post-3.jpg",
      "by": "John Doe",
      "date": "2050-07-01",
      "comments": [
        {
          "id": 1,
          "content": "Comment 1",
          "by": "John Doe",
          "date": "2022-07-01",
          "replies": [
            {
              "id": 1,
              "content": "Reply 1",
              "by": "John Doe",
              "date": "2020-01-01"
            }
          ]
        }
      ]
    }
  ],

"ourTeam": [
    {
      "img": "/images/person_1.jpg",
      "name": "Lawson Arnold",
      "title": "CEO, Founder, Atty.",
      "descripWork": "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
      "img": "/images/person_2.jpg",
      "name": "Jeremy Walker",
      "title": "CEO, Founder, Atty.",
      "descripWork": "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
      "img": "/images/person_3.jpg",
      "name": "Patrik White",
      "title": "CEO, Founder, Atty.",
      "descripWork": "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
      "img": "/images/person_1.jpg",
      "name": "Test Al-test",
      "title": "Front-end Developer.",
      "descripWork": "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    }
  ],
  "shippingAddress": [
    {
      "id": 1,
      "city": "",
      "country": ""
    },
    {
      "city": "سوريا",
      "country": "USA",
      "id": 2
    },
    {
      "city": "سوريا",
      "country": "India",
      "id": 3
    },
    {
      "city": "سوريا",
      "country": "USA",
      "id": 4
    },
    {
      "city": "سوريا",
      "country": "United Kingdom",
      "id": 5
    },
    {
      "city": "سوريا",
      "country": "India",
      "id": 6
    },
    {
      "city": "سوريا",
      "country": "India",
      "id": 7
    },
    {
      "city": "سوريا",
      "country": "USA",
      "id": 8
    },
    {
      "city": "سوريا",
      "country": "China",
      "id": 9
    },
    {
      "city": "سوريا",
      "country": "India",
      "id": 10
    },
    {
      "city": "سوريا",
      "country": "China",
      "id": 11
    },
    {
      "city": "city",
      "country": "China",
      "id": 12
    },
    {
      "city": "سوريا",
      "country": "China",
      "id": 13
    },
    {
      "city": "سوريا",
      "country": "United Kingdom",
      "id": 14
    },
    {
      "city": "سوريا",
      "country": "United Kingdom",
      "id": 15
    },
    {
      "city": "سوريا",
      "country": "China",
      "id": 16
    },
    {
      "city": "سوريا",
      "country": "China",
      "id": 17
    },
    {
      "city": "Philadelphia",
      "country": "India",
      "id": 18
    },
    {
      "city": "sdffdsf",
      "country": "United Kingdom",
      "id": 19
    },
    {
      "city": "دمشق",
      "country": "USA",
      "id": 20
    },
    {
      "city": "دمشق",
      "country": "USA",
      "id": 21
    },
    {
      "city": "سوريا",
      "country": "USA",
      "id": 22
    },
    {
      "city": "حلب",
      "country": "USA",
      "id": 23
    },
    {
      "city": "سوريا",
      "country": "India",
      "id": 24
    },
    {
      "city": "h",
      "country": "USA",
      "id": 25
    },
    {
      "city": "gj",
      "country": "Algeria",
      "id": 26
    },
    {
      "city": "ghjk",
      "country": "Syria",
      "id": 27
    },
    {
      "city": "damascus",
      "country": "Syria",
      "id": 28
    },
    {
      "city": "asdas",
      "country": "Azerbaijan",
      "id": 29
    }
  ]

*/
