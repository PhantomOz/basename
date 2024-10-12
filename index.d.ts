import { Address } from "viem";

type Basename = `${string}.base.eth`;

type RecordResult = {
  result: string;
  status: string;
};

export enum BasenameTextRecordKeys {
  Description = "description",
  Keywords = "keywords",
  Url = "url",
  Email = "email",
  Phone = "phone",
  Github = "com.github",
  Twitter = "com.twitter",
  Farcaster = "xyz.farcaster",
  Lens = "xyz.lens",
  Telegram = "org.telegram",
  Discord = "com.discord",
  Avatar = "avatar",
}

declare module "basename" {
  export function getBasename(address: Address): Promise<string>;
  export function getBasenameAvatar(basename: Basename): Promise<string>;
  export function getBasenameTextRecord(
    basename: string,
    key: BasenameTextRecordKeys
  ): Promise<string>;
  export function getBasenameTextRecords(
    basename: string,
    key?: BasenameTextRecordKeys
  ): Promise<RecordResult[]>;
}
