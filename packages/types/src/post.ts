import { JSONValue, Link } from "@packages/json-api";

export type Post = {
  id: string;

  type: "posts";

  attributes: {
    body: import("@portabletext/types").PortableTextBlock;

    tags: string[];

    title: string;
  };

  links: Record<string, Link>;

  meta?: Record<string, JSONValue>;
};
