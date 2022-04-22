import { useTransactions } from "../../hooks/useTransactionsContexts";
import { Container } from "./style";

export function TransactionTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>

              <td className={transaction.type}>
                {new Intl.NumberFormat("pr-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>

              <td>{transaction.category}</td>

              <td>
                {new Intl.DateTimeFormat("pr-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
