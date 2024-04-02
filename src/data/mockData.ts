import { tokens } from "../theme";

interface errorCount {
  id: number;
  componentName: string;
  errorCount: number;
}

interface retrieveEventsInfo {
  id: string;
  topicName: string;
  url: URL;
  eventReceivedTime: Date;
  failedReason: string;
}

export const mockComponentDetailsInfo: retrieveEventsInfo[] = [
  {
    id: "6502f456724aq1",
    topicName: "Topic 1",
    url: new URL("https://example.com"),
    eventReceivedTime: new Date(),
    failedReason: "Failed due to network issue",
  },
  {
    id: "6502f456724aq2",
    topicName: "Topic 2",
    url: new URL("https://example.org"),
    eventReceivedTime: new Date(),
    failedReason: "Failed due to server error",
  },
  {
    id: "6502f456724aq3",
    topicName: "Topic 3",
    url: new URL("https://example.net"),
    eventReceivedTime: new Date(),
    failedReason: "Failed due to authentication error",
  },
  {
    id: "6502f456724aq4",
    topicName: "Topic 4",
    url: new URL("https://example.test"),
    eventReceivedTime: new Date(),
    failedReason: "Failed due to timeout",
  },
  {
    id: "6502f456724aq5",
    topicName: "Topic 5",
    url: new URL("https://example.io"),
    eventReceivedTime: new Date(),
    failedReason: "Failed due to data validation error",
  },
  {
    id: "6502f456724aq6",
    topicName: "Topic 6",
    url: new URL("https://example.co"),
    eventReceivedTime: new Date(),
    failedReason: "Failed due to database error",
  },
  {
    id: "6502f456724aq7",
    topicName: "Topic 7",
    url: new URL("https://example.biz"),
    eventReceivedTime: new Date(),
    failedReason: "Failed due to unknown error",
  },
  {
    id: "6502f456724aq8",
    topicName: "Topic 8",
    url: new URL("https://example.info"),
    eventReceivedTime: new Date(),
    failedReason: "Failed due to missing data",
  },
  {
    id: "6502f456724aq9",
    topicName: "Topic 9",
    url: new URL("https://example.org"),
    eventReceivedTime: new Date(),
    failedReason: "Failed due to server overload",
  },
  {
    id: "6502f456724aq10",
    topicName: "Topic 10",
    url: new URL("https://example.com"),
    eventReceivedTime: new Date(),
    failedReason: "Failed due to network congestion",
  },
];

export const mockErrorCountInfo: errorCount[] = [
  {
    id: 1,
    componentName: "ach-transfer-1",
    errorCount: 20,
  },
  {
    id: 2,
    componentName: "ach-transfer-2",
    errorCount: 820,
  },
  {
    id: 3,
    componentName: "ach-transfer-3",
    errorCount: 520,
  },
  {
    id: 4,
    componentName: "ach-transfer-4",
    errorCount: 20,
  },
  {
    id: 5,
    componentName: "ach-transfer-5",
    errorCount: 520,
  },
  {
    id: 6,
    componentName: "ach-transfer-6",
    errorCount: 320,
  },
  {
    id: 7,
    componentName: "ach-transfer-7",
    errorCount: 120,
  },
  {
    id: 8,
    componentName: "ach-transfer",
    errorCount: 420,
  },
];
