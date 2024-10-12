const { createPublicClient, http } = require("viem");
const { base } = require("viem/chains");
const L2ResolverAbi = require("./L2ResolverAbi");
const {
  convertReverseNodeToBytes,
} = require("./utils/convertReverseNodeToBytes");

// Function to resolve a Basename
const BASENAME_L2_RESOLVER_ADDRESS =
  "0xC6d566A56A1aFf6508b41f6c90ff131615583BCD";

const baseClient = createPublicClient({
  chain: base,
  transport: http("https://mainnet.base.org"),
});

async function getBasenameAvatar(basename) {
  const avatar = await baseClient.getEnsAvatar({
    name: basename,
    universalResolverAddress: BASENAME_L2_RESOLVER_ADDRESS,
  });
  console.log(avatar);
  return avatar;
}

function buildBasenameTextRecordContract(basename, key) {
  return {
    abi: L2ResolverAbi,
    address: BASENAME_L2_RESOLVER_ADDRESS,
    args: [namehash(basename), key],
    functionName: "text",
  };
}

// Get a single TextRecord
async function getBasenameTextRecord(basename, key) {
  try {
    const contractParameters = buildBasenameTextRecordContract(basename, key);
    const textRecord = await baseClient.readContract(contractParameters);
    return textRecord;
  } catch (error) {}
}

// Get a all TextRecords
async function getBasenameTextRecords(basename) {
  try {
    const readContracts = textRecordsKeysEnabled.map((key) =>
      buildBasenameTextRecordContract(basename, key)
    );
    const textRecords = await baseClient.multicall({
      contracts: readContracts,
    });

    return textRecords;
  } catch (error) {}
}

async function getBasename(address) {
  try {
    const addressReverseNode = convertReverseNodeToBytes(address, base.id);
    const basename = await baseClient.readContract({
      abi: L2ResolverAbi,
      address: BASENAME_L2_RESOLVER_ADDRESS,
      functionName: "name",
      args: [addressReverseNode],
    });
    if (basename) {
      return basename;
    }
  } catch (error) {}
}

module.exports = {
  getBasename,
  getBasenameAvatar,
  getBasenameTextRecord,
  getBasenameTextRecords,
};
