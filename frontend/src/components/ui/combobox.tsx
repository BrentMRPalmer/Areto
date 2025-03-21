import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormDataItem } from "@/types/form";

type ComboboxProps = {
  data: FormDataItem[];
  label: string;
  onChange: ({ label, value }: FormDataItem) => void;
};

export function Combobox({ data, label, onChange }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between p-5"
        >
          {currentValue
            ? data.find((item) => item.value === currentValue)?.label
            : `Select ${label}...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] bg-white p-0">
        <Command>
          <CommandInput placeholder={`Search ${label}s...`} />
          <CommandList>
            <CommandEmpty>{`No ${label} found.`}</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(selectedValue: string) => {
                    setCurrentValue(selectedValue);
                    setOpen(false);
                    onChange({ label: label, value: item.value });
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      currentValue === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
