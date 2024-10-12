const {
  getBasename,
  getBasenameAvatar,
  getBasenameTextRecord,
  getBasenameTextRecords,
  BasenameTextRecordKeys,
} = require("basename");

const newTextRecord = [
  BasenameTextRecordKeys.Avatar,
  BasenameTextRecordKeys.Farcaster,
  BasenameTextRecordKeys.Github,
];

async function testBasename() {
  const name = await getBasename("0xd7cbC847A17B3d24dAa861AD46fFe96405b59846");
  console.log(name);
}

async function testBasenameAvatar() {
  const avatar = await getBasenameAvatar("superdevfavour.base.eth");
  console.log(avatar);
}

async function testBasenameRecord() {
  const records = await getBasenameTextRecord(
    "superdevfavour.base.eth",
    BasenameTextRecordKeys.Github
  );
  console.log(records);
}

async function testBasenameRecords() {
  const records = await getBasenameTextRecords("superdevfavour.base.eth");
  console.log(records);
}

async function testBasenameRecordsWithKeys() {
  const records = await getBasenameTextRecords(
    "superdevfavour.base.eth",
    newTextRecord
  );
  console.log(records);
}

testBasename();
testBasenameAvatar();
testBasenameRecord();
testBasenameRecords();
testBasenameRecordsWithKeys();
