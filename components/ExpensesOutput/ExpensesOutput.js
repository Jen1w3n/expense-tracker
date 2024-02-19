import { View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Petrol.",
    amount: 400.0,
    date: new Date("2024-02-19"),
  },
  {
    id: "e2",
    description: "A pair of Demonias.",
    amount: 3499.99,
    date: new Date("2024-02-21"),
  },
  {
    id: "e3",
    description: "Groceries.",
    amount: 650.00,
    date: new Date('2024-02-23')
  },
  {
    id: "e4",
    description: "Palworld.",
    amount: 270.00,
    date: new Date("2024-02-25"),
  },
  {
    id: "e5",
    description: "Tokyo Ghoul box set.",
    amount: 270.00,
    date: new Date('2024-02-27')
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
