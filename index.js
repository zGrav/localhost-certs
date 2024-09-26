const main = () => {
  console.log(
    "hi from z-localhost-certs, this package just generates .crt/.key files, please use require.resolve."
  );
  console.log(
    "e.g: const key = path.resolve(require.resolve('z-localhost-certs'),'..','localhost.key')"
  );
  console.log(
    "e.g: const cert = path.resolve(require.resolve('z-localhost-certs'),'..','localhost.crt')"
  );
};
main();
module.exports = main;
