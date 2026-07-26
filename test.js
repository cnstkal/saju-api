const http = require("http");

const data = JSON.stringify({
  year: 1995,
  month: 1,
  day: 20,
  hour: 10,
  minute: 30,
  gender: "남",
  calendar: "solar"
});

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/saju",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(data)
  }
};

const req = http.request(options, (res) => {
  let body = "";

  res.on("data", (chunk) => {
    body += chunk;
  });

  res.on("end", () => {
    
console.log(
  JSON.stringify(
    JSON.parse(body),
    null,
    2
  )
);
  });
});

req.on("error", (err) => {
  console.error(err);
});

req.write(data);
req.end();