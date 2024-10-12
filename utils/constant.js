const BasenameTextRecordKeys = {
  Description: "description",
  Keywords: "keywords",
  Url: "url",
  Email: "email",
  Phone: "phone",
  Github: "com.github",
  Twitter: "com.twitter",
  Farcaster: "xyz.farcaster",
  Lens: "xyz.lens",
  Telegram: "org.telegram",
  Discord: "com.discord",
  Avatar: "avatar",
};

const textRecordsKeysEnabled = [
  BasenameTextRecordKeys.Description,
  BasenameTextRecordKeys.Keywords,
  BasenameTextRecordKeys.Url,
  BasenameTextRecordKeys.Github,
  BasenameTextRecordKeys.Email,
  BasenameTextRecordKeys.Phone,
  BasenameTextRecordKeys.Twitter,
  BasenameTextRecordKeys.Farcaster,
  BasenameTextRecordKeys.Lens,
  BasenameTextRecordKeys.Telegram,
  BasenameTextRecordKeys.Discord,
  BasenameTextRecordKeys.Avatar,
];

module.exports = { BasenameTextRecordKeys, textRecordsKeysEnabled };
