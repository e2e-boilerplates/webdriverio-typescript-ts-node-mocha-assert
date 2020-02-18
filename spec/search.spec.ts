import assert from "assert";

describe("Sandbox", () => {
  before(() => {
    browser.url("https://e2e-boilerplates.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    const title: string = browser.getTitle();
    const header: string = $("h1").getText();

    assert.strictEqual(title, "Sandbox");
    assert.strictEqual(header, "Sandbox");
  });
});
