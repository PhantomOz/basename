import { Address } from "viem";

export type Basename = `${string}.base.eth`;

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
  export async function getBasename(address: Address): Promise<string>;
  export async function getBasenameAvatar(basename: Basename): Promise<string>;
  export async function getBasenameTextRecord(
    basename: string,
    key: BasenameTextRecordKeys
  ): Promise<any>;
  export async function getBasenameTextRecords(
    basename: string,
    key: BasenameTextRecordKeys
  ): Promise<any>;
}
