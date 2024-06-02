const TOKEN_ID_UPPER_LIMIT = BigInt(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);
const MAX_BIT_LENGTH = 256;

export const getRandomBigInt = (bitLength) => {
  let randomBytes = new Uint8Array(bitLength / 8);
  window.crypto.getRandomValues(randomBytes);
  let randomHex = Array.from(randomBytes, (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
  return BigInt("0x" + randomHex);
};

export const randomTokenId = () => {
  console.debug("randomTokenId() start");
  let bigInteger;
  let randomTimes = 0;
  do {
    bigInteger = getRandomBigInt(MAX_BIT_LENGTH);
    randomTimes++;
  } while (bigInteger >= TOKEN_ID_UPPER_LIMIT);
  let hexString = bigInteger.toString(16).toLowerCase();
  console.debug(
    "randomTokenId() end, hexString=%s, randomTimes=%d",
    hexString,
    randomTimes
  );
  return hexString;
};
