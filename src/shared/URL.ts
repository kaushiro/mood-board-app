export const resolveRoute = (route: any, context: any) =>
  Object.keys(context).reduce(
    (prev, key) =>
      prev
        .replace("(", "")
        .replace(")", "")
        .replace("//", "/")
        .replace(`:${key}`, context[key] || ""),
    route
  );
