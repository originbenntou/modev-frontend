import { rest } from "msw";

const baseURL = (path: string) =>
  new URL(path, "http://localhost").toString();

export const handlers = [
  rest.get(baseURL("/api/books"), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        books: [
          { id: 1, title: "雨ニモマケズ", author: "宮沢 賢治" },
          { id: 2, title: "走れメロス", author: "太宰 治" },
          { id: 3, title: "こころ", author: "夏目 漱石" },
        ],
      })
    );
  }),
]