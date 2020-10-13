export interface GraphQLRequest {
  query: string;
  variables?: {};
  option?: { signal?: AbortSignal };
  endpoint?: string; // 'https://idel-graphql-api.herokuapp.com/graphql'
}

export interface GraphQLResponse {
  data: any[];
  error: string;
}

function failedRequest(errorMsg: string): GraphQLResponse {
  return {
    data: [],
    error: new Error(errorMsg).message
  };
}

export async function request({
  query,
  variables = {},
  option = {},
  endpoint = "https://idel-graphql-api.herokuapp.com/graphql"
}: GraphQLRequest): Promise<GraphQLResponse> {
  try {
    const controller = new AbortController();
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal
    };
    Object.assign(opts, option);

    let response = await fetch(endpoint, opts);
    let { signal } = option;
    if (signal) signal.addEventListener("abort", () => {
      controller.abort();
      return failedRequest('Request was aborted')
    });
    const timeout = setTimeout(() => {
      controller.abort();
      return failedRequest('Request Timeout')
    }, 3000);

    let result = await response.json();
    if (response) clearTimeout(timeout);
    return {
      data: result.data ? result.data : [],
      error: result.errors ? result.errors[0].message : undefined
    };
  } catch (error) {
    return failedRequest('Please check your internet')
  }
}