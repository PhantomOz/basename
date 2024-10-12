# @superdevfavour/basename

A TypeScript utility that simplifies interactions with Ethereum Name Service (ENS) basenames, allowing you to retrieve basename information such as avatars, text records, and more. This package provides helper methods for working with ENS `.base.eth` domains.

## Features

- Fetch basename for a given Ethereum address.
- Retrieve avatars associated with ENS basenames.
- Access various text records (e.g., description, social media handles) from ENS basenames.

## Installation

Install the package using npm or yarn:

```bash
npm install @superdevfavour/basename
```

Or

```bash
yarn add @superdevfavour/basename
```

## Usage

Here's how to use the package in your TypeScript or JavaScript project:

### Importing the module

```typescript
import {
  getBasename,
  getBasenameAvatar,
  getBasenameTextRecord,
  getBasenameTextRecords,
  BasenameTextRecordKeys,
} from "basename";
```

### Example 1: Get a Basename from an Ethereum Address

```typescript
const address: Address = "0x1234...abcd";
const basename = await getBasename(address);
console.log(basename); // Output: example.base.eth
```

### Example 2: Get an Avatar for a Basename

```typescript
const avatar = await getBasenameAvatar("example.base.eth");
console.log(avatar); // Output: Avatar URL
```

### Example 3: Get Specific Text Records from a Basename

```typescript
const description = await getBasenameTextRecord(
  "example.base.eth",
  BasenameTextRecordKeys.Description
);
console.log(description); // Output: ENS description
```

### Example 4: Get All Text Records for a Basename

```typescript
const allRecords = await getBasenameTextRecords(
  "example.base.eth",
  BasenameTextRecordKeys
);
console.log(allRecords); // Output: { description: "...", url: "...", ... }
```

## API Reference

### `getBasename(address: Address): Promise<string>`

Fetches the ENS basename (e.g., `example.base.eth`) associated with a given Ethereum address.

- **Parameters:**
  - `address`: Ethereum address of type `Address` from `viem`.
  
- **Returns:**
  - A `Promise` that resolves to a `string` representing the basename.

### `getBasenameAvatar(basename: Basename): Promise<string>`

Retrieves the avatar URL for a given ENS basename.

- **Parameters:**
  - `basename`: The ENS basename, such as `example.base.eth`.
  
- **Returns:**
  - A `Promise` that resolves to a `string` containing the avatar URL.

### `getBasenameTextRecord(basename: string, key: BasenameTextRecordKeys): Promise<any>`

Fetches a specific text record from the ENS basename.

- **Parameters:**
  - `basename`: The ENS basename, such as `example.base.eth`.
  - `key`: A `BasenameTextRecordKeys` enum representing the desired text record.
  
- **Returns:**
  - A `Promise` that resolves to the text record value.

### `getBasenameTextRecords(basename: string, key: BasenameTextRecordKeys): Promise<any>`

Fetches all text records associated with the ENS basename.

- **Parameters:**
  - `basename`: The ENS basename, such as `example.base.eth`.
  - `key`: A `BasenameTextRecordKeys` enum to define the type of records.
  
- **Returns:**
  - A `Promise` that resolves to an object containing all text records.

### Enum: `BasenameTextRecordKeys`

This enum contains the keys that can be used to fetch various text records related to the basename.

- **Available Keys:**
  - `Description`: "description"
  - `Keywords`: "keywords"
  - `Url`: "url"
  - `Email`: "email"
  - `Phone`: "phone"
  - `Github`: "com.github"
  - `Twitter`: "com.twitter"
  - `Farcaster`: "xyz.farcaster"
  - `Lens`: "xyz.lens"
  - `Telegram`: "org.telegram"
  - `Discord`: "com.discord"
  - `Avatar`: "avatar"


### Key Points of the README:
1. **Introduction**: Briefly explains what the package does.
2. **Installation**: Includes how to install the package via npm or yarn.
3. **Usage**: Shows how to use the package with code examples for each function.
4. **API Reference**: Provides detailed descriptions of the package's functions and enum values.