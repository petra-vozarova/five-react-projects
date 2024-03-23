import { Flex, Heading, Button } from "@chakra-ui/react";
import { Summary } from "../summary/summary";
import { ExpenseView } from "../expence-view/expense-view";
import { useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { useEffect } from "react";
export const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((transaction) => {
      transaction.type === "income"
        ? (income = income + parseFloat(transaction.amount))
        : (expense = expense + parseFloat(transaction.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.700"} color={"black"} ml={"4"}>
            Add new transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      ></Summary>
      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "row, 'row", 'row", "row']}
      >
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "expense")}
          type={"expense"}
        />
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "income")}
          type={"income"}
        />
      </Flex>
    </Flex>
  );
};
