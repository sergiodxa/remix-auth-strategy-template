import { Strategy } from "remix-auth/strategy";

export class MyStrategy<U> extends Strategy<U, MyStrategy.VerifyOptions> {
	name = "change-me";

	constructor(
		protected options: MyStrategy.Options,
		verify: Strategy.VerifyFunction<U, MyStrategy.VerifyOptions>,
	) {
		super(verify);
		// Do something with the options here
	}

	async authenticate(request: Request): Promise<U> {
		// Implement your authentication logic here
		return this.verify({ request });
	}
}

export namespace MyStrategy {
	/**
	 * This interface declares what configuration the strategy needs from the
	 * developer to correctly work.
	 */
	export interface Options {
		something: "You may need";
	}

	/**
	 * This interface declares what the developer will receive from the strategy
	 * to verify the user identity in their system.
	 */
	export interface VerifyOptions {
		request: Request;
	}
}
