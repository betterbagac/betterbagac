export class ApiError extends Error {
  readonly url: string;
  readonly status?: number;
  readonly info?: unknown;

  constructor(message: string, url: string, status?: number, info?: unknown) {
    super(message);
    this.name = "ApiError";
    this.url = url;
    this.status = status;
    this.info = info;
  }
}

export async function fetcher<T>(url: string, init?: RequestInit): Promise<T> {
  let res: Response;

  try {
    res = await fetch(url, {
      ...init,
      headers: { Accept: "application/json", ...init?.headers },
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw err;
    }
    throw new ApiError(
      err instanceof Error ? err.message : "Network request failed",
      url,
    );
  }

  if (!res.ok) {
    let info: unknown = null;
    try {
      info = await res.json();
    } catch {
      // Non-JSON error body — nothing to parse.
    }
    throw new ApiError(
      `Request failed with ${res.status}`,
      url,
      res.status,
      info,
    );
  }

  return (await res.json()) as T;
}
