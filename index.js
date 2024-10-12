const { createPublicClient, http, namehash } = require("viem");
const { base } = require("viem/chains");
const L2ResolverAbi = require("./abi/L2ResolverAbi");
const {
  convertReverseNodeToBytes,
} = require("./utils/convertReverseNodeToBytes");
const {
  BasenameTextRecordKeys,
  textRecordsKeysEnabled,
} = require("./utils/constant");

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
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get a all TextRecords
async function getBasenameTextRecords(
  basename,
  textRecordsKeys = textRecordsKeysEnabled
) {
  try {
    const readContracts = textRecordsKeys.map((key) =>
      buildBasenameTextRecordContract(basename, key)
    );
    const textRecords = await baseClient.multicall({
      contracts: readContracts,
    });

    return textRecords;
  } catch (error) {
    throw new Error(error.message);
  }
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
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getBasename,
  getBasenameAvatar,
  getBasenameTextRecord,
  getBasenameTextRecords,
  BasenameTextRecordKeys,
  textRecordsKeysEnabled,
};
