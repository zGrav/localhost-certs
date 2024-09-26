const fs = require("fs");
const path = require("path");
const selfsigned = require("selfsigned");

const pems = selfsigned.generate(
    { name: "localhost", value: "localhost" },
    {
        keySize: 2048,
        days: 825,
        notBeforeDate: new Date(),
        algorithm: "rsa",
        extensions: [{ name: "basicConstraints", cA: true }],
        pkcs7: true,
    }
);

fs.writeFileSync(path.join(__dirname, "localhost.key"), pems.private);
fs.writeFileSync(path.join(__dirname, "localhost.crt"), pems.cert);
