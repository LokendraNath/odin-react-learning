import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// Jest-dom matchers add karo
expect.extend(matchers);

// Har test ke baad cleanup karo
afterEach(() => {
  cleanup();
});
