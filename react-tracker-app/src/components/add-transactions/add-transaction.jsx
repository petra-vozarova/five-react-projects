import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  ModalFooter,
  Button,
  Radio,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
export const AddTransaction = ({ onClose, isOpen }) => {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);
  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction Description"
                name="description"
                type="text"
                onChange={handleFormChange}
              ></Input>
            </FormControl>

            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction Amount"
                name="amount"
                type="text"
                onChange={handleFormChange}
              ></Input>
              <RadioGroup mt="5" value={value} onChange={setValue}>
                <Radio
                  value="income"
                  colorScheme="blue"
                  name="type"
                  checked={formData.type === "income"}
                  onChange={handleFormChange}
                >
                  Income
                </Radio>
                <Radio
                  value="expense"
                  colorScheme="red"
                  name="type"
                  checked={formData.type === "expense"}
                  onChange={handleFormChange}
                >
                  Expenses
                </Radio>
              </RadioGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr={"4"} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose} type="submit">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};
