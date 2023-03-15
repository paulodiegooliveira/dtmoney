import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "transaction 01",
          type: "deposit",
          category: "deposit",
          amount: 600,
          createdAt: new Date("2020-02-22 09:17:54"),
        },
        {
          id: 2,
          title: "transaction 01",
          type: "withdraw",
          category: "Casa",
          amount: 100,
          createdAt: new Date("2022-02-13 10:15:22"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "/api";

    this.get("/transactions.php", () => {
      return this.schema.all("transaction");
      // return [
      //   {
      //     id: 1,
      //     title: "transaction 01",
      //     amount: "400",
      //     type: "deposit",
      //     createdAt: new Date(),
      //   },
      // ];
    });

    this.post("/transactions.php", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
