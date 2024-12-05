import { describe, expect, mock, test } from "bun:test";
import { createCookieSessionStorage } from "react-router";
import { MyStrategy } from "../src";

describe(MyStrategy.name, () => {
	const verify = mock();
	// You will probably need a sessionStorage to test the strategy.
	const sessionStorage = createCookieSessionStorage({
		cookie: { secrets: ["s3cr3t"] },
	});

	test("should have the name of the strategy", () => {
		const strategy = new MyStrategy({ something: "You may need" }, verify);
		expect(strategy.name).toBe("change-me");
	});

	test.todo("Write more tests to check everything works as expected");
});
