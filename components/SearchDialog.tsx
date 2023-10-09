import { AlertDialog, Button, Dialog, TextField } from "@radix-ui/themes";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Icons } from "./icons";
import { useAppDispatch } from "@/redux/hooks";
import { debounce } from "@/lib/util";
import { increment } from "@/redux/features/counterSlice";
import { setSearch } from "@/redux/features/searchSlice";

interface SearchDialogProps {
  showDialog: boolean;
  setDialog: Dispatch<SetStateAction<boolean>>;
}
export default function SearchDialog({
  showDialog,
  setDialog,
}: SearchDialogProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useAppDispatch();

  const handleChange = useMemo(
    () =>
      debounce(({ target: { value } }: any) => {
        setSearchTerm(value);
        dispatch(setSearch(value));
      }, 500),
    [dispatch]
  );

  return (
    <Dialog.Root open={showDialog} onOpenChange={setDialog}>
      <Dialog.Content style={{ maxWidth: 450 }} className="relative">
        <TextField.Root>
          <TextField.Slot>
            <Icons.arrowRight height="16" width="16" />
          </TextField.Slot>
          <TextField.Input
            placeholder="Search the posts"
            onChange={handleChange}
          />
        </TextField.Root>
      </Dialog.Content>
    </Dialog.Root>
  );
}
