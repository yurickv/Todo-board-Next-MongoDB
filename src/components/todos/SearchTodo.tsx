import * as actions from "@/actions";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import { FaSearch } from "react-icons/fa";

const SearchTodo = ({}) => {
  return (
    <div>
      <Form action={actions.searchTodo}>
        <div className="flex gap-4 items-center">
          <Input
            name="searchTitle"
            type="text"
            placeholder="Write a title to search..."
          />
          <Button
            type="submit"
            text={<FaSearch />}
            bgColor="bg-blue-600"
            actionButton
          />
        </div>
      </Form>
    </div>
  );
};

export default SearchTodo;
