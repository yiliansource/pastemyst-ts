import fetch, { Response } from "node-fetch";

/**
 * Represents a HTTP method that can be used for requests.
 */
type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE";

/**
 * Provides a simple REST client implementation, to easily fetch or post data.
 */
class Client {
    /**
     * The token to be used for authorization, undefined if no authorization should be performed.
     */
    token?: string;

    /**
     * Checks if the user has provided a method of authorization.
     */
    isAuthorized(): boolean {
        return typeof this.token !== "undefined";
    }

    /**
     * The base endpoint to make requests to.
     */
    readonly baseEndpoint = "https://paste.myst.rs/api/v2";

    /**
     * Performs a GET request to the specified URL.
     *
     * @param url The URL to perform the request to. Note that this is relative to the base endpoint.
     * @returns The deserialized body or undefined on unsuccessful responses.
     */
    async get<T>(url: string): Promise<T | undefined> {
        return this.successOrUndefined(await this.makeRequest(url, "GET"));
    }

    /**
     * Performs a POST request to the specified URL.
     *
     * @param url The URL to perform the request to. Note that this is relative to the base endpoint.
     * @returns The deserialized body or undefined on unsuccessful responses.
     */
    async post<T>(url: string, body?: unknown): Promise<T | undefined> {
        return this.successOrUndefined(
            await this.makeRequest(url, "POST", body)
        );
    }

    /**
     * Performs a PATCH request to the specified URL.
     *
     * @param url The URL to perform the request to. Note that this is relative to the base endpoint.
     * @returns The deserialized body or undefined on unsuccessful responses.
     */
    async patch<T>(url: string, body?: unknown): Promise<T | undefined> {
        return this.successOrUndefined(
            await this.makeRequest(url, "PATCH", body)
        );
    }

    /**
     * Performs a DELETE request to the specified URL.
     *
     * @param url The URL to perform the request to. Note that this is relative to the base endpoint.
     * @returns If the operation was successful.
     */
    async del(url: string): Promise<boolean> {
        const response = await this.makeRequest(url, "DELETE");
        return response.status === 200;
    }

    /**
     * Returns the deserialized response body if the request was successful, undefined if not.
     */
    async successOrUndefined<T>(response: Response): Promise<T | undefined> {
        return response.status === 200
            ? ((await response.json()) as T)
            : undefined;
    }

    /**
     * Performs a request to the specified URL.
     *
     * @param url The URL to perform the request to. Note that this is relative to the base endpoint.
     * @param method The HTTP method to use.
     * @param body The (optional) body to submit. This will be stringified.
     *
     * @returns The awaited response.
     */
    async makeRequest(
        url: string,
        method: RequestMethod,
        body?: unknown
    ): Promise<Response> {
        const headers: { [key: string]: string } = {
            "Content-Type": "application/json",
        };

        if (this.token) {
            headers["Authorization"] = this.token;
        }

        return await fetch(this.baseEndpoint + url, {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : undefined,
        });
    }
}

/**
 * Represents the shared client to be used in requests.
 */
export const client = new Client();
