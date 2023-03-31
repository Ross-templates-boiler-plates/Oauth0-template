jest.mock("./util/fetchData", () => ({
  fetchData: jest.fn(() => Promise.resolve({ title: "1234" })),
}));

import { main2 } from "./";
describe("happy path", () => {
  it("main", async () => {
    const res = main2();
  });
});
