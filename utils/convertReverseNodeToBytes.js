const { encodePacked, keccak256, namehash } = require("viem");
const { convertChainIdToCoinType } = require("./convertChainIdToCoinType");

/**
 * Convert an address to a reverse node for ENS resolution
 */
const convertReverseNodeToBytes = (address, chainId) => {
  const addressFormatted = address.toLocaleLowerCase();
  const addressNode = keccak256(addressFormatted.substring(2));
  const chainCoinType = convertChainIdToCoinType(chainId);
  const baseReverseNode = namehash(
    `${chainCoinType.toLocaleUpperCase()}.reverse`
  );
  const addressReverseNode = keccak256(
    encodePacked(["bytes32", "bytes32"], [baseReverseNode, addressNode])
  );
  return addressReverseNode;
};

module.exports = { convertReverseNodeToBytes };
