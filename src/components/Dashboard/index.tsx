import { Container } from "./style";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable/index";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
