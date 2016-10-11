import nmap from "nmap";

export default  [
  nmap(16, (_, i) => [ Math.floor(i / 4) + 1, i % 4 + 0 ]),
  nmap(16, (_, i) => [ Math.floor(i / 4) + 1, i % 4 + 4 ]),
  nmap(16, (_, i) => [ Math.floor(i / 4) + 5, i % 4 + 0 ]),
  nmap(16, (_, i) => [ Math.floor(i / 4) + 5, i % 4 + 4 ]),
  nmap(16, (_, i) => [ i % 8 + 1, Math.floor(i / 8) + 0 ]),
  nmap(16, (_, i) => [ i % 8 + 1, Math.floor(i / 8) + 2 ]),
  nmap(16, (_, i) => [ i % 8 + 1, Math.floor(i / 8) + 4 ]),
  nmap(16, (_, i) => [ i % 8 + 1, Math.floor(i / 8) + 6 ]),
  [].concat(nmap(8, (_, i) => [ 0, i ]), nmap(8, (_, i) => [ i + 1, 8 ])),
];

export const MatrixKeys = "1234QWERASDFZXCV".split("");
